function UpdateCustomer() {
    $.ajax({
        url: 'http://192.168.1.178:5000/api/UpdateCustomer/',
        type: 'post',
        contentType: 'application/json;charset=UTF-8',
        xhrFields: {
            NickName: true,
        },
        success: function(data){
            console.log(data);
            info = data;
            display();
            //$("#question").html(data.Content);
            console.log("success11");
        },
        error: function(err){
            console.log(err);
            console.log('fail11');
        }
    });
}