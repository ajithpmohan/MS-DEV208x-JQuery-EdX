$(function (){
       
  $('.rating-circle').hover(function(){
      
    $('#rating-container').children().removeClass('rating-chosen')
         
    $(this).prevAll().addClass('rating-hover')
    $(this).addClass('rating-hover')
        
  });        

        
  $('.rating-circle').mouseout(function(){
          
    $(this).prevAll().removeClass('rating-hover')
    $(this).removeClass('rating-hover')

    $('[flag]').addClass('rating-chosen')

  });        
        
  $('.rating-circle').click(function(){
          
    $('#rating-container').children().removeClass('rating-hover')
    $('#rating-container').children().removeAttr('flag')
    
    $(this).attr('flag','True')
    $(this).prevAll().attr('flag','True')
          
    $(this).prevAll().addClass('rating-chosen')
    $(this).addClass('rating-chosen')
          
  });        
  
});
   
