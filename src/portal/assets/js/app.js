$(document).ready(function() {
        $(".list-group" ).on( "click", "button", function() {
                console.log( "clicked", $( this ).data("link") );
                window.location = $( this ).data("link");
        });
});
