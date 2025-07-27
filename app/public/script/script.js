  

  

// 轮播图视差效果
function initCarouselParallax() {
    const carousel = document.getElementById('carouselExampleCaptions');
    if (!carousel) return;

    let ticking = false;
    let lastScrollY = window.scrollY;
    let initialOffset = {};
    
    function updateCarouselParallax() {
        const images = document.querySelectorAll('.carousel .parallax-carousel');
        const speed = 0.3;
        const scrolled = window.scrollY;

        images.forEach(img => {
            const container = img.closest('.carousel-item');
            if (!container) return;

            // 只处理当前显示的轮播项
            if (container.classList.contains('active')) {
                // 如果是新激活的项，记录初始偏移
                if (!initialOffset[img.src]) {
                    initialOffset[img.src] = scrolled;
                }

                // 计算相对于初始位置的偏移
                const relativeScroll = scrolled - initialOffset[img.src];
                const yPos = relativeScroll * speed;
                
                // 限制移动范围
                const maxMove = container.offsetHeight * 0.2; // 最大移动距离为容器高度的20%
                const limitedYPos = Math.max(Math.min(yPos, maxMove), -maxMove);
                
                img.style.transform = `translate3d(0, ${limitedYPos}px, 0)`;
            } else {
                // 重置非活动项的位置
                img.style.transform = 'translate3d(0, 0, 0)';
                delete initialOffset[img.src];
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateCarouselParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // 监听轮播图切换事件
    carousel.addEventListener('slide.bs.carousel', function () {
        // 重置所有图片位置
        const images = document.querySelectorAll('.carousel .parallax-carousel');
        images.forEach(img => {
            img.style.transform = 'translate3d(0, 0, 0)';
        });
        initialOffset = {}; // 重置初始偏移记录
    });

    // 初始化轮播图图片样式
    const carouselImages = document.querySelectorAll('.carousel .parallax-carousel');
    carouselImages.forEach(img => {
        img.style.willChange = 'transform';
        img.style.transition = 'transform 0.2s ease-out';
    });

    // 初始化执行一次
    updateCarouselParallax();
}

// 普通图片视差效果
function initNormalParallax() {
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    function updateNormalParallax() {
        const images = document.querySelectorAll('.parallax-carousel:not(.carousel .parallax-carousel) img');
        const scrolled = window.scrollY;
        const speed = 0.2; // 普通图片使用更温和的视差效果

        images.forEach(img => {
            const container = img.closest('.parallax-carousel');
            const containerRect = container.getBoundingClientRect();
            
            if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
                const yPos = ((containerRect.top - window.innerHeight/2) * speed);
                img.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });

        ticking = false;
    }

    window.addEventListener('scroll', function() {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateNormalParallax();
                ticking = false;
            });
            ticking = true;
        }
    });

    // 初始化普通图片样式
    const normalImages = document.querySelectorAll('.parallax-carousel:not(.carousel .parallax-carousel) img');
    normalImages.forEach(img => {
        img.style.willChange = 'transform';
        img.style.transition = 'transform 0.1s cubic-bezier(0,0,0,1)';
    });

    // 初始化执行一次
    updateNormalParallax();
}

// 页面加载完成后初始化所有视差效果
document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    const carousel = document.getElementById('carouselExampleCaptions');
    // if (carousel) {
    //     new bootstrap.Carousel(carousel, {
    //         interval: false,  // 设置为 false 禁用自动播放
    //         wrap: true,
    //         keyboard: true,
    //         pause: false,     // 移除暂停功能
    //         touch: true
    //     });
    // }

    // 轮播图视差效果
    function initCarouselParallax() {
        const carousel = document.getElementById('carouselExampleCaptions');
        if (!carousel) return;

        let ticking = false;
        let lastScrollY = window.scrollY;
        let initialOffset = {};
        
        function updateCarouselParallax() {
            const images = document.querySelectorAll('.carousel .parallax-carousel');
            const speed = 0.3;
            const scrolled = window.scrollY;

            images.forEach(img => {
                const container = img.closest('.carousel-item');
                if (!container) return;

                // 只处理当前显示的轮播项
                if (container.classList.contains('active')) {
                    // 如果是新激活的项，记录初始偏移
                    if (!initialOffset[img.src]) {
                        initialOffset[img.src] = scrolled;
                    }

                    // 计算相对于初始位置的偏移
                    const relativeScroll = scrolled - initialOffset[img.src];
                    const yPos = relativeScroll * speed;
                    
                    // 限制移动范围
                    const maxMove = container.offsetHeight * 0.2; // 最大移动距离为容器高度的20%
                    const limitedYPos = Math.max(Math.min(yPos, maxMove), -maxMove);
                    
                    img.style.transform = `translate3d(0, ${limitedYPos}px, 0)`;
                } else {
                    // 重置非活动项的位置
                    img.style.transform = 'translate3d(0, 0, 0)';
                    delete initialOffset[img.src];
                }
            });

            ticking = false;
        }

        window.addEventListener('scroll', function() {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateCarouselParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // 监听轮播图切换事件
        carousel.addEventListener('slide.bs.carousel', function () {
            // 重置所有图片位置
            const images = document.querySelectorAll('.carousel .parallax-carousel');
            images.forEach(img => {
                img.style.transform = 'translate3d(0, 0, 0)';
            });
            initialOffset = {}; // 重置初始偏移记录
        });

        // 初始化轮播图图片样式
        const carouselImages = document.querySelectorAll('.carousel .parallax-carousel');
        carouselImages.forEach(img => {
            img.style.willChange = 'transform';
            img.style.transition = 'transform 0.2s ease-out';
        });

        // 初始化执行一次
        updateCarouselParallax();
    }

    // 普通图片视差效果
    function initNormalParallax() {
        let ticking = false;
        let lastScrollY = window.scrollY;
        
        function updateNormalParallax() {
            const images = document.querySelectorAll('.parallax-carousel:not(.carousel .parallax-carousel) img');
            const scrolled = window.scrollY;
            const speed = 0.2; // 普通图片使用更温和的视差效果

            images.forEach(img => {
                const container = img.closest('.parallax-carousel');
                const containerRect = container.getBoundingClientRect();
                
                if (containerRect.top < window.innerHeight && containerRect.bottom > 0) {
                    const yPos = ((containerRect.top - window.innerHeight/2) * speed);
                    img.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            });

            ticking = false;
        }

        window.addEventListener('scroll', function() {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateNormalParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // 初始化普通图片样式
        const normalImages = document.querySelectorAll('.parallax-carousel:not(.carousel .parallax-carousel) img');
        normalImages.forEach(img => {
            img.style.willChange = 'transform';
            img.style.transition = 'transform 0.1s cubic-bezier(0,0,0,1)';
        });

        // 初始化执行一次
        updateNormalParallax();
    }

    // 初始化所有视差效果
    initCarouselParallax();
    initNormalParallax();
});