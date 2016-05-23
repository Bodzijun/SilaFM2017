
//Initialize Masonry inside Bootstrap 3 Tab component
$(document).ready(function() {

    var $container = $('.masonry-container');
    $container.imagesLoaded( function () {
        $container.masonry({
            columnWidth: '.grid-item',
            itemSelector: '.grid-item'
        });
    });

    //Reinitialize masonry inside each panel after the relative tab link is clicked -
    $('a[data-toggle=tab]').each(function () {
        var $this = $(this);

        $this.on('shown.bs.tab', function () {

            $container.imagesLoaded( function () {
                $container.masonry({
                    columnWidth: '.grid-item',
                    itemSelector: '.grid-item'
                });
            });

        }); //end shown
    });  //end each
    });
