
$(document).ready(function(){
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
});   