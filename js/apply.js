function VipMember() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/VipMember/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify({
            'ShopName': $("#shopname").val(),
            'DiscountRatio': 1,
        }),
        success: function(msg){
            console.log(msg);
            console.log("success");
            console.log(document.cookie);
        },
        error: function(err){
            console.log(err);
            console.log('fail');
        }
    });
}