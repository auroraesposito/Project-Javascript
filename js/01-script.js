$('#btn').click(function () {


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + $('#src').val() + '&appid=bdbe0b236b6100cae8693dbfc944018b',
        type: "get",
        dataType: "JSON",
        success: function (response) {
            $('#nome').html("Città: " + $('#src').val())
            var oneCard = $("#onecard");
            var twoCard = $("#twocard");
            console.log(response.list);
            var dati = response.list;


            for (var i = 0; i < dati.length; i++) {
                var data = new Date(dati[i].dt_txt)
                var time = response.list[i].dt_txt.split(" ")[1].substring(0, 5);
                var tempMin = Math.round(response.list[i].main.temp_min - 273);
                var tempMax = Math.round(response.list[i].main.temp_max - 273);
                // console.log(response.list[i].weather[0].icon);

                var link = "https://openweathermap.org/img/wn/" + response.list[i].weather[0].icon + "@4x.png"
                oneCard.append(
                    '<div class="card" style="width: 18rem;">' +
                    '<div class="card-body">' +
                    '<img src="' + link + '" class="card-img-top icon" alt="...">' +
                    '<p class="card-text time">' + "Ora: " + time + '</p>' +
                    '<p class="card-text min">' + "temp min: " + tempMin + '</p>' +
                    '<p class="card-text max">' + "temp max: " + tempMax + '</p>' +
                    '</div>' +
                    '</div>'
                )

            }



        }

    })

    $('.card').html("");
    $('#nome').html("");
        
    }

)
// })

//provare a fare array con contatore (inserire orario in array)