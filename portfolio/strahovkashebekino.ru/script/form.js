$("#form").submit(function (event) {
    event.preventDefault();
    let name = $("#polz_name").val();
    let tel = $("#polz_tel").val();

    $.ajax({
        type: "POST",
        url: "send.php",
        data: {name: name, tel: tel},
        dataType: "text",
        success: function (data) {
            $(".form_result").html(data);
        } 
        
    });  

})