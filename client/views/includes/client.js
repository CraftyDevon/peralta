// MeteorJS currently strips the anchor tags out of the URL in order for it's magic to work,
//so smooth scrolling requires a bit of work



 Template.header.events({
    'click #sktClick': function (evt) {
        $('html, body').animate({
        scrollTop: $("#sktnews").offset().top
    }, 2000);
  },


  'click #boarderClick': function (evt) {
        $('html, body').animate({
        scrollTop: $("#skateboarders").offset().top
    }, 2000);
  },

   'click #boardClick': function (evt) {
        $('html, body').animate({
        scrollTop: $("#boarddesign").offset().top
    }, 2000);
  },

   'click #contactClick': function (evt) {
        $('html, body').animate({
        scrollTop: $("#contactus").offset().top
    }, 2000);
  }
});


