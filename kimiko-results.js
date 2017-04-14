/**
 * Created by Wei-Jen on 4/14/17.
 */
document.addEventListener('DOMContentLoaded', function() {



    var allFriends = {
        'Ena': 1,
        'Austin': 0,
        'Frank': 1,
        'Phil': 0
    };
    var addFriendButton = document.getElementById('demo');
    var friendList = document.getElementById('friendList');
    var searchButton = document.getElementById('searchButton');
    addFriends();

    addFriendButton.addEventListener('click', function() {
        showSnackBar();
    });

    function showSnackBar() {
        // Get the snackbar DIV
        var snackbar = document.getElementById("snackbar");

        // Add the "show" class to DIV
        snackbar.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
    }



    function addFriends() {
        for (var friendName in allFriends) {
            var friend = document.createElement('a');
            friend.innerHTML = friendName;
            friend.className = 'list-group-item friend';
            var status = allFriends[friendName];
            if (status === 1) {
                friend.className += ' list-group-item-success';
            } else {
                friend.className += ' disabled';
            }
            friendList.appendChild(friend);
        }
    }
});