$(function () {
  // Functions 區塊

  // Header 固定在頂部功能
  const handleStickyHeader = function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  };

  // 獲取導航選單和初始化 Bootstrap Collapse
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false
  });

  // 處理導航連結點擊
  const handleNavClick = function (e) {
    e.preventDefault();
    const targetId = $(this).attr('href').slice(1);
    const targetElement = $(`#${targetId}`);

    if (targetElement.length) {
      // 使用 jQuery 動畫滾動
      $('html, body').animate({
        scrollTop: targetElement.offset().top
      }, 500);

      // 關閉導航選單
      bsCollapse.hide();
    }
  };

  // 初始化執行
  handleStickyHeader();    // 網頁載入時執行一次 Sticky 判斷

  // Events 區塊
  $(document)
    // 監聽滾動事件
    .on('scroll', window, function () {
      if ($(window).scrollTop() > 100) {
        $('.gotop-btn').fadeIn();
      } else {
        $('.gotop-btn').fadeOut();
      }
    })
    .on('click', '.gotop', function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
    })
    .on('scroll', window, handleStickyHeader)
    // 添加導航連結點擊事件
    .on('click', '.nav-link', handleNavClick);
});