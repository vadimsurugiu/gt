$(document).ready(function(){

  $('.main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: $('.main__slider__cnt .arrows .arr.next'),
    prevArrow: $('.main__slider__cnt .arrows .arr.prev'),
  })

  $('.adv__slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  })

  $('.story__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    nextArrow: $('.stories__cnt .story__slider__cnt .arr.next'),
    prevArrow: $('.stories__cnt .story__slider__cnt .arr.prev'),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.subscriptions__cnt .subscriptions__row .sr__col .sr__card .price__type .right .info__cnt .info').on('click', function() {
    $(this).parent().append('<div class="triangle"><img src="images/info-triangle.svg" alt=""></div><div class="alert"><div class="top">Restabilește abonamentul acum pentru a păstra datele tale din cabinetul personal și bonusurile din sustemul nostru de fidelizare!<div class="a__close"><img src="images/close.svg" alt=""></div></div><a href="#" class="restore">Restabilește acum</a></div>')

    var rightAlertDistance = $(window).width() - ($('.subscriptions__cnt .alert').offset().left + $('.subscriptions__cnt .alert').width())
    if(rightAlertDistance < 200) {
      $('.subscriptions__cnt .alert').addClass('third')
    }
    $(this).parent().find('.a__close').on('click', function() {
      $(this).parent().parent().parent().find('.triangle').remove()
      $(this).parent().parent().remove()
    })
  })

  $('.consultation .cnt .right form .purpose .choose__purpose .choice').on('click', function() {
    $('.consultation .cnt .right form .purpose .choose__purpose .choice').removeClass('active')
    $(this).addClass('active')
  })

  $('.consultation .cnt .right form .input__cnt .phone__select .phone__code').on('click', function() {
    if($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open')
    } else {
      $(this).parent().addClass('open')
    }
  })

  $('.consultation .cnt .right form .input__cnt .phone__select .phone__codes .code').on('click', function() {
    var selectedCode = $(this).html()
    $(this).html($(this).parent().parent().find('.phone__code').find('.code').html())
    $(this).parent().parent().find('.phone__code').find('.code').html(selectedCode)
    $(this).parent().parent().removeClass('open')
  })

  $('.faq__cnt .right .faq__card .top').on('click', function() {
    if($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open')
    } else {
      $(this).parent().addClass('open')
    }
  })

  $('.main__slider__cnt .main__slider .ms__slide .slide__info .how .play').on('click', function() {
    var modal = '<div class="video__modal"><div class="vm__cnt"><div class="top"><h3>Află masa ta corporală  ideală</h3><div class="close__btn"><img src="images/close.svg" alt=""></div></div><iframe width="853" height="480" src="https://www.youtube.com/embed/fcN37TxBE_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>'

    $('body').append(modal)

    $('body').css({
      overflow: 'hidden'
    })

    $('.video__modal .vm__cnt .top .close__btn').on('click', function() {
      $(this).parent().parent().parent().remove()
      $('body').css({
        overflow: 'visible'
      })
    })
  })


  $('.consultation .cnt .right form .input__cnt input').on('keyup focus', function() {
    if($(this).val() == "" && $(this).prop('required') == true) {
      $(this).addClass('red')
    } else {
      $(this).removeClass('red')
    }
  })

  $('.find__mass .test__btn').on('click', function() {
    var modal = '<div class="mass__modal"><div class="mm__cnt"><form action=""><div class="top"><h3>Află masa ta corporală  ideală</h3><div class="modal__close"><img src="images/close.svg" alt=""></div></div><div class="input__cnt required double"><span>Cum te numești?</span><div class="inp"><input type="text" placeholder="Numele" required></div><div class="inp"><input type="text" placeholder="Prenumele" required></div></div><div class="input__cnt half required"><span>Câte KG ai acum?</span><div class="inp"><input type="number" placeholder="Ex. 70 sau 75" required></div></div><div class="input__cnt half required"><span>Indică Înălțimea, cm</span><div class="inp"><input type="number" placeholder="Ex.160 sau 172" required></div></div><div class="input__cnt half required"><span>Indică vârsta, ani</span><div class="inp"><input type="number" placeholder="Ex. 22 sau 30" required></div></div><div class="input__cnt half required"><span>sexul</span><div class="choose"><div class="choice active">Feminin</div><div class="choice">Masculin</div></div></div><div class="input__cnt phone required"><span>telefonul tău</span><div class="inp"><input type="number" required></div><div class="phone__select"><div class="phone__code"><div class="code">+373</div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.017 4.17134C2.78435 3.94354 2.40714 3.94354 2.17449 4.17134C1.94184 4.39915 1.94184 4.76849 2.17449 4.9963L5.57875 8.32963C5.8114 8.55744 6.1886 8.55744 6.42126 8.32963L9.82551 4.9963C10.0582 4.76849 10.0582 4.39915 9.82551 4.17134C9.59286 3.94354 9.21565 3.94354 8.983 4.17134L5.99837 7.09379L3.017 4.17134Z" fill="#4C4E53"></path></svg></div><div class="phone__codes"><div class="code">+69</div><div class="code">+420</div></div></div></div><label class="agree"><input type="checkbox" required=""><span class="txt">Sunt de acord cu<a href="#">&nbsptermenii de prelucrare &nbsp</a>a informației cu caracter personal</span></label><button type="submit" class="test__btn">Efectuează testul acum</button></form></div></div>'

    $('body').append(modal)

    $('body').css({
      overflow: 'hidden'
    })

    $('.mass__modal .mm__cnt form .top .modal__close').on('click', function() {
      $(this).parent().parent().parent().parent().remove()
      $('body').css({
        overflow: 'visible'
      })
    })

    $('.mass__modal .mm__cnt form .input__cnt .inp input').on('keyup focus', function() {
      if($(this).val() == "" && $(this).prop('required') == true) {
        $(this).addClass('red')
      } else {
        $(this).removeClass('red')
      }
    })

    $('.mass__modal .mm__cnt form .input__cnt .phone__select .phone__code').on('click', function() {
      if($(this).parent().hasClass('open')) {
        $(this).parent().removeClass('open')
      } else {
        $(this).parent().addClass('open')
      }
    })

    $('.mass__modal .mm__cnt form .input__cnt .phone__select .phone__codes .code').on('click', function() {
      var selectedCode = $(this).html()
      $(this).html($(this).parent().parent().find('.phone__code').find('.code').html())
      $(this).parent().parent().find('.phone__code').find('.code').html(selectedCode)
      $(this).parent().parent().removeClass('open')
    })

    $('.mass__modal .mm__cnt form .input__cnt .choose .choice').on('click', function() {
      $('.mass__modal .mm__cnt form .input__cnt .choose .choice').removeClass('active')
      $(this).addClass('active')
    })
  })

  $('.testimonials__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.testimonials__wrp .cnt .arrows .arr.prev'),
    nextArrow: $('.testimonials__wrp .cnt .arrows .arr.next'),
  })


  $('.subscriptions__cnt .subscriptions__row .sr__col .sr__card .activate').on('click', function() {
    var modal = '<div class="payment__modal"><div class="pm__cnt"><form><div class="top"><h3>Abonament 300 €</h3><div class="modal__close"><img src="images/close.svg" alt=""></div></div><h4>Alege metoda de achitare</h4><div class="method__row"><label class="method"><input type="radio"><span class="radio"></span><img src="images/card.svg" alt=""></label><label class="method"><input type="radio"><span class="radio"></span><img src="images/paypal.svg" alt=""></label><label class="method"><input type="radio"><span class="radio"></span><span>Achitare Cash</span></label><label class="method"><input type="radio"><span class="radio"></span><img src="images/uds.svg" alt=""><span>Abonament Gratuit</span></label></div><div class="points">După achitare vei primi: <b>3 puncte UDS</b> (= 3 euro)</div><div class="price">Preț - 300 €</div><div class="monthly">25.0 € lunar la achitarea pentru 12 luni</div><div class="check__points"><span>Verifică numarul de puncte UDS aici</span><input type="text" placeholder="Introdu codul UDS"></div><label class="agree"><input type="checkbox" required=""><span class="txt">Sunt de acord cu<a href="#">&nbsp;termenii de prelucrare &nbsp;</a>a informației cu caracter personal</span></label><button type="button">Cumpără</button></form></div></div>'

    $('body').append(modal)

    $('body').css({
      'overflow': 'hidden'
    })

    $('.payment__modal .pm__cnt form .method__row .method').on('click', function() {
      $('.payment__modal .pm__cnt form .method__row .method input').prop('checked', false)
      $('.payment__modal .pm__cnt form .method__row .method').removeClass('active')
      $(this).addClass('active')
      $(this).find('input').prop('checked', true)
    })

    $('.payment__modal .pm__cnt form .top .modal__close').on('click', function() {
      $(this).parent().parent().parent().parent().remove()

      $('body').css({
        'overflow': 'visible'
      })
    })

    $('.payment__modal .pm__cnt form button').on('click', function() {
      var payModal = '<div class="suplimentarypayment__modal"><div class="sm__cnt"><form><div class="top"><h3>Abonament 300 €</h3><div class="modal__close"><img src="images/close.svg" alt=""></div></div><div class="type"><span>Abonament 300 €</span><b>300 €</b></div><h4>Ambasador personal</h4><div class="options"><div class="opt"><div class="left"><div class="plus"></div><span>1 antrenament online (skype)</span></div><div class="price">20 €</div></div><div class="opt"><div class="left"><div class="plus"></div><span>Ghidare individuală Galina Tomaș 1 lună</span></div><div class="price">250 €</div></div></div><h4>Antrenamente online</h4><div class="options"><div class="opt"><div class="left"><div class="plus"></div><span>1 antrenament online (skype)</span></div><div class="price">20 €</div></div><div class="opt"><div class="left"><div class="plus"></div><span>5 antrenament online (skype)</span></div><div class="price">80 €</div></div><div class="opt"><div class="left"><div class="plus"></div><span>10 antrenament online (skype)</span></div><div class="price">130 €</div></div><div class="opt"><div class="left"><div class="plus"></div><span>10 antrenament online pentru însărcinate (skype)</span></div><div class="price">130 €</div></div></div><div class="final__price">Preț - 300 €</div><label class="agree"><input type="checkbox" required=""><span class="txt">Sunt de acord cu<a href="#">&nbsp;termenii de prelucrare &nbsp;</a>a informației cu caracter personal</span></label><button type="submit">Cumpără</button></form></div></div>'

      $('body').append(payModal)

      $('.suplimentarypayment__modal .sm__cnt form .options .opt .left .plus').on('click', function() {
        $(this).parent().parent().parent().find('.plus').removeClass('active')
        $(this).addClass('active')
      })

      $('.suplimentarypayment__modal .sm__cnt form .top .modal__close').on('click', function() {
        $('.payment__modal .pm__cnt form .top .modal__close').trigger('click')
        $(this).parent().parent().parent().parent().remove()
      })
    })
  })
});
