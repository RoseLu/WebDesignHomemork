var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
  "drawable/y0.jpg",
  "drawable/y1.jpg",
  "drawable/y2.jpg",
  "drawable/y3.jpg",
  "drawable/y4.jpg",
  "drawable/y5.png",
  "drawable/y6.jpg",
  "drawable/y7.jpeg",
];

var userName = "";
var scoreList = [18, 29, 25, 40, 36, 26, 31, 28, 50,43,23,34];
var nameList = [
			'Rose',
			'John',
			'Susan',
			'Peter',
			'Jack',
			'Jenny',
			'Ruby',
			'Dannie',
			'Jason',
			'Sun',
			'Alice',
			'Tiffany'
		];

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}
	
function ShuffleImages() {
	var ImgAll = $(Source).children();
	var ImgThis = $(Source + " div:first-child");
	var ImgArr = new Array();

	for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	
		ImgThis = $(Source + " div:first-child");
	
	for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

function ResetGame() {
	ShuffleImages();
	$(Source + " div img").hide();
	$(Source + " div").css("visibility", "visible");
	Counter = 0;
	userName="";
	$("#success").remove();
	$("#counter").html("" + Counter);
	BoxOpened = "";
	ImgOpened = "";
	ImgFound = 0;
	$(Source).empty();
    startGame();
	return false;
}

function OpenCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(Source + " div").unbind("click", OpenCard); 
	
		$("#" + id + " img").slideDown('fast');

		if (ImgOpened == "") {
			BoxOpened = id;
			ImgOpened = $("#" + id + " img").attr("src");
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 300);
		} else {
			CurrentOpened = $("#" + id + " img").attr("src");
			if (ImgOpened != CurrentOpened) {
				setTimeout(function() {
					$("#" + id + " img").slideUp('fast');
					$("#" + BoxOpened + " img").slideUp('fast');
					BoxOpened = "";
					ImgOpened = "";
				},400);
			} else {
				ImgFound++;
				setTimeout(function() {
					$("#" + id + " img").parent().css("visibility", "hidden");
				    $("#" + BoxOpened + " img").parent().css("visibility", "hidden");
					BoxOpened = "";
					ImgOpened = "";
				},400);
			}
			setTimeout(function() {
				$(Source + " div").bind("click", OpenCard)
			}, 400);
		}
		Counter++;
		$("#counter").html("" + Counter);

		if (ImgFound == ImgSource.length) {
			setTimeout(endGame,1000);
		}
	}
}
function endGame() {
	alert("Congrats! Play again!");
	// $("#counter").prepend('<span id="success">You Found All Pictues With </span>');
	stopClock();
	userName = document.getElementById('username').value;
	addData(userName, Counter);
}

function startGame() {
	resetClock();
	setTimeout(startClock(),2000);

	$(function() {

	for (var y = 1; y < 3 ; y++) {
		$.each(ImgSource, function(i, val) {
			$(Source).append("<div id=card" + y + i + "><img src=" + val + " width='100%' height='100%' align='middle'/>");
		});
	}
		$(Source + " div").click(OpenCard);
		ShuffleImages();
	});
}

function addData(name, count) {
    if (name == null || name.length == 0) {
    	return;
    }
	var idx = nameList.indexOf(name);
	if (idx == -1) {
		nameList.push(name);
		scoreList.push(count);
	} else {
        var score = Math.min(scoreList[idx],count);
        nameList.splice(idx, 1);
        scoreList.splice(idx, 1);
        nameList.push(name);
        scoreList.push(score);
	}
}

/*timer*/
var start;
var stop;
var reset;
var sec=0;
var min=0;
var hr=0;
var running=false;
var timer;

function startClock(){
	running = true;
	timer = setInterval("countTime()", 1000);
	
}
function stopClock(){
	clearInterval(timer);
	running = false;
	
}

function resetClock(){
	running =false;
	sec=0;
	min=0;
	hr=0;
	showTime();
	
}

function countTime(){
    sec++;
		if(sec ==60){
			sec = 0;
			min++;
		}
		if(min == 60){
			min = 0;
			hr++;
		}
		showTime();
}

function showTime(){
	makeOne(sec,'#sec .ones');
	makeOne(min,'#min .ones');
	makeOne(hr,'#hr .ones');

	makeTen(sec,'#sec .tens');
	makeTen(min,'#min .tens');
	makeTen(hr,'#hr .tens');

}

