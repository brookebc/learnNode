//get the filesystem module
var fs = require ('fs');
// create module with dir and filter arguments
// var foo = module.exports = function (dir, filter){
	//reading the directory
module.exports = function (dir, filter, cb){
	fs.readdir(dir,function(err, data){
		if (err) return console.log(err);
		data.forEach(function(item){
			var arr = item.split('.');
			if (arr.length > 1 && arr[arr.length -1] === filter) {
				console.log(item);
			}	
		});
	});	
};

//foo(process.argv[2], process.argv[3]);