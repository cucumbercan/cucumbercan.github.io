var MX = 0;
var MY = 0;
var box = document.getElementById("input_box");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var file = document.getElementById("file");
var chose1=document.getElementsByName("chose1");
var submit = document.getElementById("submit");
var root = document.getElementById("root");
let choseset = new Set();

var myMenu = document.getElementById("myMenu");
document.addEventListener("contextmenu", function(event) {
	undefined
	event.preventDefault();
	myMenu.style.display = "block";
	//获取鼠标视口位置
	MY = event.clientY;
	MX = event.clientX;
	myMenu.style.top = MY + "px";
	myMenu.style.left = MX + "px";
	
	console.log(movingid);
	lmovingid=movingid;
	movingid=undefined;
	ismoving?divxy(choseset.keys().next().value):0;
});

document.addEventListener("click", function(event) {
	undefined
	myMenu.style.display = "none";
	movingid=lmovingid;
});

document.addEventListener("copy", function(event) {
	clearChose();
})

function clearChose(){
	for(x of choseset){
		document.getElementById(x.id).style.borderColor="black";
	}
	// console.log(document.getElementById("O"))
	choseset.clear();
}


function input_open() {
	box.style.display = "block";
}

function input_close() {
	box.style.display = "none";
	input1.value = "";
	input2.value = "";
	input3.value = "";
	input1.style.display = "block";
	input2.style.display = "block";
	input3.style.display = "block";
	file.style.display = "none";
	input1.onchange = "";
	input2.onchange = "";
	input3.onchange = "";
	document.getElementById("chose1").style.display="none";
	for(var i=0;i<chose1.length;i++)
		chose1[i].checked=false;
}

function SetC1(num,li,pre){
	var C1=document.getElementById("chose1");
	C1.innerHTML="";
	C1.style.display="block";
	for(var i=0;i<num;i++)
		C1.innerHTML+='<label><input type="radio" name="chose1" value="'+i+'"'+(li[i]==pre?' checked=true':'')+'>'+li[i]+'</label>';
}
function GetC1(li){
	for(var i=0;i<chose1.length;i++)
		if(chose1[i].checked)
			return li[i];
}











function point() {
	input_close();
	input_open()
	input1.placeholder = "Name";
	input2.placeholder = "X: " + MX;
	input3.placeholder = "Y: " + MY;
	input1.focus();

	input1.onchange = function() {
		submit.focus();
	}
	submit.onclick = function() {
		addpoint(input1.value, (input2.value == '' ? MX : input2.value), (input3.value == '' ? MY : input3.value))
		input_close();
		clearChose();
	}
}




function line() {
	var flag=[];
	for(x of choseset)
		if(x.className=="point")
			flag.push(x);
			
	input_close();
	input_open()
	input1.placeholder = "Point 1";
	input2.placeholder = "Point 2";
	input3.style.display = "none";
	if(flag.length==2){
		input1.value=flag[0].id;
		input2.value=flag[1].id;
		submit.focus();
	}else{
		input1.focus();
		
		input2.onchange = function() {
			submit.focus();
		}
	}
	submit.onclick = function() {
		addline(input1.value, input2.value)
		input_close();
		clearChose();
	}
}




function circle(){
	var flag=[];
	for(x of choseset)
		if(x.className=="point")
			flag.push(x);
			
	input_close();
	input_open()
	input1.placeholder = "Center Point";
	input2.placeholder = "R or Point2";
	input3.style.display = "none";
	if(flag.length==2){
		input1.value=flag[0].id;
		input2.value=flag[1].id;
		submit.focus();
	}else if(flag.length==1){
		input1.value=flag[0].id;
		input2.focus();
	}else{
		input1.focus();
	}

	input2.onchange = function() {
		submit.focus();
	}
	submit.onclick = function() {
		var aaa;
		if(Math.abs(Number(input2.value))>0){
			aaa=input2.value;
		}else{
			aaa=distance(input1.value,input2.value)
		}
		addcir(input1.value, aaa);
		input_close();
		clearChose();
	}
}




function find_f() {
	var flag=gotchose("");
	if(flag.length==1){
		alert(flag[0].id);
		return 0;
	}
	input_close();
	input_open();
	input1.placeholder = "ID";
	input2.style.display = "none";
	input3.style.display = "none";
	input1.focus();

	input1.onchange = function() {
		submit.focus();
	}
	submit.onclick = function() {
		find(input1.value)
		input_close();
		clearChose();
	}
}




function text() {
	var flag=gotchose("point");
	var lock=null;
	if(flag.length==1)
		lock=flag[0].id;
	input_close();
	input_open();
	input1.placeholder="Text";
	input2.style.display="none";
	input3.style.display="none";
	input1.focus();

	input1.onchange = function() {
		submit.focus();
	}
	submit.onclick = function() {
		console.log(input1.value,MX,MY,lock)
		addText(input1.value,MX,MY,lock);
		input_close();
		clearChose();
	}
}



function del_(li){
	var method=li[0];
	if(method=='Angle'){
		DEL(li[1]+li[2])
		DEL(li[2]+li[3])
		DEL(li[1])
		DEL(li[2])
		DEL(li[3])
	}
	if(method=='Triangle'){
		DEL(li[1]+li[2])
		DEL(li[2]+li[3])
		DEL(li[1]+li[3])
		DEL(li[1])
		DEL(li[2])
		DEL(li[3])
	}
}
function del3(){
	input_close();
	input_open();
	input1.placeholder="Point A";
	input2.placeholder="Point B";
	input3.placeholder="Point C";
	SetC1(2,['Angle','Triangle'],pre='Triangle');
	input1.focus();
	
	input3.onchange = function() {
		submit.focus();
	}
	submit.onclick = function() {
		sli=SORT([input1.value,input2.value,input3.value])
		var name=[GetC1(['Angle','Triangle']),sli[0],sli[1],sli[2]]
		console.log(name)
		del_(name);
		input_close();
		clearChose();
	}
	
}






function clicking(id){
	var target=document.getElementById(id);
	// console.log(target,choseset.has(target))
	if(choseset.has(target)){
		choseset.delete(target);
		target.style.borderColor="black";
		target.style.color="black";
		// console.log(-1)	
		return -1;
	}
	choseset.add(target);
	// console.log(choseset)
	target.style.borderColor="#ca4fff";
	target.style.color="#ca4fff";
	return 1;
}


function Dele(){
	for(x of choseset){
		DEL(x.id);
	}
	choseset.clear();
}


function gotchose(CLS){
	var flag=[];
	for(x of choseset)
		if(x.className==CLS)
			flag.push(x);
	return flag
}