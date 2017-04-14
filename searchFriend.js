/**
 * Created by Wei-Jen on 4/13/17.
 */
document.addEventListener('DOMContentLoaded', function() {
    var allFriends = {
        'Ena': 1,
        'Austin': 0,
        'Frank': 1,
        'Phil': 0
    };
    var friendList = document.getElementById('friendList');
    var searchButton = document.getElementById('searchButton');
    addFriends();


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




