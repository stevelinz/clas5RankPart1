$(document).ready(function () {
    $("form").submit(rankName);

    function rankName(event) {
        // prevent form from flashing and resetting
        event.preventDefault();

        var selectedRadioButton = $("input[name=rank]:checked");

    }

    var shippingCost = selectedRadioButton.data("shipping-fee");

    var selectedRadioButton = $("input[name=rank]:checked");


    function updateButton() {


        $("#rankname").text();
    }
});
