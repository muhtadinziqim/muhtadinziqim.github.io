const btn_kiri = $(".tombol-kiri > img");
const btn_kanan = $(".tombol-kanan > img");
const konten = document.getElementById("scroll-customer");

const konten_scroll_with = konten.scrollWidth;
let konten_scroll_left = konten.scrollLeft;


btn_kanan.click(function() {
    konten_scroll_left = konten.scrollLeft;
    konten_scroll_left += 230;
    if (konten_scroll_left >= konten_scroll_with) {
        $("#scroll-customer").animate({ scrollLeft: konten_scroll_left }, 500, function() {
            $("#scroll-customer").scrollLeft(konten_scroll_with)
        })
        konten_scroll_left = konten_scroll_with - 500;
    } else {
        $("#scroll-customer").animate({ scrollLeft: konten_scroll_left }, 500, function() {
            $("#scroll-customer").scrollLeft(konten_scroll_left)
        })
    }
})

btn_kiri.click(function() {
    konten_scroll_left = konten.scrollLeft;
    konten_scroll_left -= 230;
    if (konten_scroll_left <= 0) {
        $("#scroll-customer").animate({ scrollLeft: konten_scroll_left }, 500, function() {
            $("#scroll-customer").scrollLeft(0)
        })
        konten_scroll_left = 0;
    } else {
        $("#scroll-customer").animate({ scrollLeft: konten_scroll_left }, 500, function() {
            $("#scroll-customer").scrollLeft(konten_scroll_left)
        })
    }
})

setInterval(() => {
    geser_kiri()
}, 10000);

function geser_kiri() {
    konten_scroll_left = konten.scrollLeft;
    konten_scroll_left += 230;
    if (konten_scroll_left >= konten_scroll_with) {
        $("#scroll-customer").animate({ scrollLeft: konten_scroll_left }, 500, function() {
            $("#scroll-customer").scrollLeft(0)
        })
        konten_scroll_left = 0;
    } else {
        $("#scroll-customer").animate({ scrollLeft: konten_scroll_left }, 500, function() {
            $("#scroll-customer").scrollLeft(konten_scroll_left)
        })
    }
}

$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active')
    })
})

var cw = $('.img > div').width();
$('.img > div').css({ 'height': cw + 'px' });


$('.img').css({ 'width': "10px" });