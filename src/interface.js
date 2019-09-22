$(document).ready(function() {
    // this code will be executed once when the page is finished loading
    var thermostate = new Thermostat();
    update();

    function update() {
        $('#temperature').text(thermostate.temperature);
        $('#psm').text(thermostate.savingModeOn ? 'ON' : 'OFF');
        $('#usage').text(thermostate.usage());

        // $('#usage').removeClass('high-usage');
        // $('#usage').removeClass('medium-usage');
        // $('#usage').removeClass('low-usage');
        // $('#usage').addClass(thermostate.usage());

        $('#usage').attr('class', thermostate.usage());
    }

    $('#temp_up').click(function() {
        thermostate.up();
        update();
    });

    $('#temp_down').click(function() {
        thermostate.down();
        update();
    });

    $('#reset').click(function() {
        thermostate.reset();
        update();
    });

    $('#psm_toggle').click(function() {
        thermostate.savingModeOn = !thermostate.savingModeOn;
        update();
    })


});