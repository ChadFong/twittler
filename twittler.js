$(document).ready(function(){
var $main = $('main');
$main.html('');

var index = streams.home.length - 1;
while(index >= 0){
  var tweet = streams.home[index];
  var $tweet = $('<div></div>');
  $tweet.text('@' + tweet.user + ': ' + tweet.message);
  $tweet.attr('id', tweet.user);
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
		$tweet.text('@' + tweet.user + ': ' + tweet.message);
		$tweet.appendTo($('.userTweets'))
		tweetNum -= 1;
	}
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