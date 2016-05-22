$(document).ready(function(){

    // Pokazywanie/ukrywanie menu

    $(".btn-menu").click(function(){
        $("#dimScreen").show();
        $("#menu-window").show();
    });

     $(".btn-search").click(function(){
        $("#dimScreen").show();
        $("#menu-search").show();
    });

    $("#dimScreen").click(function(e){
        $("#dimScreen").hide();
        $("#menu-window").hide();
        $("#menu-search").hide();
    });

    $("#dimScreen *").click(function(e){
        e.stopPropagation();
    });

    $(document).mousemove(function(event){
        var x = (event.clientX / $( window ).width()) * 100;
        $('#gradient').css({'background': ' linear-gradient(to right, #594687 ' + (x-50) + '%, rgb(248, 201, 72) ' + x + '%, rgb(22, 190, 112) ' + (x+50) + '%)'});
    });
});
