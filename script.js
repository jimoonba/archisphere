// 메인 슬라이더 기능
document.addEventListener('DOMContentLoaded', function() {
    // 슬라이더 기능
    const dots = document.querySelectorAll('.dot');
    const hero = document.querySelector('.hero');
    const heroBackgrounds = [
        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/hero-bg.jpg")',
        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/hero-bg2.jpg")',
        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/hero-bg3.jpg")',
        'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("images/hero-bg4.jpg")'
    ];
    
    let currentSlide = 0;
    
    // 슬라이더 도트 클릭 이벤트
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });
    
    // 자동 슬라이드 기능
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        updateSlider();
    }, 5000);
    
    function updateSlider() {
        // 배경 이미지 변경
        hero.style.backgroundImage = heroBackgrounds[currentSlide];
        
        // 활성화된 도트 표시
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // 카드 상호작용 기능
    const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
    const shareBtns = document.querySelectorAll('.share-btn');
    
    // 북마크 버튼 클릭 이벤트
    bookmarkBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                showToast('북마크에 추가되었습니다.');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                showToast('북마크에서 제거되었습니다.');
            }
        });
    });
    
    // 공유 버튼 클릭 이벤트
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showToast('공유 링크가 복사되었습니다.');
        });
    });
    
    // 토스트 메시지 표시 함수
    function showToast(message) {
        // 기존 토스트 제거
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // 새 토스트 생성
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        // 토스트 스타일
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '4px';
        toast.style.zIndex = '1000';
        
        // 토스트 자동 제거
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                toast.remove();
            }, 500);
        }, 3000);
    }
    
    // 검색 기능 (예시)
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            alert('검색 기능은 현재 개발 중입니다.');
        });
    }
    
    // 반응형 메뉴 토글 기능
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu ul');
    
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('show');
        });
    }
});
