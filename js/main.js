$(document).ready(function () {
  $(".banner").owlCarousel({
    items: 1,
    nav: 0,
    dots: 1,
    loop: 1,
    autoplay: 1,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  });

  $(".banner").on("changed.owl.carousel", function (event) {
    let listItem = $(".banner").find(".owl-item").eq(event.item.index);
    let index = listItem.find(".item").data("index");
    $(".banner-box-index .text-banner .about").removeClass("active");
    $(".banner-box-index .text-banner .about").removeClass("show");
    $("#banner-index-" + index).addClass("active");

    setTimeout(function () {
      // Thực hiện sự kiện ở đây
      $("#banner-index-" + index).addClass("show");
    }, 1000);
  });

  $(".module-product-index-list").owlCarousel({
    items: 3,
    nav: 1,
    dots: 0,
    loop: 1,
    margin: 75,
    smartSpeed: 1000,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
        margin: 75,
      },
    },
  });
  $(".project-index-list").owlCarousel({
    items: 1,
    nav: 0,
    dots: 0,
    loop: 1,
    margin: 24,
    smartSpeed: 1000,
  });

  // $(".project-index-list").on("changed.owl.carousel", function (event) {
  //   // let index = event.item.index;
  //   // $(".owl-nav-project .number-nav .page-current").text();
  //   if (event.namespace && event.property.name === "position") {
  //     var currentItem = event.relatedTarget.current();
  //     var prevItem = event.relatedTarget.relative(event.property.value);

  //     if (currentItem > prevItem) {
  //       console.log("Đang chuyển sang phần tử kế tiếp (next)");
  //     } else if (currentItem < prevItem) {
  //       console.log("Đang chuyển về phần tử trước đó (prev)");
  //     }
  //   }
  // });

  $(".menu-header").click(function () {
    $(".product-page .left").removeClass("open");
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(".navbar-header").removeClass("open");
      $("body").removeClass("body-hidden");
    } else {
      $(this).addClass("active");
      $(".navbar-header").addClass("open");
      $("body").addClass("body-hidden");
    }
  });
  $(".navbar-header>*:not(.menu-first)").click(function () {
    $(".menu-header").removeClass("active");
    $(".navbar-header").removeClass("open");
  });
  $(".child-first i").click(function () {
    $(this).next("ul").slideToggle();
  });

  $(".header-search i").click(function () {
    $(this).parent().find("form").toggleClass("open");
  });

  $(".owl-nav-project .button-nav .prev").click(function () {
    $(".project-index-list").trigger("prev.owl.carousel", [1000]);
  });

  $(".owl-nav-project .button-nav .next").click(function () {
    $(".project-index-list").trigger("next.owl.carousel", [1000]);
  });
  $(".parnert-list").owlCarousel({
    items: 5,
    nav: 0,
    dots: 0,
    loop: 1,
    margin: 24,
    smartSpeed: 1000,
    autoplay: 1,
    margin: 40,

    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      768: {
        items: 3,
        margin: 20,
      },
      991: {
        items: 5,
        margin: 40,
      },
    },
  });
  $(".intro-feedback-customer-list").owlCarousel({
    items: 2,
    nav: 1,
    dots: 0,
    loop: 1,
    margin: 58,
    smartSpeed: 1000,
    autoplay: 1,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      992: {
        items: 2,
        margin: 58,
      },
    },
  });
  $(".list-product-hot").owlCarousel({
    items: 1,
    nav: 1,
    dots: 0,
    loop: 1,
    smartSpeed: 1000,
    // autoplay: 1,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
  });
  $(".list-product-hot-sell").owlCarousel({
    items: 4,
    nav: 1,
    dots: 0,
    loop: 1,
    smartSpeed: 1000,
    // autoplay: 1,
    margin: 21,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      767: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });
  $(".list-img-product-detail").owlCarousel({
    items: 1,
    nav: 1,
    dots: 0,
    loop: 1,
    smartSpeed: 1000,
    // autoplay: 1,
    margin: 21,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
  });

  $(".item-li ").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings("ul").slideUp();
    } else {
      $(this).addClass("active");
      $(this).siblings("ul").slideDown();
    }
  });

  $(".btn-list-img-product").click(function () {
    $(".box-img-product-detail").addClass("show");
  });

  $(".box-img-product-detail i").click(function () {
    $(".box-img-product-detail").removeClass("show");
  });

  $(".form-order .top i").click(function () {
    $(".form-order").removeClass("show");
    $(".overload").removeClass("show");
  });

  $(".product-detail .right .order").click(function () {
    $(".form-order").addClass("show");
    $(".overload").addClass("show");
  });

  $(".menu-detail .top i").click(function () {
    $(".menu-detail .top").toggleClass("active");
    $(".menu-detail .menu-content").slideToggle();
  });

  $(".menu-detail .menu-content .item").click(function () {
    let heightHeader = $("header").height();
    let index = $(this).data("index");
    let heightTop = $("#text-detail-" + index).offset().top;
    console.log(heightTop);

    $("html, body").animate(
      {
        scrollTop: heightTop - heightHeader - 50,
      },
      1000
    );
  });

  $("#hide-text-detail").click(function () {
    $(this).siblings(".text").toggleClass("close");
    $(this).toggleClass("active");
  });

  $(".product-index-menu .item").click(function () {
    $(".product-index-menu .item").removeClass("active");
    let index = $(this).data("index");
    $(this).addClass("active");
    $(".product-index-list").removeClass("active");
    $("#id-product-index-list-" + index).addClass("active");
  });

  $(".support-online-list-phone span").click(function () {
    $(this).siblings(".list-phone-support").slideToggle();
  });

  $(".icon-filter").click(function () {
    $(".product-page .left").addClass("open");
    $("body").addClass("body-hidden");
  });

  $(".product-page .icon-exit").click(function () {
    $(this).parent().removeClass("open");
    $("body").removeClass("body-hidden");
  });

  $(".contact-header img").click(function () {
    $(".contact-header .phones").toggleClass("open");
  });
});
