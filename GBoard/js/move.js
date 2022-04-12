var clientX = 0;
var clientY = 0;
var divx = 0;
var divy = 0;

var movingid = undefined;
var lmovingid = '';
var ismoving=false;


function gotomouse(id) {
	var target = document.getElementById(id);
	target.style.display = "block";
	//获取鼠标视口位置
	target.style.top = clientY - divy + "px";
	target.style.left = clientX - divx + "px";
	redo();
}


function divxy(obj) {
	var x = Number(window.event.clientX) // 鼠标相对屏幕横坐标
	var y = Number(window.event.clientY) // 鼠标相对屏幕纵坐标

	var div_x = Number(obj.getBoundingClientRect().left) // obj相对屏幕的横坐标
	divx = x - div_x;

	var div_y = Number(obj.getBoundingClientRect().top) // obj相对屏幕的纵坐标
	divy = y - div_y;
}


function mousemove(event) {
	event.preventDefault();
	clientX = event.clientX;
	clientY = event.clientY;
	gotomouse(movingid);
}


function move() {
	if(ismoving){
		ismoving=false;
		lmovingid=undefined;
		movingig=undefined;
		document.getElementById("BTNmove").innerText="Move";
	}else{
		var xid = undefined;
		for (x of choseset) {
			if (!xid)
				xid = x.id;
			else{
				ismoving=true;
				clearChose();
				move();
				return -1;
			}
		}
		if(xid==undefined){
			ismoving=true;
			move();
			return -2;
		}
		movingid=xid;
		lmovingid = xid;
		ismoving=true;
		document.getElementById("BTNmove").innerText="Stop Move";
	}
	console.log(ismoving)
}
