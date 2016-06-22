describe('Thermostat', function() {

  var thermostat;
  
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it('has default temperature of 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });
  
  it('has power saving mode on by default', function(){
    expect(thermostat.powersaving).toEqual(true);
  })
  
  it('can increase the temperature', function() {
    thermostat.increment()
    expect(thermostat.temperature).toEqual(21);
  });
  
  it('can decrease the temperature', function() {
    thermostat.decrease()
    expect(thermostat.temperature).toEqual(19);
  });
  
  it('cannot decrease below 10', function() {
   for(i=0;i<20;i++) {
      thermostat.decrease();
    };
  expect(thermostat.temperature).toEqual(10);
  });
  
//    it('cannot increase above 25 (in power saving mode)', function() {
//   for(i=0;i<20;i++) {
//      thermostat.increment();
//    };
//    expect(thermostat.temperature).toEqual(25);
//  });
});

