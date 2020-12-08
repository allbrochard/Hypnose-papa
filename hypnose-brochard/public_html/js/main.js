
$(document).ready(function(){
    $('.commande-arrow-up').hide();
    $('.conscience-arrow-up').hide();
    if((window.matchMedia("(min-width: 990px)")).matches){
        $(".dropdown, .btn-group").hover(function(){
            var dropdownMenu = $(this).children(".dropdown-menu");
            if(dropdownMenu.is(":visible")){
                dropdownMenu.parent().toggleClass("open");
            }
        });
    }
    $("#button-collapse").click(function(){
        var element = document.getElementById('navbarSupportedContent');
        if( element.classList.contains('show')){
            element.classList.remove('show');
        }
        else{
            element.classList.add('show');
        }
    });
//    page hypnose humaniste
    $("#conscience-button").click(function(){
        var element = $("#conscience");
        if( element.is(":visible")){
            element.hide(150);
            $('.conscience-arrow-up').hide();
            $('.conscience-arrow-down').show();
        }
        else{
            element.show(150);
            $('.conscience-arrow-down').hide();
            $('.conscience-arrow-up').show();
        }
    });
    $("#commande-button").click(function(){
        var element = $('#commande');
        if( element.is(":visible")){
            element.hide(150);
            $('.commande-arrow-up').hide();
            $('.commande-arrow-down').show();
        }
        else{
            element.show(150);
            $('.commande-arrow-down').hide();
            $('.commande-arrow-up').show();
        }
    });
//    page histoire de l'hypnose
    $("#erickson-button").click(function(){
        var element = $('#erickson');
        if( element.is(":visible")){
            element.hide(150);
            $('.erickson-arrow-up').hide();
            $('.erickson-arrow-down').show();
        }
        else{
            element.show(150);
            $('.commande-arrow-down').hide();
            $('.commande-arrow-up').show();
        }
    });
    $("#humaniste-button").click(function(){
        var element = $('#humaniste');
        if( element.is(":visible")){
            element.hide(150);
            $('.humaniste-arrow-up').hide();
            $('.humaniste-arrow-down').show();
        }
        else{
            element.show(150);
            $('.humaniste-arrow-down').hide();
            $('.humaniste-arrow-up').show();
        }
    });
    $("#nouvelle-button").click(function(){
        var element = $('#nouvelle');
        if( element.is(":visible")){
            element.hide(150);
            $('.nouvelle-arrow-up').hide();
            $('.nouvelle-arrow-down').show();
        }
        else{
            element.show(150);
            $('.nouvelle-arrow-down').hide();
            $('.nouvelle-arrow-up').show();
        }
    });
    $("#classique-button").click(function(){
        var element = $('#classique');
        if( element.is(":visible")){
            element.hide(150);
            $('.classique-arrow-up').hide();
            $('.classique-arrow-down').show();
        }
        else{
            element.show(150);
            $('.classique-arrow-down').hide();
            $('.classique-arrow-up').show();
        }
    });
//    page hypnose application
    $("#eprouver-button").click(function(){
        var element = $('#eprouver');
        if( element.is(":visible")){
            element.hide(150);
            $('.eprouver-arrow-up').hide();
            $('.eprouver-arrow-down').show();
        }
        else{
            element.show(150);
            $('.eprouver-arrow-down').hide();
            $('.eprouver-arrow-up').show();
        }
    });
    $("#affronter-button").click(function(){
        var element = $('#affronter');
        if( element.is(":visible")){
            element.hide(150);
            $('.affronter-arrow-up').hide();
            $('.affronter-arrow-down').show();
        }
        else{
            element.show(150);
            $('.affronter-arrow-down').hide();
            $('.affronter-arrow-up').show();
        }
    });
    $("#resoudre-button").click(function(){
        var element = $('#resoudre');
        if( element.is(":visible")){
            element.hide(150);
            $('.resoudre-arrow-up').hide();
            $('.resoudre-arrow-down').show();
        }
        else{
            element.show(150);
            $('.resoudre-arrow-down').hide();
            $('.resoudre-arrow-up').show();
        }
    });
    $("#entrainement-button").click(function(){
        var element = $('#entrainement');
        if( element.is(":visible")){
            element.hide(150);
            $('.entrainement-arrow-up').hide();
            $('.entrainement-arrow-down').show();
        }
        else{
            element.show(150);
            $('.entrainement-arrow-down').hide();
            $('.entrainement-arrow-up').show();
        }
    });
    $("#maux-button").click(function(){
        var element = $('#maux');
        if( element.is(":visible")){
            element.hide(150);
            $('.maux-arrow-up').hide();
            $('.maux-arrow-down').show();
        }
        else{
            element.show(150);
            $('.maux-arrow-down').hide();
            $('.maux-arrow-up').show();
        }
    });
    $("#reprendre-button").click(function(){
        var element = $('#reprendre');
        if( element.is(":visible")){
            element.hide(150);
            $('.reprendre-arrow-up').hide();
            $('.reprendre-arrow-down').show();
        }
        else{
            element.show(150);
            $('.reprendre-arrow-down').hide();
            $('.reprendre-arrow-up').show();
        }
    });
    $("#objectif-button").click(function(){
        var element = $('#objectif');
        if( element.is(":visible")){
            element.hide(150);
            $('.objectif-arrow-up').hide();
            $('.objectif-arrow-down').show();
        }
        else{
            element.show(150);
            $('.objectif-arrow-down').hide();
            $('.objectif-arrow-up').show();
        }
    });
    $("#principe-button").click(function(){
        var element = $('#principe');
        if( element.is(":visible")){
            element.hide(150);
            $('.principe-arrow-up').hide();
            $('.principe-arrow-down').show();
        }
        else{
            element.show(150);
            $('.principe-arrow-down').hide();
            $('.principe-arrow-up').show();
        }
    });
});   