var ascii = createString('ascii')
var utf8 = createString('utf-8')
var hex = createString('hex')
var base64 = createString('base64')
var ucs2 = createString('ucs2')
var utf16le = createString('utf16le')

var json = {
  encode: function (obj) {
    return new Buffer(JSON.stringify(obj))
  },
  decode: function (buf) {
    return JSON.parse(buf.toString())
  }
}

var binary = {
  encode: function (obj) {
    return typeof obj === 'string' ? new Buffer(obj, 'utf-8') : obj
  },
  decode: function (buf) {
    return buf
  }
}

module.exports = function (fmt) {
  if (typeof fmt === 'object' && fmt && fmt.encode && fmt.decode) return fmt

  switch (fmt) {
    case 'json': return json

    case 'ascii': return ascii

    case 'utf-8':
    case 'utf8': return utf8

    case 'hex': return hex

    case 'base64': return base64

    case 'ucs-2':
    case 'ucs2': return ucs2

    case 'utf16-le':
    case 'utf16le': return utf16le
  }

  return binary
}

function createString (type) {
  return {
    encode: function (obj) {
      return new Buffer(obj, type)
    },
    decode: function (buf) {
      return buf.toString(type)
    }
  }
}
