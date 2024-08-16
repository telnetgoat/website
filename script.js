document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    // ハンバーガーメニューの開閉
    function toggleMenu() {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }

    // メニューを閉じる
    function closeMenu() {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
    }

    // ハンバーガーメニューのクリックイベント
    menuToggle.addEventListener('click', toggleMenu);

    // スムーズスクロールとメニューを閉じる
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            closeMenu(); // メニューを閉じる
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ウィンドウサイズが変更された時にメニューの表示状態をリセット
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});