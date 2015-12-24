;(function (){
    window.initMap = function (){
        var center = {lat: 60.053877, lng: 30.327794};
        var map = new google.maps.Map(document.getElementById('map-office-1'), {
            scrollwheel: false,
            zoom: 14,
            center: center
        });

        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Ставръ Недвижимость</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Наш адрес:</b><br/>' +
            'Пр. Просвещения 15, оф 148 <br/>' +
            'Санкт-Петербург, Россия</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: center,
            map: map,
            title: 'Ставръ Недвижимость'
        });

        marker.addListener('click', function (){
            infowindow.open(map, marker);
        });

        var center3 = {lat: 59.842204, lng: 30.350105};
        var map3 = new google.maps.Map(document.getElementById('map-office-2'), {
            scrollwheel: false,
            zoom: 14,
            center: center3
        });

        var contentString3 = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">Ставръ Недвижимость</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Наш адрес:</b><br/>' +
            'Ул. Пулковская 2/1 <br/>' +
            'Санкт-Петербург, Россия</p>' +
            '</div>' +
            '</div>';

        var infowindow3 = new google.maps.InfoWindow({
            content: contentString3
        });

        var marker3 = new google.maps.Marker({
            position: center3,
            map: map3,
            title: 'Ставръ Недвижимость'
        });

        marker3.addListener('click', function (){
            infowindow3.open(map3, marker3);
        });

            $("a[href='#map-spacer-2']").on('shown.bs.tab', function (){
                lastCenter = map3.getCenter();
                google.maps.event.trigger(map3, 'resize');
                map3.setCenter(lastCenter);
            });
        var center2 = {lat: 59.666643, lng: 30.116739};

        var map2 = new google.maps.Map(document.getElementById('map2'), {
            scrollwheel: false,
            zoom: 14,
            center: center2
        });
        var marker2 = new google.maps.Marker({
            position: center2,
            map: map2,
            title: 'Ломоносовский район, п.Сосновый Бор'
        });
    };

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                asNavFor: false
            }
        }]
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.responsive').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 400,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 670,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });

    $(document).ready(function (){
        var $btnSubmit = $('button[type=submit]'),
            $contact = $('#contact'),
            $contactTitle = $('.contact-title'),
            $contactModal = $('#contactModal'),
            alert = $('.alert-danger');
        var closeAlert = function (){
                var alert = $('.alert-danger');
                if (alert.length) {
                    alert.alert('close');
                }
            },
            ajaxSuccess = function (data){
                try {
                    yaCounter34366350.reachGoal('sendData');
                } catch (e) {
                }
                $btnSubmit.button('reset');
                closeAlert();
                $contactTitle.html('Спасибо, заявка отправлена');
                $contact.before('<div class="alert alert-success" role="alert"><strong>Мы свяжемся с Вами в ближайшее время.</strong></div>');
                $contact.css('display', 'none');
            },
            ajaxError = function (err){
                $btnSubmit.button('reset');
                if (alert.length) {
                    alert.close();
                }
                $btnSubmit.button('reset');
                $contact.before('<div class="alert alert-danger" role="alert"><strong>Произошла ошибка! Пожалуйста, повторите попытку.</strong></div>');
            };

        $('.btn').on('click', function (){
            closeAlert();
            $contactModal.modal('show');
        });
        $contact.on('submit', function (e){
            $btnSubmit.button('loading');
            e.preventDefault();
            closeAlert();
            if (document.all && !window.atob) {
                if ($('#inputTel').val().length == 0) {
                    $contact.before('<div class="alert alert-danger" role="alert"><strong>Поле телефон обязательно для заполнения!</strong></div>');
                    $btnSubmit.button('reset');
                    return;
                }
            }
            $.ajax({
                url: '/mail',
                method: 'post',
                data: {
                    name: $('#inputName').val(),
                    tel: $('#inputTel').val()
                },
                success: ajaxSuccess,
                error: ajaxError
            });
        });
        if (document.all && !window.atob) {
            $('label[for="inputName"]').html('Имя:');
            $('label[for="inputTel"]').html('Телефон*:');
        }
    });
})();