$(document).ready(function () {
const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow"
});

const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

});


var backButton = $(".button-back");
backButton.on("click", function() {
window.location.href = "index.html";
});



var menuButton = $(".menu-button");
menuButton.on('click', function() {
 $('.navbar-bottom').toggleClass('navbar-bottom--visible');
});

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            event.preventDefault();
            var modalOverlay = $(".modal__overlay");
            var modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay--visible");
            modalDialog.removeClass("modal__dialog--visible");
        }
    });

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

    function closeModal(event) {
    event.preventDefault()
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  

  //Обработка форм
  $('.modal__form').validate({
      errorClass: "invalid",
      messages: {
      name: {
         required: "Please specify your name",
         minlength: "At least 2 letters required",
      },
      email: {
      required: "We need your email address",
      email: "The format:  name@domain.com",
      },
      phone: {
        required: "We need your phone to contact you",
      },
    },
    
  });

    $('.footer__form').validate({
      errorClass: "invalid",
      messages: {
      name: {
         required: "Please specify your name",
         minlength: "At least 2 letters required",
      },
      phone: {
        required: "We need your phone to contact you",
      },
    },
    
  });

   $('.newsletter__subscribe').validate({
      errorClass: "invalid",
      messages: {
          email: {
      required: "We need your email address",
      email: "The format:  name@domain.com",
      },
      },
  });

   $('input[name="phone"]').mask('+7 (999) 999-99-99');

    AOS.init();


      $(function () {
    $("img.lazy").Lazy();
  });


  let map_container = document.getElementById('map_container');
  let options_map = {
    once: true,
    passive: true,
    capture: true
  };
  map_container.addEventListener('click', start_lazy_map, options_map);
  map_container.addEventListener('mouseover', start_lazy_map, options_map);
  map_container.addEventListener('touchstart', start_lazy_map, options_map);
  map_container.addEventListener('touchmove', start_lazy_map, options_map);

  let map_loaded = false;

  function start_lazy_map() {
    if (!map_loaded) {
      let map_block = document.getElementById('ymap_lazy');
      map_loaded = true;
      map_block.setAttribute('src', map_block.getAttribute('data-src'));
      map_block.removeAttribute('data-src');
    }
  }



});