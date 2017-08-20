var books = document.querySelectorAll('.bookPage');
for(var i=0; i<books.length; i++){
	setTransform(books[i],'translate3d(0px, 0px, '+(-i)+'px)')
}

function setTransform(e,v){
	var s = e.style;
	s.webkitTransform = 
	s.MozTransform = 
	s.msTransform = 
	s.Otransform =
	s.transform = v;
}

window.onload = function(){
	var books = document.querySelectorAll('.bookPage');
	var bookWrap = document.querySelector('.book');
	var currentPage = 0;
	var rotY=0;
	var flag = true;
	var timer;
	bookWrap.onmousedown = function(ev){
		var cx = ev.clientX;
		var cy = ev.clientY;
		flag = true;
		timer = setTimeout(function(){
			flag = false;
		},200);

		document.onmousemove = function(ev){
				var x = ev.clientX;
				var y = ev.clientY;
				var disX = x-cx;
				rotY -= disX/2;
				setTransform(bookWrap,'rotateY('+rotY+'deg)');
		}
		document.onmouseup = function(ev){
			document.onmousemove = document.onmouseup =null;
			clearTimeout(timer);
			console.log(flag);
			if(flag){
				var x =ev.pageX - bookWrap.offsetLeft;
				if(x<Math.floor(bookWrap.offsetWidth/2)){
					previousPage();
				}else{
					nextPage();
				}
			}

		}
		ev.preventDefault();
	}

	function previousPage(){
		if(currentPage>0){
			currentPage--;
			setTransform(books[currentPage],'translate3d(0px,0px,'+(-currentPage)+'px) rotateY(0deg)')
		}
	}

	function nextPage(){
		if(currentPage < books.length){
			setTransform(books[currentPage],'translate3d(0px,0px,'+currentPage+'px) rotateY(-170deg)');
			currentPage++;
		}
	}
}




