$(document).ready(function() {
    $(".action-add").click(function() {
        $(".main-list").append("<li>" + $(".item-input").val() + " <button type='button' class='action-delete'>Brisi</button></li>");
        $(".item-input").val("");
    });
    
    //Deleting items from list
    $("ul").on("click", ".action-delete", function(){
        $(this).parent().remove();
    });
});