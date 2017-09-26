var index = 0;
showSlide(index);

var header = document.getElementsByClassName("header")[0];
document.addEventListener('scroll', function() {
	header.style.height = "7%";
	header.style.fontSize = "120%";
	if(window.scrollY < 10) {
		header.style.height = "10%";
		header.style.fontSize = "150%";
	}
	var element = findElement();
	if(element != null) {
		var tab = document.getElementById(element.id + "_link");
		tab.style.borderBottom = "3px solid white";
	}
});

var home = document.getElementsByClassName("title")[0];
var about = document.getElementsByClassName("tabs")[0];
var field = document.getElementsByClassName("tabs")[1];
var rules = document.getElementsByClassName("tabs")[2];
var positions = document.getElementsByClassName("tabs")[3];

home.onclick = function () {
	scrollToDiv("title");
}
about.onclick = function () {
	scrollToDiv("about");
}
field.onclick = function () {
	scrollToDiv("field");
}
rules.onclick = function () {
	scrollToDiv("rules");
}
positions.onclick = function () {
	scrollToDiv("positions");
}

function scrollToDiv(div) {
	var divTo = document.getElementsByClassName(div)[0];
	var upper = divTo.offsetTop - header.offsetHeight;
	var tick = window.pageYOffset;
	var timer = setInterval(function() {
		var diff = upper - tick;
		if(diff > 0) {
			tick += 10;
			window.scrollTo(0, tick);
			if(diff <= 10)
				clearInterval(timer);
		}
		else if(diff < 0) {
			tick -= 10;
			window.scrollTo(0, tick);
			if(diff >= -10)
				clearInterval(timer);
		}
	}, .1);
}

function findElement() {
	var k;
	var ret = null;
	var divs = ["about", "field", "rules", "positions"];
	for(k = 0; k < divs.length; k++) {
		var elem = document.getElementsByClassName(divs[k])[0];
		var top = elem.getBoundingClientRect().top;
		if(top >= 0 && top <= window.innerHeight) {
			if(ret == null)
				ret = elem;
			else {
				document.getElementById(elem.id + "_link").style.borderBottom = "none";
			}
		}
		else {
			document.getElementById(elem.id + "_link").style.borderBottom = "none";
		}
	}
	return ret;
}

var prev = document.getElementById("prev");
prev.addEventListener('click', function() {
	index -= 1;
	showSlide(index);
});

var next = document.getElementById("next");
next.addEventListener('click', function() {
	index += 1;
	showSlide(index);
});

function showSlide(n) {
	var i;
	var slide = document.getElementsByClassName("slides");
	if (n > slide.length-1) {
		index = 0;
	}
	if (n < 0) {
		index = slide.length-1;
	}
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	slide[index].style.display = "block";
}

var modal = document.getElementById("modal");
var close;
var forward = document.getElementsByClassName("position")[0];
forward.addEventListener('click', function() {
	var fwd_modal = document.getElementsByClassName("content")[0];
	close = document.getElementsByClassName("close")[0];
	close.addEventListener('click', function() {
		var j;
		var content = document.getElementsByClassName("content");
		modal.style.display = "none";
		for (j = 0; j < content.length; j++) {
			content[j].style.display = "none";
		}
	});
	modal.style.display = "block";
	fwd_modal.style.display = "block";
});

var midfield = document.getElementsByClassName("position")[1];
midfield.addEventListener('click', function() {
	var md_modal = document.getElementsByClassName("content")[1];
	close = document.getElementsByClassName("close")[1];
	close.addEventListener('click', function() {
		var j;
		var content = document.getElementsByClassName("content");
		modal.style.display = "none";
		for (j = 0; j < content.length; j++) {
			content[j].style.display = "none";
		}
	});
	modal.style.display = "block";
	md_modal.style.display = "block";
});

var defender = document.getElementsByClassName("position")[2];
defender.addEventListener('click', function() {
	var def_modal = document.getElementsByClassName("content")[2];
	close = document.getElementsByClassName("close")[2];
	close.addEventListener('click', function() {
		var j;
		var content = document.getElementsByClassName("content");
		modal.style.display = "none";
		for (j = 0; j < content.length; j++) {
			content[j].style.display = "none";
		}
	});
	modal.style.display = "block";
	def_modal.style.display = "block";
});

var goalie = document.getElementsByClassName("position")[3];
goalie.addEventListener('click', function() {
	var gk_modal = document.getElementsByClassName("content")[3];
	close = document.getElementsByClassName("close")[3];
	close.addEventListener('click', function() {
		var j;
		var content = document.getElementsByClassName("content");
		modal.style.display = "none";
		for (j = 0; j < content.length; j++) {
			content[j].style.display = "none";
		}
	});
	modal.style.display = "block";
	gk_modal.style.display = "block";
});