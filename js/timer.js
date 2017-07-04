window.onload = function () {

	var count = document.getElementById("count");
	var del = document.getElementById("del");
	var size = document.getElementById("size");

	del.onclick = function () {
		clearInterval(stop);
		count.textContent = 0;
		count.style.color = "#d33";
		del.onclick = null;
		student();
	}

	size.textContent = window.innerWidth + "x" + window.innerHeight;

	window.onresize = function () {
		size.textContent = window.innerWidth + "x" + window.innerHeight;
	}

	var stop = setInterval(start, 1000);

	var t = 1;

	function start() {
		count.textContent = t;
		if (t != 0)
			t--;
		else {
			clearInterval(stop);
			count.style.color = "#d33"
				student();
		}
	}
};
