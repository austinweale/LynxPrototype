var friendImage = {"Ena Markovic" : "images/friends/ena.png",
					"Austin Weale" : "images/friends/austin.jpg",
					"Kimiko Farmer" : "images/friends/kimiko.png",
					"Wei-jen Chiang" : "images/friends/weijen.jpg"};

var friends = ["Ena Markovic", "Austin Weale", "Kimiko Farmer", "Wei-jen Chiang"];

window.onload = function(){
	var datalist = document.getElementById("friend-name");
	datalist.addEventListener('input', displayImage);

	var textarea = document.getElementById("message");
	textarea.onkeydown = checkForURL;

	var sendButton = document.getElementById("send");
	sendButton.onclick = toggleSent;
}

function displayImage(){
	var currName = document.getElementById("friend-name").value;
	if(friends.indexOf(currName) != -1){
		var img = document.getElementById("user-image");
		img.src = friendImage[currName];
	}
}

function checkForURL(){
	var text = document.getElementById("message").value;
		if(text.match("((http://|https://)?www\..*)")){
			
			document.getElementById("tag-area").style.display = "block";
		} else {
			document.getElementById("tag-area").style.display = "none";
		}
}

function toggleSent(){
	document.getElementById("message-area").style.display = "none";
	document.getElementById("sent-message").style.display = "block";
}