function makeOne(time,type){
	var one = time%10;
	makeNumber(one,type);
}
function makeTen(time,type){
	var ten = Math.floor(time/10);
	makeOne(ten,type);
}
function makeNumber(num,type){

	switch(num){
		
	case 0:
	$(type).show();
	$(type+'.b7').hide();
	break;

	case 1:
	$(type).hide();
	$(type+'.b5,'+type+'.b6').show();
	break;

	case 2:
	$(type).show();
	$(type+'.b2,'+type+'.b5').hide();
	break;

	case 3:
	$(type).show();
	$(type+'.b2,'+type+'.b3').hide();
	break;

	case 4:
	$(type).show();
	$(type+'.b1,'+type+'.b3,'+type+'.b4').hide();
	break;

	case 5:
	$(type).show();
	$(type+'.b3,'+type+'.b6').hide();
	break;

	case 6:
	$(type).show();
	$(type+'.b6').hide();
	break;

	case 7:
	$(type).hide();
	$(type+'.b1,'+type+'.b5,'+type+'.b6').show();
	break;

	case 8:
	$(type).show();
	break;

	case 9:
	$(type).show();
	$(type+'.b3').hide();
	break;
	}
}


/*leader board*/
(function ($) {
	var Poller = function(options, callback){
		var defaults = {
			frequency: 60,
			limit: 10
		};
		this.callback = callback;
		this.config = $.extend(defaults, options);
		this.list = nameList;
	}

	Poller.prototype.getData = function() {
		this.list = nameList;
		var results = [];
		for (var i = 0, len = this.list.length; i < len; i++) {
			results.push({
				name:this.list[i],
				score:scoreList[i]
			});
		}
		return results;
	};
	
	Poller.prototype.processData = function() {
		return this.sortData(this.getData()).slice(0, this.config.limit);
	};

	Poller.prototype.sortData = function(data) {
		return data.sort(function(a, b) {
			return a.score - b.score;
		});
	};
	Poller.prototype.start = function() {
		var _this = this;
		this.interval = setInterval((function() {
			_this.callback(_this.processData());
		}), this.config.frequency * 1000);
		this.callback(this.processData());
		return this;
	};
	Poller.prototype.stop = function() {
		clearInterval(this.interval);
		return this;
	};
	window.Poller = Poller;

	var Leaderboard = function (elemId, options) {
		var _this = this;
		var defaults = {
			limit:10,
			frequency:15
		};
		this.currentItem = 0;
		this.currentScore = 0;
		this.config = $.extend(defaults,options);

		this.$elem = $(elemId);
		if (!this.$elem.length)
			this.$elem = $('<div>').appendTo($('body'));

		this.list = [];
		this.$content = $('<ul>');
		this.$elem.append(this.$content);

		this.poller = new Poller({frequency: this.config.frequency, limit: this.config.limit}, function (data) {
			if (data) {
				if(_this.currentScore != data.length){
					_this.buildElements(_this.$content,data.length);
				}
				_this.currentScore = data.length;
				_this.data = data;
				_this.list[0].$item.addClass('animate');
			}
		});

		this.poller.start();
	};

	Leaderboard.prototype.buildElements = function($ul,elemSize){
		var _this = this;
		$ul.empty();
		this.list = [];

		for (var i = 0; i < elemSize; i++) {
			var item = $('<li>')
				.on("animationend webkitAnimationEnd oAnimationEnd",eventAnimationEnd.bind(this) )
				.appendTo($ul);
			this.list.push({
               $item: item,
               $name: $('<span class="name">Loading...</span>').appendTo(item),
               $score: $('<span class="score">Loading...</span>').appendTo(item)
           });
		}

		function eventAnimationEnd (evt){
			this.list[this.currentItem].$name.text(_this.data[this.currentItem].name);
			this.list[this.currentItem].$score.text(_this.data[this.currentItem].score);
			this.list[this.currentItem].$item.removeClass('animate');
			this.currentItem = this.currentItem >= this.currentScore - 1 ? 0 : this.currentItem + 1;
			if (this.currentItem != 0) {
				this.list[this.currentItem].$item.addClass('animate');
			}
		}
	};

	Function.prototype.bind = function(){
		var fn = this, args = Array.prototype.slice.call(arguments),
			object = args.shift();
		return function(){
			return fn.apply(object,args.concat(Array.prototype.slice.call(arguments)));
		};
	};

	window.Leaderboard = Leaderboard;

	// function numberFormat(num) {
	// 	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	// }
})(jQuery);

$(document).ready(function ($) {
	var myLeaderboard = new Leaderboard(".content", {limit:8,frequency:6});
});