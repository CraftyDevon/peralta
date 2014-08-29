// MeteorJS currently strips the anchor tags out of the URL in order for it's magic to work,
//so smooth scrolling requires a bit of work



 Template.header.events({
    'click #sktClick': function (evt) {

        $(".sktnf").removeClass("hide");
        $(".sktnf").addClass("sktnfs");
        $( ".sktnf" ).hide( 3500 );

        $('html, body').animate({
        scrollTop: $("#sktnews").offset().top
    }, 2000);

  },


  'click #boarderClick': function (evt) {

        $(".sbf").removeClass("hide");
        $(".sbf").addClass("sbfs");
        $( ".sbf" ).hide( 3500 );

        $('html, body').animate({
        scrollTop: $("#skateboarders").offset().top
    }, 2000);
  },

   'click #boardClick': function (evt) {

         $(".bdf").removeClass("hide");
        $(".bdf").addClass("bdfs");
        $( ".bdf" ).hide(4500 );
        $('html, body').animate({
        scrollTop: $("#boarddesign").offset().top
    }, 2000);
  },

   'click #contactClick': function (evt) {

         $(".cuf").removeClass("hide");
        $(".cuf").addClass("cufs");
        $( ".cuf" ).hide( 5500 );
        $('html, body').animate({
        scrollTop: $("#contactus").offset().top
    }, 2000);
  }
});


