var json = {
  encode: function (obj) {
    return new Buffer(JSON.stringify(obj))
  },
  decode: function (buf) {
    return JSON.parse(buf.toString())
  }
}

var utf8 = {
  encode: function (obj) {
    return new Buffer(obj, 'utf-8')
  },
  decode: function (buf) {
    return buf.toString('utf-8')
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
    case 'utf-8':
    case 'utf8': return utf8
  }

  return binary
}
