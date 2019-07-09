function SendMail() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/SendMail/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Email': $("#Email").val(),
            'EmailStatus': 1,
        }),
        success: function(msg){
            console.log("success");
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}
function MailChangePassword() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/MailChangePassword/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'Email': $("#Email").val(),
            'ValidateCode': $("#ValidateCode").val(),
            'Password': $("#password").val(),
        }),
        success: function(msg){
            console.log("msg");
            console.log("success");
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}