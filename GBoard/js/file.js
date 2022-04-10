var input1 = document.getElementById("input1");
var submit = document.getElementById("submit");
var root = document.getElementById("root");
var file = document.getElementById("file");



function fake_click(obj) {
	var ev = document.createEvent("MouseEvents");
	ev.initMouseEvent(
		"click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null
	);
	obj.dispatchEvent(ev);
}

function download(name, data) {
	var urlObject = window.URL || window.webkitURL || window;

	var downloadData = new Blob([data]);

	var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
	save_link.href = urlObject.createObjectURL(downloadData);
	save_link.download = name;
	alert("Ready to download to: download\\" + name);
	fake_click(save_link);
}


function imp(){
		var selectedFile = file.files[0]; //获取读取的File对象
		var name = selectedFile.name; //读取选中文件的文件名
		var size = selectedFile.size; //读取选中文件的大小
		console.log("文件名:" + name + "大小：" + size);
		
		var reader = new FileReader(); //这里是核心！！！读取操作就是由它完成的。
		reader.readAsText(selectedFile); //读取文件的内容
		
		reader.onload = function() {
			console.log(this.result);
			root.innerHTML=this.result;
		};
}



function IEPORT(){
	
		input_close();
		input_open();
		file.style.display="block";
		input1.placeholder = "File Name (Download)";
		input2.style.display = "none";
		input3.style.display = "none";
		
		// SetC1(2,["Import","Export"]);
	
		file.onchange = function() {
			imp();
			submit.focus();
			input_close();
		}
		input1.onchange = function() {
			submit.focus();
		}
		submit.onclick = function() {
			download(input1.value + ".gboard", root.innerHTML)
			input_close();
		}
}
