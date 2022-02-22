// var dic=[
// 	['hello','','hi~'],
// 	['hi','','hi~'],
// 	['你好','','你也好！'],
// 	['你','名字','我叫Cucumber.'],
// 	['不智能','','对不起，我还在试验阶段！<br>你可以进入<a href=\'https://cucumbercan.github.io/ChatBot/FB.html\'>FeedBack中心</a>提交你的意见！'],
// 	['人工','智障','对不起，我还在试验阶段！<br>你可以进入<a href=\'https://cucumbercan.github.io/ChatBot/FB.html\'>FeedBack中心</a>提交你的意见！'],
// 	// ['','',''],
// ]


// var HttpClient = function() {
// 	    this.get = function(aUrl, aCallback) {
// 	        var anHttpRequest = new XMLHttpRequest();
// 	        anHttpRequest.onreadystatechange = function() { 
// 	            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
// 	                aCallback(anHttpRequest.responseText);
// 	        }
	 
// 	        anHttpRequest.open( "GET", aUrl, true );            
// 	        anHttpRequest.send( null );
// 	    }
// 	}
// 	function openXX(){
// 			var client = new HttpClient();
// 			client.get('https://sctapi.ftqq.com/SCT119256T0o7pi2FlHtYEBaZDkxIRzHfB.send?title=CCOS - FeedBack&desp='+document.getElementById("f").value+':::::::::::from:'+document.getElementById("em").value, function(response) {
// 				// do something with response
// 				inner("<font size=10>We get your FeedBack!</font>")
// 			});
// 	}

// function bot(){
// 	value=document.getElementById("ipt").value;
// 	document.getElementById("ipt").value="";
// 	var out="你说啥？我不明白。<br>你可以帮助我改进！<br>进入<a href='https://cucumbercan.github.io/ChatBot/FB.html'>FeedBack中心</a>提交你的意见！";
// 	for(var i=0;i<dic.length;i++)
// 	{
// 		if(value.indexOf(dic[i][0])!=-1 && value.indexOf(dic[i][1])!=-1){
// 			out=dic[i][2];
// 			break;
// 		}
// 	}
// 	bf=document.getElementById("ans").innerHTML;
// 	document.getElementById("ans").innerHTML=out;
// 	var client = new HttpClient();
// 	client.get("https://sctapi.ftqq.com/SCT119256T0o7pi2FlHtYEBaZDkxIRzHfB.send?title=FeedBack - CB&desp="+value+":::::::return::::::"+out, function(response) {
// 		// do something with response
// 		inner("<font size=10>We get your FeedBack!</font>")
// 	});
// }

























var dic=[
	['hello','','hi~'],
	['hi','','hi~'],
	['你好','','你也好！'],
	['你','名字','我叫Cucumber.'],
	['不智能','','对不起，我还在试验阶段！<br>你可以进入<a href=\'https://cucumbercan.github.io/CCBot/FB.html\'>FeedBack中心</a>提交你的意见！'],
	['人工','智障','对不起，我还在试验阶段！<br>你可以进入<a href=\'https://cucumbercan.github.io/CCBot/FB.html\'>FeedBack中心</a>提交你的意见！'],
	// ['','',''],
]


var HttpClient = function() {
	    this.get = function(aUrl, aCallback) {
	        var anHttpRequest = new XMLHttpRequest();
	        anHttpRequest.onreadystatechange = function() { 
	            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
	                aCallback(anHttpRequest.responseText);
	        }
	 
	        anHttpRequest.open( "GET", aUrl, true );            
	        anHttpRequest.send( null );
	    }
	}
	function openXX(){
			var client = new HttpClient();
			client.get('https://sctapi.ftqq.com/SCT119256T0o7pi2FlHtYEBaZDkxIRzHfB.send?title=CCOS - FeedBack&desp='+document.getElementById("f").value+':::::::::::from:'+document.getElementById("em").value, function(response) {
				// do something with response
				inner("<font size=10>We get your FeedBack!</font>")
			});
	}

function bot(){
	value=document.getElementById("ipt").value;
	document.getElementById("ipt").value="";
	var client = new HttpClient();
	client.get("http://api.qingyunke.com/api.php?key=free&appid=0&msg="+value, function(response) {
		// do something with response
		out=response.substr(23,response.length-1);
	});
	bf=document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML=out;
	var client = new HttpClient();
	client.get("https://sctapi.ftqq.com/SCT119256T0o7pi2FlHtYEBaZDkxIRzHfB.send?title=FeedBack - CB&desp="+value+":::::::return::::::"+out, function(response) {
		// do something with response
	});
}
