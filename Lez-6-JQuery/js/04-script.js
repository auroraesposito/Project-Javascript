$(function(){
    $("#btn").click(function(){
        var $item = $("#item").val();

        $("#demo").append("<li>" + $item + '<span class = "elim"> X </span>' + "</li>");
        $("#item").val("");
    });

    $('#item').keyup(function(event){
        if(event.keyCode == 13){
            $('#btn').click();
        }

    })



    $(document).on("click", '.elim', function(){
        $(this).parent().remove() 
    })
        $(document).on("click", 'li', function(){
            $(this).toggleClass("barrato");
        })

})