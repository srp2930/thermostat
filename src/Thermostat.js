function Thermostat() {
  this.temperature = 20
  this.powersaving = true
};

Thermostat.prototype = {
  increment: function() {
    this.temperature++;
  },

  decrease: function() {
    if (this.temperature > 10){
      this.temperature--;
    };
  }
};
