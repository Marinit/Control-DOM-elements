function student() {

	var head = document.querySelectorAll("#head")[0],		
		headInner = head.innerHTML;
		
	for(var i = 0, headInnerLength = headInner.length; i < headInnerLength; i += 2 ){	
	
		headInner = headInner.substr(0, i) + headInner[i].toUpperCase() + headInner.substr(i + 1);		
	}
	head.innerHTML = headInner;
	
	var c = document.querySelector("#info").children;
	
	for (var i=0; i<3; i++){
		
		c[i].style.cssText = " width: 900px; \
							display: table; \
							margin: 10px auto; \
							";
	};	
	
	var tbody = document.querySelector("tbody").children;
	for (var i = 2, tbodyLength = tbody.length; i < tbodyLength; i += 2){
		 
		var tr = tbody[i].children,
			trLength = tr.length;
			
		for(var j = 1; j < trLength; j++){
			tr[j].style.backgroundColor = "black";
		}
		
	 }
	
	var a = document.querySelectorAll("#foot p")[1];
	a.style.fontSize = "0.5em";
	
	var b = document.querySelectorAll("#foot_img img");
	
	for (var i=0; i<b.length; i++){
	
		b[i].style.transform = "rotate(" + parseInt(20-Math.random()*40+1) + "deg)";

	}
	
	var pNeeded = document.querySelectorAll("#col3 p")[1];		

	pNeeded.innerHTML = pNeeded.innerHTML.replace(/a/ig,'<span style="color: red;">A</span>');
		
	
	head.style.background = "linear-gradient(90deg, #6464fa 5%, #d664c0 25%, #ffa76b 60%, #ffff64 100%)";
	head.style.webkitBackgroundClip = "text";
	head.style.color = "transparent";
	head.style.textShadow = "none";

};
