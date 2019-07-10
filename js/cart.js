function SeeShoppingCart() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/SeeShoppingCart/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            withCredentials: true
        },
        success: function(msg){
            console.log(msg);
            console.log("success");
        },
        error: function(err){
            console.log('fail');
        }
    });
}