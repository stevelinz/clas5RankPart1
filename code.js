// $(document).ready(function () {
//
//     $("form").submit(rankName);
//
//     function rankName(event) {
//         // prevent form from flashing and resetting
//         event.preventDefault();
//
//         var selectedRadioButton = $("input[name=rank]:checked");
//
//     }
//
//     var shippingCost = selectedRadioButton.data("shipping-fee");
//
//     var selectedRadioButton = $("input[name=rank]:checked");
//
//
//     function updateButton() {
//
//
//         var test = $('input:radio[name=rank]:checked').val();
//         alert (test);
//        // $("#rankname").text();
//     }
// });


// $("button").click(function () {
//     var test = $("input[type='radio']:checked").val();
//     alert(test);
//
//     <button> Hello</button>

//});


$(document).ready(function () {
    $("#textBoxOne").change(textboxHeardChange);


    function textboxHeardChange() {
        var fullName = $("#textBoxOne").val();
        var rankType = $("input[type='radio']:checked").val();




        // write it to the paragraph
        $("#output").text("At ease " + rankType +' ' + fullName);

        switch (rankType){
            case 'Captain':
                $("#output").css('color','red');
                break;
            case "Sargent":
                $("#output").css('color','blue');
                break;
            case "General Army":
                $("#output").css('color','green');
                break;
        }

    }


});






