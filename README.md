# format-error-tool
format error

# Install
```
npm install format-error-tool
```

# Usage
```javascript

var formatError = require("format-error-tool");

/*
	use case 1, format an error
		formatError( text, keyValue, json )

	use case 2, make sure return an Error
		formatError( textOrError )
*/
//formatError(text, keyValue, json)

var err1= formatError('err1','key1',{a:1,b:2});

assert (
	err1.message ==='err1, "key1", {"a":1,"b":2}' && err1===formatError(formatError(formatError(err1)))
);

```
