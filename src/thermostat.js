function Thermostat() {
    this.temperature = 20;
    this.savingModeOn = false;
};

Thermostat.prototype.up = function(){
    if((this.savingModeOn && this.temperature < 25) || (!this.savingModeOn && this.temperature < 32)) {
        this.temperature++;
    } 
};

Thermostat.prototype.down = function(){
    if(this.temperature > 10) {
        this.temperature--;
    };
};
