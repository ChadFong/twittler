$(document).ready(function(){
var $main = $('main');
$('header').append('<p id="title">All Twits</p>');


var makeTweet = function(user){
	if(user !== undefined) {
		index = user.length-1;
		var tweet = function(){return user[index];};
		var location = $main;
	}
	else {
		index = streams.home.length-1;
		var tweet = function(){return streams.home[index];};
		var location = $main;
	}

	while(index >= 0) {
		var $tweet = $('<div></div>');
		$tweet.text('@' + tweet().user + ': ' + tweet().message);
  		$tweet.attr('id', tweet().user);

  		var end = Date.now();
		var elapsed = end - tweet().created_at;
		var hours = Math.floor(elapsed/36e5);
		var mins = Math.floor((elapsed % 36e5) / 6e4);
		var secs = Math.floor((elapsed % 6e4) / 1000);
		var string = "  Posted " + hours + ":" + mins + ":" + secs + " ago";
		var $time = $('<p class="time"></p>');
		$time.text(string);
		$tweet.append($time);
  		
  		$tweet.appendTo(location);
  		index -= 1;
	}
}

makeTweet();

$(document).on('click', 'div', function() {
	var name = $(this).attr("id");
	var userTweets = streams.users[name];
	$main.empty();
	$('#title').text(name + "'s Twits");
	$('button').text('Show all Twits!');
	makeTweet(userTweets);
});

$(":button").click(function(){
	$main.empty();
	$('#title').text("All Twits");
	$('button').text('Refresh Twits!');
	makeTweet();
});

});