// event scroll link
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var href = $(this).attr("href");

  // tangkap elemen yang bersangkutan
  var elemenHref = $(href);

  // pindahkan scroll
  $("html, body").animate({
    scrollTop: elemenHref.offset().top - 50,
  });

  e.preventDefault();
});
