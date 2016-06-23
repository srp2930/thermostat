$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

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
