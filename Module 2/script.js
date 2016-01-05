$(function (){
  
  $value = $('#rating-container').attr('max-value');
  for($i = 0; $i < $value; $i++){ 
    $('#rating-container').append('<div class="rating-circle"> </div>');
  }

  $('#rating-container').delegate('.rating-circle','mouseenter',function (){        
    $('#rating-container').children().removeClass('rating-chosen')
      $(this).prevAll().addClass('rating-hover');
      $(this).addClass('rating-hover');;      
    }).delegate('.rating-circle','mouseout',function (){
      $(this).prevAll().removeClass('rating-hover');
      $(this).removeClass('rating-hover');       
      $('[flag=true]').addClass('rating-chosen');
  });

  $('#rating-container').delegate('.rating-circle','click',function (){ 
    $('#rating-container').children().removeAttr('flag')
      $(this).addClass('rating-chosen');       
      $(this).prevAll().addClass('rating-chosen');
      $(this).attr('flag','true');
      $(this).prevAll().attr('flag','true');         
  });

  $('div').delegate('#update-max-value','click',function (){
    $maxvalue = $('#max-value').val()
    $('#rating-container').attr('max-value',$maxvalue)
    $('#rating-container').children().remove();
    for($j=0; $j<$maxvalue; $j++){     
      $('#rating-container').append('<div class="rating-circle"> </div>')
    }      
  });

});