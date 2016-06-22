function Thermostat() {
  this._defaultTemperature = 20
  this._temperature = this._defaultTemperature
  this._powersaving = true
  this._minTemperature = 10
  this._maxTempPowerSavingOn = 25
  this._maxTempPowerSavingOff = 32
};

Thermostat.prototype = {

  temperature: function() {
    return this._temperature;
  },

  powersaving: function() {
    return this._powersaving;
  },

  increment: function() {
    if (this.powersaving()) {
      var maxTemp = this._maxTempPowerSavingOn;
    } else {
      var maxTemp = this._maxTempPowerSavingOff;
    };
    if (this._temperature < maxTemp){
      this._temperature++;
    };
  },

  decrease: function() {
    if (this._temperature > this._minTemperature){
      this._temperature--;
    };
  },

  setPoweringSaving: function(onOrOff){
    this._powersaving = onOrOff;
  },

  reset: function(value = this._defaultTemperature) {
    this._temperature = value;
  },

  energyUsage: function() {
    if (this.temperature() > 25) {
      return 'high';
    } else if(this.temperature() < 18 ) {
      return 'low';
    } else {
      return 'medium';
    };
  },
};
