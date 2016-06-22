function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype = {
  increment: function() {
    this.temperature ++;
  },
};
