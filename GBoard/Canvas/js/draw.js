function FillRect(x,y,width,height){
	pen.fillRect(x, y, width, height);
}

function BorderRect(x,y,width,height){
	pen.strokeRect(x, y, width, height);
}

function DelRect(x,y,width,height){
	pen.clearRect(x, y, width, height);
}

function arc(x, y, r, start, end, fill, reverse){
	pen.beginPath();
	pen.arc(x,y,r,(Math.PI/180)*start,(Math.PI/180)*end,reverse==true);
	if(fill)
		pen.fill();
	else
		pen.stroke();
	pen.closePath();
}

function test(){
	
}