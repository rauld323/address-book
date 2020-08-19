$(document).ready(function () {
    $("form").submit(function (event) {
        var name = $("#name").val();
        var lastname = $("#lastname").val();
        var telephone = $("#telephone").val();
        var address = $("#address").val();

        $("table tbody").append("<tr><td><button onclick = deleterow(this)>Delete</button></td><td style='width:15%'>" + name + "</td><td style='width:15%'>" + lastname + "</td><td style='width:15%'>" + telephone + "</td><td style='width:30%'>" + address + "</td></tr>");
    


        event.preventDefault();
        
        //Reset Form
        $("form").trigger("reset");

        //Filter through table
        $("#mySearch").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    
});

function deleterow(el) {
    $(el).closest('tr').remove();
}




