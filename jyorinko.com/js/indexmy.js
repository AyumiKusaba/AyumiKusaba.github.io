$(document).ready(function() {
 $('#fullpage').fullpage({
 	 navigation: true,
 	 navigationPosition: 'right',
	 menu: '#nav',
	 anchors:['section1','section2', 'section3','section4'],
	 sectionsColor: ['#fff', '#4BBFC3', '#7BAABE', 'whitesmoke'],	
 });
 });

 $('.one').click(function(){
 	$('.malta-text').slideToggle({
 	});
});
$('.two').click(function(){
 	$('.london-text').slideToggle({
 	});
});
