var l=[
	["BOOMCheer","CC.","apps/BOOMCheer.png","apps/BOOMCheer.exe"],
	["name2","writer2","img2","hf"]
];

function search(){
	var number = 1;
	function Get() {
		urlinfo = window.location.href; //获取当前页面的url
		len = urlinfo.length; //获取url的长度
		offset = urlinfo.indexOf("?"); //设置参数字符串开始的位置
		newsidinfo = urlinfo.substr(offset, len) //取出参数字符串 这里会获得类似“id=1”这样的字符串
		newsids = newsidinfo.split("&"); //对获得的参数字符串按照“=”进行分割
		newsid = newsids[number]; //得到参数值
		newsname = newsids[2]; //得到参数名字
		return newsid;
	}
	number = 1;
	var user = Get();
	
	
	var lst=[];
	name=user;
	
	for(var i=0;i<l.length;i++){
		if(l[i][0].toLowerCase().indexOf(name)!=-1){
			lst.push(l[i])
		}
	}
	
	var s="";
	for(var i=0;i<lst.length;i++){
		s += "<div style=\"margin:1vw\"><h2><a href=\""+lst[i][3]+"\">"+lst[i][0]+"</a></h2><span>作者：</span>"+lst[i][1]+"<br><img src='"+lst[i][2]+"' style='max-height:50px'></div><br>";
	}
	
	document.getElementById("DIV").innerHTML = s;
}