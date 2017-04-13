var friendImage = {"Ena Markovic" : "images/friends/ena.png",
					"Austin Weale" : "images/friends/austin.jpg",
					"Kimiko Farmer" : "images/friends/kimiko.png",
					"Wei-jen Chiang" : "images/friends/weijen.jpg"};

var friends = ["Ena Markovic", "Austin Weale", "Kimiko Farmer", "Wei-jen Chiang"];

window.onload = function(){
	var datalist = document.getElementById("friend-name");
	datalist.addEventListener('input', displayImage);
}

function displayImage(){
	var currName = document.getElementById("friend-name").value;
	if(friends.indexOf(currName) != -1){
		var img = document.getElementById("user-image");
		img.src = friendImage[currName];
	}
}