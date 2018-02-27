$(document).ready(function() {
  
    $('.what__accordion>article').not(':first-of-type').hide();
     $('.what__accordion>.what__accordion-item').click(function() {
       
       var findArticle = $(this).next();
       var findWrapper = $(this).closest('.what__accordion');
       
       if (findArticle.is(':visible')) {
         findArticle.slideUp('fast');
       }
       else {
         findWrapper.find('>article').slideUp('fast');
         findArticle.slideDown('fast');
       }
     }); 
});