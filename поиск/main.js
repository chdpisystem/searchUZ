$(function() {
	$(".selectlink-control").click(function(){
		var $menu_popup = $(this).next();
		$menu_popup.slideToggle(200, function(){
			$('.selectlink ul').not($menu_popup).slideUp(200);
			if ($menu_popup.is(':hidden')) {
				$('body').removeClass('body_pointer');
			} else {
				$('body').addClass('body_pointer');
			}					
		});  
		return false;
	});			
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myContent *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
	$(document).on('click', function(e){
		if (!$(e.target).closest('.selectlink').length){
			$('body').removeClass('body_pointer');
			$('.selectlink ul').slideUp(200);
		}
	});
});
// НАВБАР***************************************
// TIME
setInterval(function(){
	const now = new Date();
	const clock = document.getElementById("clock");
	clock.innerHTML = now.toLocaleTimeString();
  },1000);
  
  // WEEK
  window.setInterval(function(){
	const days =['YAKSHANBA',"Dushanba", "SEShanba", "CHorshanba", "PAYSHANBA", "JUMA", "Shanba"];
	const now = new Date();
	const week = document.getElementById("week");
	week.innerHTML = days[now.getDay()]
  },1000);
  // PRELOAD
  document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader')
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done')
		}
	}, 1000);
  }
  
	
