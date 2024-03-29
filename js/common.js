$(document).ready(function() {

	$(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});

	//// Atgalinės atskaitos laikmatis
	//Dokumentacija: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	// FancyBox
	//Dokumentacija: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Naršymas Landing Page
	//$(".top_mnu") - tai viršutinė juosta su nuorodomis.
	//Atvaizdavimo nuoroda <a href="#contacts">Kontaktai</a>
	$(".top_mnu").navigation();

	//Prideda klases prie blokų. .block animacijai
	//Dokumentacija: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//švelniai prasisuka naudojant .div (spustelėjus keletą kartų)?.?.scroll
	//Dokumentacija: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Karuselė
	//Dokumentacija: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
		autoHeight : true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});

	//Mygtukas "aukštyn"
	//Dokumentacija:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Formos pateikimas
	//Dokumentacija: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("Dėkojame už prašymą.!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});