'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(response) {
  // TODO: get the fortune and show it in the #fortune-text div
  $.get('/fortune', response => {
    $('#fortune-text').text(response);
});
}
//$.get('/status', {order: 123}, res => {
  //$('#order-status').html(res);
  
$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const formData = {zipcode: $('#zipcode-field').val()};

  // TODO: request weather with that URL and show the forecast in #weather-info
  $.get('/weather.json', formData, res => {
    alert(`The weather is: ${res.forecast}`);
  }
  )
}
$('#weather-form').on('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  //if (evt.code === 'ERROR'){
    //  $("alert").addClass("order-error");
    //};
  

    const formInputs = {
      qty: $('#qty-field').val(),
      melon: $('#melon-type-field').val(),
    };
  
    $.post('/order-melons.json', formInputs, res => {
      if (`${res.code}` === 'ERROR'){
        $('#order-status').addClass("order-error");
        $('#order-error').text(res);
      };
      
      alert(`Your code is: ${res.code}`);
      alert(`Your message is: ${res.msg}`);
      
    });
  };


$('#order-form').on('submit', orderMelons);

