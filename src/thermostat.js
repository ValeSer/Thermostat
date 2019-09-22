function Thermostat() {
    this.temperature = 20;
    this.savingModeOn = true;
};

Thermostat.prototype.up = function(){
    if(this.temperature < this._maxTemp()) {
        this.temperature++;
    } 
};

Thermostat.prototype.down = function(){
    if(this.temperature > 10) {
        this.temperature--;
    };
};

Thermostat.prototype.reset = function() {
    this.temperature = 20;
}

Thermostat.prototype.usage = function() {
    if(this.temperature < 18) {
        return 'low-usage';
    } else if(this.temperature < 25) {
        return 'medium-usage';
    } else {
        return 'high-usage';
    } 
}

Thermostat.prototype._maxTemp = function() {
    return this.savingModeOn ? 25 : 32;
};

