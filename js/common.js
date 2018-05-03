	//Кнопка "Наверх"
	//Документация:
	jQuery(document).ready(function () {
	    'use strict';

	    jQuery(window).scroll(function () {
	        if (jQuery(document).scrollTop() > 0) {
	            jQuery('#scrollup').fadeIn('slow');
	        } else {
	            jQuery('#scrollup').fadeOut('slow');
	        }
	    });
	    $('#scrollup').click(function () {
	        $('body,html').animate({
	            scrollTop: 0
	        }, 700);
	    });
	});


	//плавное листание до  шапки дикторов
	$(document).ready(function () {
	    'use strict';
	    $("#choose").on("click", "a", function (event) {
	        //отменяем стандартную обработку нажатия по ссылке
	        event.preventDefault();

	        //забираем идентификатор бока с атрибута href
	        var id = $(this).attr('href'),

	            //узнаем высоту от начала страницы до блока на который ссылается якорь
	            top = $(id).offset().top;

	        //анимируем переход на расстояние - top за 1500 мс
	        $('body,html').animate({
	            scrollTop: top
	        }, 1500);
	    });
	});

	// прикрепить файл
	$(document).on('change', '.btn-file :file', function () {
	    'use strict';
	    var input = $(this),
	        numFiles = input.get(0).files ? input.get(0).files.length : 1,
	        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
	    input.trigger('fileselect', [numFiles, label]);
	});

	$(document).ready(function () {
	    'use strict';
	    $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
	        var input = $(this).parents('.input-group').find(':text'),
	            log = numFiles > 1 ? numFiles + ' files selected' : label;

	        if (input.length) {
	            input.val(log);
	        } else {
	            if (log) alert(log);
	        }

	    });
	});



	// переход к табам с другой страницы
	(function ($) {
	    'use strict';
	    $(function () {
	        var hash = window.location.hash;
	        $('.nav-tabs a[href="' + hash + '"]').tab('show');
	    });
	})(jQuery);

	// боковой обратный звонок
	$(document).ready(function () {
	    $("#telback").click(function () {
	        $('.kateoff').toggle();
	        $('.kate').toggle();
	    })
	})
