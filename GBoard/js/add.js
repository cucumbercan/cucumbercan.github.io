var root = document.getElementById("root")
var DEL_dic = new Array();


function DATA(str){
	document.getElementById("data").dataset.log+=str;
}


function addpoint(name, p_left, p_top) {
	if (document.getElementById(name) != null) {
		alert("Error2 : Name Duplication.");
		return -2;
	}
	root.innerHTML = root.innerHTML + '<div onclick="clicking(this.id);" class="point" id="' + name + '" style="left:' + p_left + 'px;top:' + p_top +
		'px;"></div>';
	DATA(',{"type":"POINT","id":"'+name+'","left":"'+p_left+'","right":"'+p_top+'"}');
}



function addline(point1, point2) {
	if (point1.localeCompare(point2) == 1) {
		var temp = point1;
		point1 = point2;
		point2 = temp;
	}
	var p1 = document.getElementById(point1);
	var p2 = document.getElementById(point2);
	if (p1 == null || p2 == null) {
		alert("Error1 : Point Not Found.");
		return -1;
	}
	if (document.getElementById(point1 + point2) || document.getElementById(point1 + point2)) {
		alert("Error3 : Line Haved.")
		return -3;
	}
	var p1_left = p1.style.left.substr(0, p1.style.left.length - 2);
	var p2_left = p2.style.left.substr(0, p2.style.left.length - 2);
	var p1_top = p1.style.top.substr(0, p1.style.top.length - 2);
	var p2_top = p2.style.top.substr(0, p2.style.top.length - 2);

	var deg_ = Math.atan((p2_left - p1_left) / (p1_top - p2_top)) * 180 / Math.PI;

	var height_ = Math.sqrt(Math.pow(p1_left - p2_left, 2) + Math.pow(p1_top - p2_top, 2));

	var top_ = Math.min(p1_top, p2_top) - height_ / 2 + Math.sin((90 - deg_) * Math.PI / 180) * height_ / 2 + 1.5;

	var left_ = (deg_ < 0 ? Math.max(p1_left, p2_left) : Math.min(p1_left, p2_left)) + Math.sin(deg_ * Math.PI / 180) *
		height_ / 2 + 1.5;

	var style_ = "transform: rotate(" + deg_ + "deg);height:" + height_ + "px;left:" + left_ + "px;top:" + top_ + "px;";

	root.innerHTML = root.innerHTML + "<div onclick=\"clicking(this.id);\" class='line' id=\"" + point1 + point2 + "\" style=\"" + style_ + "\">";
	
	DATA(',{"type":"LINE","id":"' + point1 + point2 + '","P1":"'+point1+'","P2":"'+point2+'"}');
}



function find(name) {
	var target = document.getElementById(name);
	target.style.borderColor = "red";
	setTimeout(function() {
		if(choseset.has(target))
			target.style.borderColor = "#ca4fff";
		else
			target.style.borderColor = "black";
	}, 3000)
}



function distance(p1, p2) {
	var P1 = document.getElementById(p1);
	var P2 = document.getElementById(p2);
	if (P1 == null || P2 == null) {
		alert("Error4 : Point Not Found.");
		return -4;
	}
	var X1 = P1.style.left;
	var Y1 = P1.style.top;
	var X2 = P2.style.left;
	var Y2 = P2.style.top;

	X1 = Number(X1.substr(0, X1.length - 2));
	X2 = Number(X2.substr(0, X2.length - 2));
	Y1 = Number(Y1.substr(0, Y1.length - 2));
	Y2 = Number(Y2.substr(0, Y2.length - 2));

	var a2 = Math.pow(X1 - X2, 2);
	var b2 = Math.pow(Y1 - Y2, 2);
	// console.log(a2,b2)
	return Math.sqrt(a2 + b2)
}



function addcir(o, r) {
	// console.log(o,r)
	var O = document.getElementById(o);
	var R = Number(r);
	// console.log(r=='',distance(o,p),Number(r))
	if (O == null) {
		alert("Error5 : Point Not Found.");
		return -5;
	} else if (R <= 0) {
		alert("Error6 : 'R' Error.");
		return -6;
	} else if (document.getElementById("Circle-" + o + R) != null) {
		alert("Error7 : Circle Haved.");
		return -7;
	}
	var v = '<div onclick="clicking(this.id);" class="circle" id="Circle-' + o + Math.floor(R) + '" style="width: ' + 2 * R + 'px;height: ' + 2 * R +
		'px;top:' + (Number(O.style.top.substr(0, O.style.top.length - 2)) - R + 1.5) + 'px;left:' + (Number(O.style.left.substr(0, O.style.left.length - 2)) - R + 1.5) + 'px;"></div>'

	var v1 = '<div class="incircle" id="Circle-' + o + Math.floor(R) + '" style="width: ' + 2 * R + 'px;height: ' + 2 * R +
		'px;top:' + (Number(O.style.top.substr(0, O.style.top.length - 2)) - R + 3) + 'px;left:' + (Number(O.style.left.substr(0, O.style.left.length - 2)) - R + 3) + 'px;"></div>'

	root.innerHTML = root.innerHTML + v + v1;
	DATA(',{"type":"CIRCLE","id":"Circle-'+o+Math.floor(R)+'","O":"'+o+'","R":"'+Math.floor(R)+'"}');
}


