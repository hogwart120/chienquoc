var login = require("facebook-chat-api");
var statusFB = {};
login({email: "msi.official.vn@gmail.com", password: "kid01666462766"}, function callback (err, api) {
    api.listen(function callback(err, message) {
        console.log(message.threadID);
		api.setOptions({listenEvents: true});
			switch(event.type) {
            case "message":
                if(event.body === '/on') {
					statusFB[0] = "ON";
                }else if(event.body === '/off') {
					statusFB[0] = "OFF";
                }else{
					if(statusFB[0] == "ON"){
						api.sendMessage("Hiện tại tôi không thể trả lời tin nhắn!", message.threadID);
					}
				}
		});	
	});
