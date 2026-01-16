// Динамический Яндекс.Метрика счетчик
// Определяет домен и подставляет соответствующий ID счетчика

(function() {
    // Маппинг доменов на ID счетчиков
    const domainToCounter = {
        'водоканал64.рф': '105914824',
        'xn--64-6kcaim6bkqgb.xn--p1ai': '105914824', // IDN для водоканал64.рф
        'водоканал-64.рф': '106213283',
        'xn---64-5cdako2clshb.xn--p1ai': '106213283', // IDN для водоканал-64.рф
        'водоканал-саратов.рф': '106213291',
        'xn----7sbabahfk8cmuibi2aou.xn--p1ai': '106213291', // IDN для водоканал-саратов.рф
        'саратов-водоканал.рф': '106213295',
        'xn----7sbabajbq8cmufdbwou.xn--p1ai': '106213295', // IDN для саратов-водоканал.рф
        'водоканал-58.рф': '106293636',
        'xn---58-5cdako2clshb.xn--p1ai': '106293636', // IDN для водоканал-58.рф
        'водоканал-пенза.рф': '106293655',
        'xn----7sbabgmkqwmueebv.xn--p1ai': '106293655', // IDN для водоканал-пенза.рф
        'водоканал58.рф': '106293677',
        'xn--58-6kcaim6bkqgb.xn--p1ai': '106293677' // IDN для водоканал58.рф
    };

    // Получаем текущий домен
    let hostname = window.location.hostname.toLowerCase();
    
    // Убираем www. если есть
    hostname = hostname.replace(/^www\./, '');
    
    // Определяем ID счетчика
    let counterId = domainToCounter[hostname];
    
    // Если не нашли точное совпадение, проверяем по ключевым словам
    if (!counterId) {
        if (hostname.indexOf('водоканал64') !== -1 || hostname.indexOf('xn--64-6kcaim6bkqgb') !== -1) {
            counterId = '105914824';
        } else if (hostname.indexOf('водоканал-64') !== -1 || hostname.indexOf('xn---64-5cdako2clshb') !== -1) {
            counterId = '106213283';
        } else if (hostname.indexOf('водоканал-саратов') !== -1 || hostname.indexOf('xn----7sbabahfk8cmuibi2aou') !== -1) {
            counterId = '106213291';
        } else if (hostname.indexOf('саратов-водоканал') !== -1 || hostname.indexOf('xn----7sbabajbq8cmufdbwou') !== -1) {
            counterId = '106213295';
        } else if (hostname.indexOf('водоканал-58') !== -1 || hostname.indexOf('xn---58-5cdako2clshb') !== -1) {
            counterId = '106293636';
        } else if (hostname.indexOf('водоканал-пенза') !== -1 || hostname.indexOf('xn----7sbabgmkqwmueebv') !== -1) {
            counterId = '106293655';
        } else if (hostname.indexOf('водоканал58') !== -1 || hostname.indexOf('xn--58-6kcaim6bkqgb') !== -1) {
            counterId = '106293677';
        }
    }
    
    // Если домен не найден, используем дефолтный (водоканал64.рф)
    if (!counterId) {
        counterId = '105914824';
    }

    // Инициализация Яндекс.Метрики
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=' + counterId, 'ym');

    // Инициализация счетчика
    ym(counterId, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true
    });

    // Экспортируем counterId для использования в других скриптах
    window.ymCounterId = counterId;
})();

