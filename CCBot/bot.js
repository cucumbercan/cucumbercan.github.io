var dic=[
	['hello','','hi~'],
	['hi','','hi~'],
	['你好','','你也好！'],
	['你','名字','我叫Cucumber.'],
	['不智能','','对不起，我还在试验阶段！<br>你可以进入<a href=\'https://cucumbercan.github.io/ChatBot/FB.html\'>FeedBack中心</a>提交你的意见！'],
	['人工','智障','对不起，我还在试验阶段！<br>你可以进入<a href=\'https://cucumbercan.github.io/ChatBot/FB.html\'>FeedBack中心</a>提交你的意见！'],
	// ['','',''],
]

function bot(){
	value=document.getElementById("ipt").value;
	document.getElementById("ipt").value="";
	var out="你说啥？我不明白。<br>你可以帮助我改进！<br>进入<a href='https://cucumbercan.github.io/ChatBot/FB.html'>FeedBack中心</a>提交你的意见！";
	for(var i=0;i<dic.length;i++)
	{
		if(value.indexOf(dic[i][0])!=-1 && value.indexOf(dic[i][1])!=-1){
			out=dic[i][2];
			break;
		}
	}
	bf=document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML=out;
	open("FB.html?&None&"+value+"&"+out)
}