/*memory game*/
var dictionary = [];
var keys = [];
var indexes = [];
var countOfClicked = 0;
var alreadyflipped = 0;  //number of space that have been already flipped
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
var alphbet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


var startTime = 0, endTime = 0;
var totalTime = new Object();


Array.prototype.randomize = function(){             //shuffle the order of letters in the dictionary
    var counter = this.length;
    var i, temp;
    while(counter > 0){
        i = Math.floor(Math.random() * counter);
        counter--;
        temp = this[counter];
        this[counter] = this[i];
        this[i] = temp;
    }
}

function generateArray() {
   var char = "";
   var pool = alphbet;
   for (var count = 0;count < 8; count++) {
   	var i = Math.floor(Math.random() * pool.length);
   	char = pool[i];
   	dictionary.push(char);
   	dictionary.push(char);
   	pool.splice(i, 1);
   }
}
function newBoard(){
	resetClock();
	setTimeout(startClock(),2000);
    // letterOrPic = $('input[name="pattern"]:checked').val();
	// startTime = new Date().getTime();
	userName = document.getElementById('username').value;

	countOfClicked = 0;
	var result = "";
	generateArray();
    dictionary.randomize();
	for(var i = 0; i < dictionary.length; i++){
		result += '<div id="space_'+i+'" onclick="mainMethod(this,\''+dictionary[i]+'\')"></div>';
	}
	document.getElementById('board').innerHTML = result;
}

function mainMethod(space,key){
	countOfClicked++;
	console.log(key);
	if(space.innerHTML == "" && keys.length < 2){
		space.innerHTML = key;
		space.style.background = 'white';
		if(keys.length == 0){
			keys.push(key);
			indexes.push(space.id);
		} else if(keys.length == 1){
			keys.push(key);
			indexes.push(space.id);
			if(keys[0] == keys[1]){
				alreadyflipped += 1;
				keys = [];
            	indexes = [];
				if(alreadyflipped == dictionary.length / 2){   //all space has been flipped
					setTimeout(startNewGame, 300);
				}
			} else {
				setTimeout(flipBack, 1000);
			}
		}
	}
}
function startNewGame() {
	stopClock();
	// endTime = new Date().getTime();
	// var totalSeconds = endTime - startTime;
 //    changeSeconds(totalSeconds);

	addData(userName, countOfClicked);
	alert("Congrats! You have used " + countOfClicked + " times click to win!");
	countOfClicked = 0;
	userName = "";
	document.getElementById('board').innerHTML = "";
	dictionary = [];
	alreadyflipped = 0;
	newBoard();
}
function flipBack(){
	var space_1 = document.getElementById(indexes[0]);
	var space_2= document.getElementById(indexes[1]);
	space_1.style.background = 'url(mask.gif) no-repeat center center';
	space_1.style.backgroundSize = '100% 100%';
	space_1.innerHTML = "";
	space_2.style.background = 'url(mask.gif) no-repeat center center';
	space_2.style.backgroundSize = '100% 100%';
	space_2.innerHTML = "";
	keys = [];
	indexes = [];
}
function changeSeconds(total) {
	var minutes = Math.round(Math.round(total / 1000) / 60);
	var seconds = Math.round(total / 1000) % 60;
	totalTime["seconds"] = seconds;
	totalTime["minutes"] = minutes;
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

/*leaderboard*/
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

