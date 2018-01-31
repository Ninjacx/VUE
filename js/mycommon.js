
	function isnull(str){
					if(str==''||str==null||str==undefined){
						return true;
					}else{
						return false;
					}
				}

	function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

//阴影提示框
function toast(content){
    var toast = $('<div style="z-index:9999;position:absolute;top: 0; left: 0; bottom: 0; right: 0;margin: auto;width:145px;line-'
+'height:63px;height:63px;text-align:center;background:rgba(0,0,0,0.6);border-radius:14px;color:white;"><div style="font-size: 13px">'+content+'</div></div>');
    $('body').append(toast);
    setTimeout(function(){
        toast.remove();
    },3000);
}

//阴影提示框
function motai(content){
    var toast = $('<div style="position:absolute;top: 0; left: 0; bottom: 0; right: 0;margin: auto;width:140px;line-'
+'height:58px;height:58px;text-align:center;background:rgba(0,0,0,0.6);border-radius:14px;color:white;"><div style="font-size: 13px">'+content+'</div></div>');
    $('body').append(toast);
    setTimeout(function(){
        toast.remove();
    },3000);
}

//传入id 序列化所有表单name中的值转json
function Getform(formID){
	var obj = {};
	var data = $("#"+formID).serializeArray();
	$.each(data,function(i,v){ obj[v.name] = v.value;});
	return obj;
}


function counter(arrays,index,text,length) {
    if(length == undefined)length = 0;
    if(text.length > length){
        if(arrays.indexOf(index) == -1){
            arrays.push(index);
        }
    }else{
        arrays.remove(index);
    }
}

function backWeb(){
	 void(history.go(-1));
}


//删除数组中元素   arr.remove();
Array.prototype.remove = function(val) {
var index = this.indexOf(val);
if (index > -1) {
this.splice(index, 1);
}
};

//根据append 上去的 元素进行全选与不选切换
//selectAll_id:全选id  ,selectChind_Class:append 上input class
function appendCheckbox_select(selectAll_id,selectChind_Class){

	document.getElementById(selectAll_id).onclick = function(){
			if($("."+selectChind_Class).hasClass('ck')){
					if(!this.checked){
						$("."+selectChind_Class).removeClass('ck');
							$("."+selectChind_Class).prop('checked','');
					}
			}else{
				if(this.checked){
					$("."+selectChind_Class).addClass('ck');
				 $("."+selectChind_Class).prop('checked','checked');
				 }
			}
	}
}