function addText(text,MoX,MoY,lock){
	// console.log(MoX,MoY)
	root.innerHTML=root.innerHTML+"<div onclick='clicking(this.id)' id='Text:"+text+"' style='top:"+MoY+"px;left:"+MoX+"px;' class='text'>"+text+"</div>";
	// console.log(MoY)
	if(lock){
		var target=document.getElementById(lock);
		var me=document.getElementById("Text:"+name);
		
		var divy=(MoY-Number(target.style.top.substr(0,target.style.top.length-2)))
		var divx=(MoX-Number(target.style.left.substr(0,target.style.left.length-2)))
		
		DATA(',{"type":"TEXT","id":"Text:'+text+'","text":"'+text+'","X":"'+MoX+'","Y":"'+MoY+'","lock":"true","target":"'+lock+'","divx":"'+divx+'","divy":"'+divy+'"}');
		return 0;
	}
	DATA(',{"type":"TEXT","id":"Text:'+text+'","text":"'+text+'","X":"'+MoX+'","Y":"'+MoY+'","lock":"false"}');
}


function DEL(id,bl) {
	root.innerHTML = root.innerHTML.replace(('id="' + id + '" style="'), 'id="DEL" style="display:none;');
	if(bl)	return 0;
	DEL_dic[id]=(DEL_dic[id]==undefined?1:DEL_dic[id]+1);
}

function SORT(li) {
	var i1=li[0];
	var i2=li[1];
	var i3=li[2];
	
	if (i1.localeCompare(i2) == 1) {var temp = i1;i1 = i2;i2 = temp;}
	if (i2.localeCompare(i3) == 1) {var temp = i2;i2 = i3;i3 = temp;}
	if (i1.localeCompare(i3) == 1) {var temp = i1;i1 = i3;i3 = temp;}
	
	if (i1.localeCompare(i2) == 1) {var temp = i1;i1 = i2;i2 = temp;}
	if (i2.localeCompare(i3) == 1) {var temp = i2;i2 = i3;i3 = temp;}
	if (i1.localeCompare(i3) == 1) {var temp = i1;i1 = i3;i3 = temp;}
	
	if (i1.localeCompare(i2) == 1) {var temp = i1;i1 = i2;i2 = temp;}
	if (i2.localeCompare(i3) == 1) {var temp = i2;i2 = i3;i3 = temp;}
	if (i1.localeCompare(i3) == 1) {var temp = i1;i1 = i3;i3 = temp;}
	
	return [i1,i2,i3];
}

function redo(){
	var jsonS='{"main":['+document.getElementById("data").dataset.log+']}';
	document.getElementById("data").dataset.log="{}";
	root.innerHTML='<data data-log="{}" id="data">';
	// console.log(jsonS)
	var log=JSON.parse(jsonS).main;
	// console.log(document.getElementById("data").dataset.log)
	// console.log(log);
	
	for(var i=1;i<log.length;i++){
		target=log[i];
		if(DEL_dic[target.id]>0){
			DEL_dic[target.id]--;
			continue;
		}
		
		
		
		
		if(target.id==movingid && target.type=="POINT"){
			addpoint(target.id,clientX - divx,clientY - divy);
			continue;
		}
		if(target.id==movingid && target.type=="TEXT"){
			addText(target.text,clientX - divx,clientY - divy,target.lock=="true"?target.target:null);
			continue;
		}
		
		
		
		
		if(target.type=="POINT"){
			addpoint(target.id,Number(target.left),Number(target.right));
		}else if(target.type=="LINE"){
			addline(target.P1,target.P2);
		}else if(target.type=="CIRCLE"){
			addcir(target.O,target.R);
		}else if(target.type=="TEXT"){
				var ttarget=document.getElementById(target.target);
			// return ttarget;	
			// console.log(target.text,Number(ttarget.style.left.substr(0,ttarget.style.left.length-2))+Number(target.divx),Number(ttarget.style.top.substr(0,ttarget.style.top.length-2))+Number(target.divy),target.target);
			
			if(target.lock=="true"){
				var ttarget=document.getElementById(target.target);
				addText(target.text,Number(ttarget.style.left.substr(0,ttarget.style.left.length-2))+Number(target.divx),Number(ttarget.style.top.substr(0,ttarget.style.top.length-2))+Number(target.divy),target.target);
				
			}else{
				addText(target.text,Number(target.X),Number(target.Y));
			}
		}
	}
}
