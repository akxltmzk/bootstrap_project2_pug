$(function () {
  // get the current year for the copyright
  $('#year').text(new Date().getFullYear())

  $('.card').click(function(){
    // prevent bootstrap collapse err
  })

  $("#main-nav a").on("click",function(event){
    if(this.hash !== ""){
      event.preventDefault();

      const hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      })
    }
  })

})
