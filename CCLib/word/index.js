function show(){
	for(var i=0;i<main_list.length;i++){
		var x=main_list[i];
		var s="<div class='mainw'>"+x.word+"</div><div class='cls'>"+x.class+". "+x.trans+"</div><br><s>词态变化：</s>";
		for(var j=0;j<x.other.length;j++){
			s+="<div class='other'>"+x.other[j]+"</div>";
		}
		s+="<br><s>短语：</s>";
		for(var j=0;j<x.phrase.length;j++){
			s+="<div class='other'>"+x.phrase[j]+"</div>";
		}
		s+="<br><s>例句：</s><br>";
		for(var j=0;j<x.example.length;j++){
			s+="<div class='example'>"+x.example[j]+"</div>";
		}
		document.getElementById("words").innerHTML+="<div class='word' style='font-color: #FFFFFF;'>"+s+"</div>"
		// console.log(x)
	}
}