// JavaScript Document

$(document).ready(function(){
	
// square menu actions 	

  $("#menu1").click(function(){
	 
	$("#menu").animate({left:'0px',top:'0px', width:'110px'}); 	   

	$("#menu1").animate({left:'0px',top:'0px', width:'110px', height:'110px'});
	$("#menu1").removeClass('link1');
	$("#menu1").addClass('active1');
	
	$("#menu2").animate({left:'0px', top:'150px', width:'110px', height:'110px'});
	$("#menu2").addClass("link2");
	
	$("#menu3").animate({left:'0px', top:'300px', width:'110px', height:'110px'});
	$("#menu3").addClass("link3");
	
  });
  
  $("#menu2").click(function(){
	  	   
	$("#menu1").animate({left:'0px', top:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu1").addClass("link1");
	
	$("#menu2").animate({left:'0px', top:'150px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu2").removeClass('link2');
	$("#menu2").addClass("active2");
	
	$("#menu3").animate({left:'0px', top:'300px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu3").addClass("link3");
  });
  
  $("#menu3").click(function(){
	  	   
	$("#menu1").animate({ top:'0px', left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu1").addClass("link1");
	
	$("#menu2").animate({ top:'150px',left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu2").addClass("link2");
	
	$("#menu3").animate({ top:'300px',left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu3").removeClass('link3');
	$("#menu3").addClass("active3");
  });
  
  $("#iletisim").click(function(){
	  	   
	$("#menu1").animate({ top:'0px', left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu1").addClass("link1");
	
	$("#menu2").animate({ top:'150px',left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu2").addClass("link2");
	
	$("#menu3").animate({ top:'300px',left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu3").addClass("link3");
  });
  
   $("#referans, #privacy, #terms, #biz, #bizekatil").click(function(){
	  	   
	$("#menu1").animate({ top:'0px', left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu1").addClass("link1");
	
	$("#menu2").animate({ top:'150px',left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu2").addClass("link2");
	
	$("#menu3").animate({ top:'300px',left:'0px', width:'110px', height:'110px', fontSize:'14px'});
	$("#menu3").addClass("link3");
  });
  

// actions to showing different content

$("#menu1, #menu11").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");
   $("#iki").hide("slow");
   $("#uc").hide("slow");
   $("#dort").hide("slow");
   $("#bes").hide("slow");
   $("#yedi").hide("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").show("slow");
   $("#on").hide("slow");
  });
$("#menu2, #menu21").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");
   $("#iki").show("slow");
   $("#uc").hide("slow");
   $("#dort").hide("slow");
   $("#bes").hide("slow");
   $("#yedi").hide("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").hide("slow");
   $("#on").hide("slow");
  });
$("#menu3, #menu31").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");  
   $("#iki").hide("slow");
   $("#uc").hide("slow");
   $("#dort").hide("slow");
   $("#bes").hide("slow");
   $("#yedi").hide("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").hide("slow");
   $("#on").show("slow");
  });
$("#iletisim, #iletisim1").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");  
   $("#iki").hide("slow");
   $("#uc").hide("slow");
   $("#dort").show("slow");
   $("#bes").hide("slow");
   $("#yedi").hide("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").hide("slow");
   $("#on").hide("slow");
  });
$("#referans, #referans1").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");  
   $("#iki").hide("slow");
   $("#uc").hide("slow");
   $("#dort").hide("slow");
   $("#bes").show("slow");
   $("#yedi").hide("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").hide("slow");
   $("#on").hide("slow");
  });
  $("#privacy, #privacy1").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");  
   $("#iki").hide("slow");
   $("#uc").hide("slow");
   $("#dort").hide("slow");
   $("#bes").hide("slow");
   $("#yedi").show("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").hide("slow");
   $("#on").hide("slow");
  });
  $("#terms, #terms1").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");  
   $("#iki").hide("slow");
   $("#uc").hide("slow");
   $("#dort").hide("slow");
   $("#bes").hide("slow");
   $("#yedi").hide("slow");
   $("#sekiz").show("slow");
   $("#dokuz").hide("slow");
   $("#on").hide("slow");
  });
  $("#biz, #biz1").click(function(){
   $("#contx").show("fast");
   $("#bir").show("slow");  
   $("#iki").hide("slow");
   $("#uc").hide("slow");
   $("#dort").hide("slow");
   $("#bes").hide("slow");
   $("#yedi").hide("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").hide("slow");
   $("#on").hide("slow");
  });
  $("#bizekatil, #bizekatil1").click(function(){
   $("#contx").show("fast");
   $("#bir").hide("slow");  
   $("#iki").hide("slow");
   $("#uc").show("slow");
   $("#dort").hide("slow");
   $("#bes").hide("slow");
   $("#yedi").hide("slow");
   $("#sekiz").hide("slow");
   $("#dokuz").hide("slow");
   $("#on").hide("slow");
  });
  
// actions for "x" close  
  
$("#closex, #closey, #closez").click(function(){
	
window.open('index.html','_self' );
  });

// background images  

var bgimages = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
$('body').css({'background-image': 'url(img/bg/' + bgimages[Math.floor(Math.random() * bgimages.length)] + ')'});
 
});


$(document).ready(function(){
	
 // job descriptions
$("#job1").click(function(){
$(".job1exp").toggle(300);
}); 

$("#job2").click(function(){
    $(".job2exp").toggle(300);
  });
  
$("#job3").click(function(){
    $(".job3exp").toggle(300);
  });
  


$("#job4").click(function(){
    $(".job4exp").toggle(300);
  });
  


$("#job5").click(function(){
    $(".job5exp").toggle(300);
  });
  


$("#job6").click(function(){
    $(".job6exp").toggle(300);
  });
  
});


// hide/show div's  

function show(target){
document.getElementById(target).style.visibility = 'visible';
}
function hide(target){
document.getElementById(target).style.visibility = 'hidden';
}

// hide-show mobile menu
$(document).ready(function(){
	$(".navclosed").click(function () {
		$("#nav1").slideToggle();
		 });
	$("#nav1").click(function () {
		$("#nav1").slideUp();
		 }); 
    });