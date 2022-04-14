$(function () {
  var owlSlider = $(".slider-owl");

  owlSlider.owlCarousel({
    items: 1,
    nav: false,
    dots: true
  });

  var owlPromotion = $(".promotion-owl");

  owlPromotion.owlCarousel({
    items: 1,
    nav: false,
    dots: true
  });
  var catalogOwl = $(".catalog-item-owl");

  catalogOwl.owlCarousel({
    items: 1,
    nav: false,
    dots: true
  });

  var owlCard = $(".card-slider-owl");

  owlCard.owlCarousel({
    items: 1,
    nav: false,
    dots: true
  });
  if($(window).width()<440){
    let owlRecomendations = $('.recommendations-owl');

    owlRecomendations.owlCarousel({
      items: 1,
      nav: false,
      dots: false,
      stagePadding: 30,
      margin: 15,
    });
  }
  // let wow = new WOW();
  // wow.init();
});