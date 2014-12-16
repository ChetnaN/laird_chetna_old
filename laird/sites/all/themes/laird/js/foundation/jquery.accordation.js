$(document).ready(function() {

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton').removeClass('active');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('active');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton1').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton1').removeClass('active');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent1').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('active');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton1').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/


	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton2').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton2').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent2').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});
		
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton2').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton3').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton3').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent3').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton3').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton4').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton4').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent4').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton4').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	

	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton5').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton5').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent5').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton5').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});


	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton6').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton6').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent6').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton6').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});


	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton7').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton7').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent7').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton7').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton8').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton8').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent8').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton8').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton9').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton9').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent9').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton9').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton10').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton10').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent10').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton10').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton11').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton11').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent11').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton11').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton12').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton12').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent12').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton12').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton13').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton13').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent13').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton13').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton14').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton14').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent14').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton14').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton15').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton15').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent15').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton15').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton16').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton16').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent16').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton16').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton17').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton17').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent17').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton17').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton18').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton18').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent18').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton18').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton19').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton19').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent19').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton19').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton20').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton20').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent20').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton20').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton21').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton21').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent21').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton21').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton22').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton22').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent22').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton22').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton23').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton23').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent23').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton23').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton24').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton24').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent24').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton24').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	
	

	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton25').click(function() {
	
	//REMOVE THE ON CLASS FROM ALL BUTTONS
	$('.accordionButton25').removeClass('active');
	  
	//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	$('.accordionContent25').slideUp('normal');
	
	//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
	if($(this).next().is(':hidden') == true) {
		
		//ADD THE ON CLASS TO THE BUTTON
		$(this).addClass('active');
		  
		//OPEN THE SLIDE
		$(this).next().slideDown('normal');
	 } 
	  
	});

	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton25').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	

    /********************************************************************************************************************
	CLOSES ALL S ON PAGE LOAD
	********************************************************************************************************************/	
});


