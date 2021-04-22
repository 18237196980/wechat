function getJson(url, callback) {
	mui.ajax(url, {
		type: 'get', //HTTP请求类型
		dataType: 'json', //服务器返回json格式数据
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			if (data.code == 1) {
				callback(true, data);
			} else {
				callback(false, data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			callback(false, "数据加载失败");
		}
	});
}

function postJson(url, param, callback) {
	var jsonObj = {};
	if (param) {
		jsonObj = JSON.stringify(param);
	}
	mui.ajax(url, {
		type: 'post', //HTTP请求类型
		data: jsonObj,
		contentType: "application/json; charset=utf-8", //send type
		dataType: 'json', //服务器返回json格式数据
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			if (data.code == 1) {
				callback(true, data);
			} else {
				callback(false, data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			callback(false, "数据加载失败");
		}
	});
}
