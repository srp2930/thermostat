describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has default temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature', function() {
    thermostat.increment()
    expect(thermostat.temperature).toEqual(21);
  });
});
