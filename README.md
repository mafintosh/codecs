# codecs

Create an binary encoder/decoder for json, utf-8 or custom types

```
npm install codecs
```

Useful to support value encodings similar to leveldb's.

## Usage

``` js
var codecs = require('codecs')
var json = codecs('json')

console.log(json.encode({hello: 'world'})) // new Buffer('{"hello":"world"}')
console.log(json.decode(new Buffer('{"hello":"world"}'))) // {hello: 'world'}
```

## API

#### `var codec = codecs(type)`

Create a new codec. Supported types are `json`, `utf-8`, `utf8` and `binary`.
If an unknown type is passed in `binary` is used. If you want to use a custom codec you can pass in an object containing a an `encode` and `decode` method and that will be returned.

#### `var buf = codec.encode(value)`

Encode a value to a buffer.

#### `var value = codec.decode(buf)`

Decode a buffer to a value.

## License

MIT