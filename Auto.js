var login = require("facebook-chat-api");
var fs = require('fs');
var answeredThreads = {};
 
// Create simple echo bot
login({email: "msi.official.vn@gmail.com", password: "kid01666462766"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
        console.log(message.threadID);
		fs.appendFile('auto.config', 'OFF', function (err) {
			if (err) throw err;
		});
		if(message.threadID === '/on') {
			fs.writeFile('auto.config', 'ON', function (err) {
			if (err) throw err;
			console.log('ON!');
		});
        }
		if(message.threadID === '/off') {
			fs.writeFile('auto.config', 'OFF', function (err) {
			if (err) throw err;
			console.log('OFF!');
		});
        }		
		fs.readFile('auto.config', function(err, data) {
			if(data == "ON"){
				if(!answeredThreads.hasOwnProperty(message.threadID)){
				answeredThreads[message.threadID] = true;
				api.sendMessage("Hiện tại tôi không thể trả lời tin nhắn!", message.threadID);
			}
		}
		});
    });
});
