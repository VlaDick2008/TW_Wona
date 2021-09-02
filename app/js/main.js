$(function(){
  //BURGER
  $('.header_burger').on('click', function() {
    $('.header_burger').toggleClass('burger_active')
    $('header').toggleClass('active')
    $('.header_list').toggleClass('list_active')
  })

  //SLIDER
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //API REQUEST

  let requestUrl = "https://www.wona.co.il/test_8192735.php"

  $.ajax({
    type: "POST",
    url: requestUrl,
    data: "array",
    dataType: "json",
    success: function (products) {
      for (var i = 0; i<= products.length - 1; i++) {
        let images = products[i].image
        var links = products[i].link
        var prices = products[i].price
        let titles = products[i].title
        
        $productItems = $(
          '<div class="product-item"><div class="product-img"><img src="' + images + '" alt=""></div><div class="product-title">' + titles + '</div><div class="product-price"><div class="product-price_stock">םיעבצ4</div><div class="product-price_number">₪'+ prices +'</div></div><div class="product-link"><a href="'+ links +'">סקירה מהירה</a></div></div>'
        )
        $('.products').append($productItems);
      }

    }
  });
});