

$(document).ready(function(){
    $('#btn').click(function(){
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + $('#src').val() + '&appid=bdbe0b236b6100cae8693dbfc944018b',
            type: 'get',
            dataType: 'json',
            success: function(data){
                console.log(data);
                var ora = [];
                $.each(data.list, function(value){
                ora.push('<li>' + value.dt_txt + '</li>');
                })
                console.log(ora);
                ora.forEach(element => {
                    $('#div').append(element)
                });
            }

        })
    })
})