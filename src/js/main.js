// bootstrap
//= ../dist/bootstrap/js/dist/util.js
//= ../dist/bootstrap/js/dist/collapse.js
//= ../dist/bootstrap/js/dist/dropdown.js
// ../dist/bootstrap/js/dist/modal.js

// plugins
//= ../dist/owl-carousel/owl.carousel.min.js
// ../dist/@fancyapps/fancybox/src/js/core.js
// ../dist/@fancyapps/fancybox/src/js/thumbs.js
// ../dist/@fancyapps/fancybox/src/js/guestures.js

jQuery(function($) {

	var app = {

		slidersInit: function() {
			$('.preview-slider').owlCarousel({
				items: 1,
				rewind: true,
				dots: true,
				dotsData: true,
				navs: false,
				autoplayTimeout: 10000,
				autoplay: true
			});

			$('.partners__slider').owlCarousel({
				loop: true,
				autoWidth: true,
				margin: 53,
				dots: true,
				dotsData: true,
				navs: false,
				autoplayTimeout: 5000,
				autoplay: true
			});

			var testimonials = $('.testimonials__slider').owlCarousel({
				items: 1,
				rewind: true,
				dots: true,
				dotsData: true,
				dotsContainer: '.testimonials-dots',
				navs: false,
				autoplayTimeout: 10000,
				autoplay: true
			});

			testimonials.on('changed.owl.carousel', function(e) {
				var target = $(e.target).find('.owl-item:eq(' + e.item.index + ')');
				target.find('.owl-dot').removeClass('active').eq(e.item.index).addClass('active');
			});
		},

		init: function() {

			var self = this;

			self.slidersInit();
		}
	};

	
	app.init();
	
});











	// var app = {
	// 	owlInit: function() {

	// 		$('.products__slider').owlCarousel({
	// 			dots: false,
	// 			autoplay: true,
	// 			nav: true,
	// 			loop: true,
	// 			margin: 74,

	// 	        responsive: {
	// 	            0: {
	// 	            	items: 1
	// 	            },
	// 	            576: {
	// 	            	items: 2
	// 	            },
	// 	            992: {
	// 	            	items: 3
	// 	            }

	// 	        }
	// 		});

	// 		$('.page-banner__wrap.owl-carousel').owlCarousel({
	// 			items: 1,
	// 			loop: true,
	// 			dots: false,
	// 			autoplay: true,
	// 			animateIn: 'fadeIn slow delay-1s',
	// 			animateOut: 'fadeOut slow'
	// 		});

	// 		this.owlCarouselSync('.details__slider-big', '.details__slider-small', 5);
	// 	},

	// 	owlCarouselSync: function(syncClass1, syncClass2, slidesPerPage) {
	// 		var sync1 = $(syncClass1),
	// 			sync2 = $(syncClass2),
	// 			syncedSecondary = true;

	// 		slidesPerPage = slidesPerPage || 4;

	// 		sync1.owlCarousel({
	// 		    items: 1,
	// 		    slideSpeed: 2000,
	// 		    nav: true,
	// 		    dots: false,
	// 		    // rewind: true,
	// 		    // responsiveRefreshRate: 200,
	// 			animateIn: 'fadeIn slow delay-1s',
	// 			animateOut: 'fadeOut slow'


	// 		}).on('changed.owl.carousel', syncPosition);

	// 		sync2
	// 		    .on('initialized.owl.carousel', function() {
	// 		        sync2.find(".owl-item").eq(0).addClass("current");
	// 		    })
	// 		    .owlCarousel({
	// 		        items: slidesPerPage,
	// 		        dots: false,
	// 		        nav: false,
	// 		        margin: 8,
	// 		        smartSpeed: 200,
	// 		        slideSpeed: 500,
	// 		        slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
	// 		        responsiveRefreshRate: 100
	// 		    }).on('changed.owl.carousel', syncPosition2);

	// 		function syncPosition(el) {

	// 		    var current = el.item.index;

	// 		    sync2
	// 		        .find(".owl-item")
	// 		        .removeClass("current")
	// 		        .eq(current)
	// 		        .addClass("current");
	// 		    var onscreen = sync2.find('.owl-item.active').length - 1;
	// 		    var start = sync2.find('.owl-item.active').first().index();
	// 		    var end = sync2.find('.owl-item.active').last().index();

	// 		        sync2.data('owl.carousel').to(current, 100, true);
	// 		}

	// 		function syncPosition2(el) {
	// 		    if (syncedSecondary) {
	// 		        var number = el.item.index;
	// 		        sync1.data('owl.carousel').to(number, 100, true);
	// 		    }
	// 		}

	// 		sync2.on("click", ".owl-item", function(e) {
	// 		    e.preventDefault();
	// 		    var number = $(this).index();
	// 		    sync1.data('owl.carousel').to(number, 300, true);
	// 		});
	// 	},

	// 	searchAccordion: function() {
	// 		if (window.outerWidth < 576 || $('.search-boat__form-wrap:hidden').length) {
	// 			$(this).siblings('.search-boat__form-wrap').slideToggle();
	// 		}
	// 	},

	// 	init: function() {

	// 		var self = this;
	// 		self.owlInit();
	// 		$('.select').selectpicker();

	// 		$('.search-boat__title').on('click', self.searchAccordion);

	// 		if (window.outerWidth < 576) {
	// 			$('.search-boat__form-wrap').slideUp();
	// 		}
			
	// 	}
	// };

	// app.init();

	// Mobile Button Menu
	// <div class="hamburger hamburger--spin js-hamburger ">
	// 	<div class="hamburger-box">
	// 		<div class="hamburger-inner"></div>
	// 	</div>
	// </div>
	// $('.hamburger').click(function(){
	// 	$(this).toggleClass('is-active');
	// });

	// ionRangeSlider
	// http://ionden.com/a/plugins/ion.rangeSlider/demo.html
	// $("#range_01").ionRangeSlider({
	// 	type: "double",
	// 	grid: true,
	// 	min: 0,
	// 	max: 1000,
	// 	from: 200,
	// 	to: 800,
	// 	prefix: "$",
	// 	postfix: " pm"
	// });

	// Grid
	// https://codepen.io/desandro/pen/mEinp
	// $('.grid').isotope({
	// 	itemSelector: '.grid-item',
	// 	masonry: {
	// 		columnWidth: 1
	// 	}
	// });

	// FormStyler
	// http://dimox.name/jquery-form-styler/
	// $('select').styler({
	// 	locale: 'en',
	// 	locales: {
	// 		'en': {
	// 			filePlaceholder: 'No file selected',
	// 			fileBrowse: 'Browse...',
	// 			fileNumber: 'Selected files: %s',
	// 			selectPlaceholder: 'Select...',
	// 			selectSearchNotFound: 'No matches found',
	// 			selectSearchPlaceholder: 'Search...'
	// 		}
	// 	}
	// });

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	// var austDay = new Date($(".countdown").attr("date-time"));
	// $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	// $(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	// $("a.scroll").click(function() {
	// 	$.scrollTo($(".div"), 800, {
	// 		offset: -90
	// 	});
	// });
	//Скролл до id, указанного в hash URL
	// var elem = window.location.hash;
	// if(elem) {
	// 	$.scrollTo(elem, 800, {
	// 		offset: -90
	// 	});
	// };

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	// function carousel_1() {
	// 	var owl = $(".carousel");
	// 	owl.owlCarousel({
	// 		items : 1,
	// 		loop : true,
	// 		autoHeight : true,
	// 		dots : true,
	// 		singleItem : true
	// 	});
	// 	owl.on("mousewheel", ".owl-wrapper", function (e) {
	// 		if (e.deltaY > 0) {
	// 			owl.trigger("owl.prev");
	// 		} else {
	// 			owl.trigger("owl.next");
	// 		}
	// 		e.preventDefault();
	// 	});
	// 	$(".next_button").click(function() {
	// 		owl.trigger("owl.next");
	// 	});
	// 	$(".prev_button").click(function() {
	// 		owl.trigger("owl.prev");
	// 	});
	// 	owl.on("resized.owl.carousel", function(event) {
	// 		var $this = $(this);
	// 		$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
	// 	});
	// 	setTimeout(function() {
	// 		owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
	// 	}, 5000);
	// };
	// carousel_1();

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	// $("#top").click(function () {
	// 	$("body, html").animate({
	// 		scrollTop: 0
	// 	}, 800);
	// 	return false;
	// });

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.fancybox.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
