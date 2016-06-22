describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has default temperature of 20', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('has power saving mode on by default', function(){
    expect(thermostat.powersaving()).toEqual(true);
  })

  it('can increase the temperature', function() {
    thermostat.increment()
    expect(thermostat.temperature()).toEqual(21);
  });

  it('can decrease the temperature', function() {
    thermostat.decrease()
    expect(thermostat.temperature()).toEqual(19);
  });

  it('cannot decrease below 10', function() {
    for(i=0;i<20;i++) {
      thermostat.decrease();
    };
    expect(thermostat.temperature()).toEqual(10);
  });

  it('cannot increase above 25 (in power saving mode)', function() {
    for(i=0;i<20;i++) {
      thermostat.increment();
    };
    expect(thermostat.temperature()).toEqual(25);
  });

  it('can be taken off power saving mode', function () {
    thermostat.setPoweringSaving(false);
    expect(thermostat.powersaving()).toEqual(false);
  });

  it('can increase up to 32 if power saving mode is off', function() {
    thermostat.setPoweringSaving(false);
    for(i=0;i<20;i++) {
      thermostat.increment();
    };
    expect(thermostat.temperature()).toEqual(32);
  });

  it('resets the thermostat', function() {
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });

  it('energy usage is high when temperature is greater than 25', function() {
    thermostat.reset(26);
    expect(thermostat.energyUsage()).toEqual('high');
  });

  it('energy usage is medium when temperaturs is between 18 and 25', function() {
    thermostat.reset(18);
    expect(thermostat.energyUsage()).toEqual('medium');
  });

  it('energy usage is low when temperature is lower than 18', function() {
    thermostat.reset(10);
    expect(thermostat.energyUsage()).toEqual('low');
  });
});
