$('.spoiler').hide();
$('.spoiler2').hide();

$('.spoilerButton').on('click', function () {
  $('.spoilerButton').hide();
  $('.spoiler').slideDown(1000);
});

$('.spoiler').on('click', function () {
  $('.spoiler').hide();
  $('.spoiler2').slideDown(1000);
});

$('.spoiler2').on('click', function () {
  $('.spoiler2').hide();
  $('.spoilerButton').slideDown(1000);
});
