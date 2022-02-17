var l=[
	["BOOMCheer","CC.","apps/BOOMCheer.png","apps/BOOMCheer.exe"],
	["name2","writer2","img2","hf"]
];

function search(){
	var lst=[];
	name=document.getElementById("name").value.toLowerCase();
	
	for(var i=0;i<l.length;i++){
		if(l[i][0].toLowerCase().indexOf(name)!=-1){
			lst.push(l[i])
		}
	}
	str="s.html?&"+lst.length*4;
	for(var i=0;i<lst.length;i++){
		for(var j=0;j<4;j++){
			str+="&"+lst[i][j];
		}
	}
	window.location.href=str;
}