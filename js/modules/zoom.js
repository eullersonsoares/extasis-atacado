(function($){
	
//$("#zoom_03").elevateZoom({gallery:'gallery_01', cursor: 'crosshair', galleryActiveClass: "active", zoomType: "inner" }); 
/*var image = $('#gallery_01 a');
var zoomConfig = {  };
var zoomActive = false;
image.on('click', function(){
$.removeData(image, 'elevateZoom');//remove zoom instance from image
image.elevateZoom(zoomConfig);//initialise zoom

});*/
var zoomConfig = {cursor: 'crosshair', zoomType: "inner" }; 
var image = $('.gallery-box a');
var zoomImage = $('img#zoom');

zoomImage.elevateZoom(zoomConfig);//initialise zoom

image.on('hover', function(){
// Remove old instance od EZ
$('.zoomContainer').remove();
zoomImage.removeData('elevateZoom');
// Update source for images
zoomImage.attr('src', $(this).data('image'));
zoomImage.data('zoom-image', $(this).data('zoom-image'));
// Reinitialize EZ
zoomImage.elevateZoom(zoomConfig);
});
   
})(jQuery);