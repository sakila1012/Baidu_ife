//alert(1)
/**
  *aqiData,存储用户输入的空气指数数据
  *示例格式：
  *aqiData = {
  *  "北京"：90,
  *	 "上海"：40
  *};
  */
 var aqiData = {};

//对象
function dom(id){
	return document.getElementById(id);
}
/**
  *从用户输入中获取数据，向aqiData中增加一条数据
  *然后渲染aqi-list列表，增加新增的数据
  */
function addAqiData(){
	var aqiCity = dom("aqi-city-input").value.trim();
	var aqiValue = dom("aqi-value-input").value.trim();
	//判断aqiCity输入框是否合法
	if(!aqiCity.match(/^[a-zA-Z\u4E00-\u9FA5]+$/)){
		alert("请输入正确的中文字母!");
		//console.log("请输入正确的中文字母!");
		dom("aqi-city-input").focus();
		return;
	}
	//判断aqiValue输入框是否合法
	if(!aqiValue.match(/^\d+$/)){
		alert("请输入正整数!");
		dom("aqi-value-input").focus();
		return;
	}
	aqiData[aqiCity] = aqiValue;
}
/**
*渲染aqi-table表格
*/
function renderAqiList(){
	var tableDom = dom("aqi-table");
	var tr = '<tr>'
					+'<td>城市</td>'
					+'<td>空气质量</td>'
					+'<td>操作</td>'
				+'</tr>';
	for(var x in aqiData){		
		tr += '<tr>'
				+'<td>'+x+'</td>'
				+'<td>'+aqiData[x]+'</td>'
				+'<td>'
				+'<button onclick="delBtnHandle(\''+x+'\')">'+"删除"+'</button>'
				+'</td>'
			+'</tr>';	
	}
	tableDom.innerHTML = tr;
}

function addBtnHandle(){
	addAqiData();
	renderAqiList();
}

function delBtnHandle(aqiCity){
	delete aqiData[aqiCity];
	renderAqiList();
}

function init(){
	dom("add-btn").addEventListener("click",addBtnHandle);
}

init();
