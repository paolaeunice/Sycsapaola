$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    
    // top position relative to the document
    var pos = $id.offset().top;
    
    // animated top scrolling
    $('body, html').animate({scrollTop: pos - 50});
});

$(document).ready(function(e) {
    $('#menu_icon').click(function(){
        if($("#content_details").hasClass('drop_menu')) { $("#content_details").addClass('drop_menu1').removeClass('drop_menu'); }
		else{ $("#content_details").addClass('drop_menu').removeClass('drop_menu1'); }
	});
    $('#div6').show();
    $('#long, #div2, #div3, #div4, #div5').hide();
});
$(function() {
    $('#home').click(function() {
        $('div[id^=div]').hide(1000);
        $('#div1, #div6').show(500);
    });
    $('#sistemas').click(function() {
        $('div[id^=div]').hide(1000);
        $('#div2').show(500);
    });
 
    $('#servicios').click(function() {
        $('div[id^=div]').hide(1000);
        $('#div3').show(500);
    });
 
    $('#herramientas').click(function() {
        $('div[id^=div]').hide(1000);
        $('#div4').show(500);
    });
    
    $('#about').click(function() {
        $('div[id^=div]').hide(1000);
        $('#div5').show(500);
    });
    
    $('#login').click(function() {
     //$('div[id^=div]').hide(1000);
        $("#long").css("display", "table");
        $('#long').show(500);
    });
    $('#lcan').click(function() {
        $('#long').hide();
        //$('#div1').show(500);
    });
    
   
 });


// MAPA

function initialize() {
				var latlng = new google.maps.LatLng(25.68205,-100.3066900);
				var settings = {
					zoom: 18,
					center: latlng,
                    mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP};
				var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				var contentString = '<div id="content">'+
					'<div id="siteNotice">'+
					'</div>'+
					'<h1 id="firstHeading" class="firstHeading">Sycsa</h1>'+
					'<div id="bodyContent">'+
					'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
					'</div>'+
					'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				
				var companyImage = new google.maps.MarkerImage('images/logo.png',
					new google.maps.Size(100,50),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);

				var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
					new google.maps.Size(130,50),
					new google.maps.Point(0,0),
					new google.maps.Point(65, 50));

				var companyPos = new google.maps.LatLng(25.68205,-100.3066900);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					shadow: companyShadow,
					title:"Sycsa",
					zIndex: 3});
				
				google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
			}