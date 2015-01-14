$(document).ready(function(){
var $main = $('main');
$main.html('<p>All Tweets</p>');

var index = streams.home.length - 1;
while(index >= 0){
  var tweet = streams.home[index];
  var $tweet = $('<div></div>');
  $tweet.text('@' + tweet.user + ': ' + tweet.message);
  $tweet.attr('id', tweet.user);
  /*
  var time = timeCal(tweet.created_at);
  var $time = $('<p class="time"></p>');
  $time.text(time);
  $tweet.append($time);
  */
  $tweet.appendTo($main);
  index -= 1;
}

var tweetReader = function(user) {
	$(".userTweets").empty();
	tweetNum = user.length - 1;
	$('.userTweets').append($("<p>" + user[0].user + "'s Tweets</p>"));
	while(tweetNum >= 0) {
		var tweet = user[tweetNum];
		var $tweet = $('<div></div>');


		$tweet.text('@' + tweet.user + ': ' + tweet.message)
		
		var time = timeCal(tweet.created_at);
		var $time = $('<p class="time"></p>');

		$time.text(time);
		
		$tweet.append($time);
		
		$tweet.appendTo($('.userTweets'))
		tweetNum -= 1;
	}
}

var timeCal = function(start) {
	var end = Date.now();
	var elapsed = end - start;
	var hours = Math.floor(elapsed/36e5);
	var mins = Math.floor((elapsed % 36e5) / 6e4);
	var secs = Math.floor((elapsed % 6e4) / 1000);
	var string = "  Posted " + hours + ":" + mins + ":" + secs + " ago";
	return string;
}


var test = $('<p>It worked!</p>');

$('div').click(function() {
	var name = $(this).attr("id");
	var userTweets = streams.users[name];
	tweetReader(userTweets);
});

$(":button").click(function(){
	$(this).remove();
});

});