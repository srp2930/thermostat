$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  $('#select-city').submit(function (event) {
    event.preventDefault();
    var city = $('#current-city').val()
    $.get('http://api.wunderground.com/api/75a5e624126506a9/geolookup/conditions/q/IA/' + city + '.json', function(data) {
    $('#current-temperature').text(data.current_observation.temp_c)
    });
  });

  $('#temperature-up').click(function(){
    thermostat.increment();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.decrease();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.setPoweringSaving(true);
    updateTemperature();
    $('#power-saving-status').text(thermostat.powersaving());
  });

  $('#powersaving-off').click(function(){
    thermostat.setPoweringSaving(false);
    updateTemperature();
    $('#power-saving-status').text(thermostat.powersaving());
  });

  $('#power-saving-status').text(thermostat.powersaving());

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };
});
