if (jQuery(".main-screen__slider").length) {
  jQuery(".main-screen__slider")
    .not(".slick-initialized")
    .slick({
      dots: true,
      appendArrows: jQuery(".main-screen__controls"),
      appendDots: jQuery(".main-screen__controls"),
      fade: true,
      cssEase: 'linear',
      prevArrow:
        '<button class="slick-prev">\n' +
        '  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3322 17.5C13.1189 17.5 12.9056 17.4183 12.7431 17.2558L6.07641 10.5891C5.75057 10.2633 5.75057 9.73663 6.07641 9.4108L12.7431 2.74413C13.0689 2.4183 13.5956 2.4183 13.9214 2.74413C14.2472 3.06996 14.2472 3.59663 13.9214 3.92246L7.84391 9.99996L13.9214 16.0775C14.2472 16.4033 14.2472 16.93 13.9214 17.2558C13.7589 17.4183 13.5456 17.5 13.3322 17.5Z" fill="#8C8C8C" />\n' +
        '  </svg>\n' +
        '</button>',
      nextArrow:
        '<button class="slick-next">\n' +
        '  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66776 17.5C6.88109 17.5 7.09443 17.4183 7.25693 17.2558L13.9236 10.5891C14.2494 10.2633 14.2494 9.73663 13.9236 9.4108L7.25693 2.74413C6.93109 2.4183 6.40443 2.4183 6.07859 2.74413C5.75276 3.06996 5.75276 3.59663 6.07859 3.92246L12.1561 9.99996L6.07859 16.0775C5.75276 16.4033 5.75276 16.93 6.07859 17.2558C6.24109 17.4183 6.45443 17.5 6.66776 17.5Z" fill="#8C8C8C" />\n' +
        '  </svg>\n' +
        '</button>',
    });
}

if (jQuery(".cases__slider").length) {
    jQuery(".cases__slider")
        .not(".slick-initialized")
        .slick({
            dots: true,
            appendArrows: jQuery(".cases__controls"),
            appendDots: jQuery(".cases__controls"),
            prevArrow:
                '<button class="slick-prev">\n' +
                '  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3322 17.5C13.1189 17.5 12.9056 17.4183 12.7431 17.2558L6.07641 10.5891C5.75057 10.2633 5.75057 9.73663 6.07641 9.4108L12.7431 2.74413C13.0689 2.4183 13.5956 2.4183 13.9214 2.74413C14.2472 3.06996 14.2472 3.59663 13.9214 3.92246L7.84391 9.99996L13.9214 16.0775C14.2472 16.4033 14.2472 16.93 13.9214 17.2558C13.7589 17.4183 13.5456 17.5 13.3322 17.5Z" fill="#8C8C8C" />\n' +
                '  </svg>\n' +
                '</button>',
            nextArrow:
                '<button class="slick-next">\n' +
                '  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66776 17.5C6.88109 17.5 7.09443 17.4183 7.25693 17.2558L13.9236 10.5891C14.2494 10.2633 14.2494 9.73663 13.9236 9.4108L7.25693 2.74413C6.93109 2.4183 6.40443 2.4183 6.07859 2.74413C5.75276 3.06996 5.75276 3.59663 6.07859 3.92246L12.1561 9.99996L6.07859 16.0775C5.75276 16.4033 5.75276 16.93 6.07859 17.2558C6.24109 17.4183 6.45443 17.5 6.66776 17.5Z" fill="#8C8C8C" />\n' +
                '  </svg>\n' +
                '</button>',
        });
}