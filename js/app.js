showMenu.addEventListener('click', () => {
    canvas_mobile.classList.add('showCanvasMobile')
});
hideMenu.addEventListener('click', () => {
    canvas_mobile.classList.remove('showCanvasMobile')
});

searchIcon.addEventListener('click',() => {
    document.querySelectorAll('.socialMedia').forEach(item => item.classList.toggle('dn'))
    searchInput.classList.toggle('db')
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    speed:3000,
    paginationDynamicBullets:true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        
        disableOnInteraction: false,}
  });