function Ajax(type, url, data, fnSuc, fnFail) {
	var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

	var str = "";
	for(var attr in data) {
		str += attr + "=" + data[attr] + "&";
	}

	str = str.replace(/&$/, ""); //去掉最后一个&符号

	type = type.toUpperCase(); //将类型转换成大写 get => GET

	if(type == "GET") {
		xhr.open("GET", url + "?" + str, true);
		xhr.send();
	}
	if(type == "POST") {
		xhr.open("POST", url, true);
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}

	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = xhr.responseText;
			if(fnSuc) {
				fnSuc(data);
			}
		} else {
			if(fnFail) {
				fnFail();
			}
		}
	}

}