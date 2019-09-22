'use strict';

describe('Thermostat', function() {

    var thermostat; 

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it('starts at 20 degrees', function() {
        expect(thermostat.temperature).toEqual(20);
    });
    
    it('can increase the temp', function(){
        thermostat.up();
        expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease the temp', function(){
        thermostat.down();
        expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature of 10 degrees', function(){
        thermostat.temperature = 10;
        thermostat.down();
        expect(thermostat.temperature).toEqual(10);
    });

    it('If power saving mode is on, the maximum temperature is 25 degrees',function(){
        thermostat.savingModeOn = true;
        thermostat.temperature = 25;
        thermostat.up();
        expect(thermostat.temperature).toEqual(25);
    });

    it('If power saving mode is off, the maximum temperature is 32 degrees',function(){
        thermostat.savingModeOn = false;
        thermostat.temperature = 32;
        thermostat.up();
        expect(thermostat.temperature).toEqual(32);
    });

});