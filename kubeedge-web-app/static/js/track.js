$(document).ready(function() {
    $('#tracktable >tr').click(function(){
        $(this).find('input:radio[name="track"]').eq(0).attr("checked",'checked');
    })

    $('#track-play-button').click(function(){
        PlayTrack();
    })
    
    $('#track-stop-button').click(function(){
        StopTrack();
    })
});


function PlayTrack() {
	try {
		$('#stations-view').html('正在尝试播放音乐');
		url = "/track/play/" + $("input[name='track']:checked").val();
		var postData = {};
		var service = new ServiceResult();
        service.getJSONDataRaw(url, postData, PlayTrack_Callback);
    }
    catch (e) {
        alert(e);
    }
}

function PlayTrack_Callback() {
	try {
        if (this.Data!=null && this.Data.Result==0) {
            $('#stations-view-json').html('音乐播放成功');
        } else {
            $('#stations-view-json').html(JSON.stringify(this.Data));
        }
	}	
	catch (e) {
        alert(e);
    }
}


function StopTrack() {
	try {
		$('#stations-view').html('正在尝试停止音乐');
		url = "/track/stop";
		var postData = {};
		var service = new ServiceResult();
        service.getJSONDataRaw(url, postData, StopTrack_Callback);
    }
    catch (e) {
        alert(e);
    }
}

function StopTrack_Callback() {
	try {
        if (this.Data!=null && this.Data.Result==0) {
            $('#stations-view-json').html('音乐停止成功');
        } else {
            $('#stations-view-json').html(JSON.stringify(this.Data));
        }
	}	
	catch (e) {
        alert(e);
    }
}


function Standard_Callback() {
    try {
        alert(this.ResultString);
    }
    catch (e) {   
        alert(e);
    }
}

function Standard_ValidationCallback() {
    try {
        alert(this.ResultString);
    }
    catch (e) {   
        alert(e);
    }
}

function Standard_ErrorCallback() {
    try {
        alert(this.ResultString);
    }
    catch (e) {   
        alert(e);
    }
}