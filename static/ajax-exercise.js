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

  //$('#order-form').on('submit', evt => {
    //evt.preventDefault();
  
    const formInputs = {
      qty: $('#qty-field').val(),
      melon: $('#melon-type-field').val(),
    };
  
    $.post('/order-melons.json', formInputs, res => {
      alert(`Your code is: ${res.code}`);
      alert(`Your message is: ${res.msg}`);
    });
  };



  // $.post('/order-melons.json',(FORMDATA)res => {
  //   alert(`Your code is: ${res.code}`);
  //   alert(`Your message is: ${res.msg}`);
  // })

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)


$('#order-form').on('submit', orderMelons);

