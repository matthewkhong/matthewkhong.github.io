//panel filter
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) 
    {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});


// carousel timer
//$('#carousel-example-generic').carousel({
  //interval: 2000,
  //pause: "hover"
//})

// iframe video resize with aspectio ratio
setVidHeight( $(".vidContainer") );
$(window).resize(function(){
            setVidHeight( $(".vidContainer") );
        });

function setVidHeight(container){
    var width = container.width();
    var height = parseInt(width * (9.0/16.0))

    $(".vid").height(height);
}