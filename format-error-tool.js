
// format-error-tool @ npm, format error.

/*
	use case 1, format an error
		formatError( text, keyValue, json )

	use case 2, make sure return an Error
		formatError( textOrError )
*/
module.exports = function (text, keyValue, json) {
	if (typeof keyValue !== "undefined") text += ", " + JSON.stringify(keyValue);
	if (typeof json !== "undefined") text += ", " + JSON.stringify(json);
	return (text instanceof Error) ? text : Error(text);
}
