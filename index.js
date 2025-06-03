document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    const swiper = new Swiper('.swiper-container', {
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 搜索功能
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');

    searchButton.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert('搜索内容: ' + searchInput.value);
            searchInput.value = '';
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});