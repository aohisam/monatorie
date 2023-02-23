//モーダル表示用 Lightbox
jQuery(function($) {

    var $method = $('#slick_product_detail'),
        $methodImg = $method.find('img'),
        imgCount = $methodImg.length,
        count = 0;

    while (imgCount > count) {
        $methodImg.eq(count).each(function() {
            var src = $methodImg.eq(count).attr('src'),
                alt = $methodImg.eq(count).attr('alt'),
                anchor = $('<a href="' + src + '" data-lightbox="img' + count + 1 + '" data-title="' + alt + '"></a>');
            $(this).wrap(anchor);
            count++
        })
    }

})

jQuery(function($) {
    var i = 0;
    $('.column-structure, .column-example').find('img').each(function() {
        const src = $(this).attr('src')
        const alt = $(this).attr('alt')
        const anchor = $('<a href="' + src + '" data-lightbox="img' + i + 1 + '" data-title="' + alt + '"></a>')
        $(this).wrap(anchor)
        i++

    })
})

