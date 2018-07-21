var login = require("facebook-chat-api");
var statusFB = {};
login({email: "msi.official.vn@gmail.com", password: "kid01666462766"}, function callback (err, api) {
	//if(err) return console.error(err);
    api.listen(function callback(err, message) {
        //console.log(message.body);
                if(message.body === '/on'){
			statusFB[0] = "ON";
			console.log("Turn on BOT!!!");
                }else if(message.body === '/off'){
			statusFB[0] = "Turn off BOT!!!";
                }else{
			if(statusFB[0] == "ON"){
				api.sendMessage("Hiện tại tôi không thể trả lời tin nhắn!", message.threadID);
		}
		
	});	
});
