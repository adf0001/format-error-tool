// global, for html page
assert = require("assert");
formatError = require("../format-error-tool.js");

module.exports = {

	"formatError()": function(done){
		var err1= formatError('err1','key1',{a:1,b:2});
		
		assert (
			err1.message ==='err1, "key1", {"a":1,"b":2}' && err1===formatError(formatError(formatError(err1)))
		);

		done(false);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
