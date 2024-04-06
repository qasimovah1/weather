"use strict";
$(document).ready(function () {



    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${$('#myweather').val()}&appid=372ff2b57195903942fc8cc19158ad81`
            async function myweather() {
                let responce = await fetch(url);
                let data = await responce.json();
                $('#city').html(data.name);
                $('#temp').html(data.main.temp);
                $('#feels').html(data.main.feels_like);
                $('#myweather').val("");
                console.log(data)
            }
            myweather()
        }
    });

    $('#btn').click(function (e) {
        e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${$('#myweather').val()}&appid=372ff2b57195903942fc8cc19158ad81`
        async function myweather() {
            let responce = await fetch(url);
            let data = await responce.json();
            $('#city').html(data.name);
            $('#temp').html(data.main.temp);
            $('#feels').html(data.main.feels_like);
            $('#myweather').val("");
            console.log(data)
        }
        myweather()
    });

});