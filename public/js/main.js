const gridElement = document.querySelector('#photography #grid');

// read JSON file created by node
let photos // TODO: Once JSON is made, parse through it

// Iterate through photos, add each photo as HTML element
let photoGridHTML
photoJSON.map((photo) => {
  photoGridHTML += photo
})

gridElement.innerHTML = photoGridHTML;


// ! Script from old website for reference
// $(window).on('load', function() {
//   $.getJSON("photos.json", function(data) {
//     $.each(data.images, function (i,f) {
//       var gridItem = '';
//       gridItem += '<div class="grid-item"><a href="assets/images/gallery/';
//       gridItem += f.url;
//       gridItem += '" class="placeholder no-transit"><div class="image-cover"></div><img src="assets/images/gallery/placeholder/'
//       gridItem += f.url;
//       gridItem += '" class="img-small"><div style="padding-bottom: '
//       gridItem += f.padding;
//       gridItem += ';"></div></a></div>'

//       // Append entire grid item to gallery
//       $('.grid').append(gridItem);
//     });
//     // init Masonry
//     var $grid = $('.grid').masonry({
//       itemSelector: '.grid-item',
//       percentPosition: true,
//       columnWidth: '.grid-sizer',
//       gutter:'.gutter-sizer'
//     });

//     var imageQueue = [];
//     $('.placeholder').each(function() {
//       imageQueue.push(this);
//     });

//     function imageLoad(imageQueue) {
//       if (imageQueue.length > 0) {
//         var currentImage = imageQueue.shift();
//         var placeholder = $(currentImage);
        
//         // load large image
//         var createLarge = document.createElement("img");
//         var srcLarge = placeholder.attr('href');
//         var imgLarge = $(createLarge).addClass('img-large').attr('src', srcLarge).hide();
//         placeholder.prepend(imgLarge);
//         $(imgLarge).on('load', function () {
//           setTimeout(function() {
//             $(imgLarge).fadeIn();
//             placeholder.children('.image-cover').fadeOut();
//             placeholder.children('.img-small').fadeOut();
//           }, 1000)
//           imageLoad(imageQueue);
//         });
//       }
//     }
//     imageLoad(imageQueue);
//   });
// });