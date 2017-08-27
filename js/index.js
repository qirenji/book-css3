var books = document.querySelectorAll('.bookPage');
// 设置书页
for(var i=0; i<books.length; i++){
	setTransform(books[i],'translate3d(0px, 0px, '+(-i)+'px)')
}

// transform属性兼容
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

	//鼠标摁下 
	bookWrap.onmousedown = function(ev){
		var cx = ev.clientX;
		var cy = ev.clientY;
		// 点击标志位
		flag = true;
		timer = setTimeout(function(){
			flag = false;
		},200);

		// 鼠标移动
		document.onmousemove = function(ev){
				var x = ev.clientX;
				var y = ev.clientY;
				var disX = x-cx;
				rotY -= disX/2;
				setTransform(bookWrap,'rotateY('+rotY+'deg)');
		}

		//鼠标抬起 
		document.onmouseup = function(ev){
			document.onmousemove = document.onmouseup =null;
			clearTimeout(timer);
			console.log(flag);
			// 点击执行操作
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

	// 前一页
	function previousPage(){
		if(currentPage>0){
			currentPage--;
			setTransform(books[currentPage],'translate3d(0px,0px,'+(-currentPage)+'px) rotateY(0deg)')
		}
	}

	// 后一页
	function nextPage(){
		if(currentPage < books.length){
			setTransform(books[currentPage],'translate3d(0px,0px,'+currentPage+'px) rotateY(-170deg)');
			currentPage++;
		}
	}
}




