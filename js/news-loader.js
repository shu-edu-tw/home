document.addEventListener('DOMContentLoaded', function() {
    const NEWS_PER_PAGE = 9; // 每頁顯示9則新聞
    let allNews = [];
    let filteredNews = [];
    let currentPage = 1;

    const newsGrid = document.querySelector('.news-grid');
    const paginationContainer = document.getElementById('pagination-container');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // 獲取 URL 中的頁碼參數
    const urlParams = new URLSearchParams(window.location.search);
    const pageFromUrl = parseInt(urlParams.get('page'));
    if (pageFromUrl && pageFromUrl > 0) {
        currentPage = pageFromUrl;
    }

    // 獲取新聞資料
    fetch('../js/news-manifest.json')
        .then(response => response.json())
        .then(data => {
            allNews = data;
            filteredNews = allNews;
            renderPage(currentPage);
        })
        .catch(error => {
            console.error('Error fetching news data:', error);
            newsGrid.innerHTML = '<p>新聞載入失敗，請稍後再試。</p>';
        });

    // 渲染新聞卡片
    function renderNews(newsItems) {
        newsGrid.innerHTML = ''; // 清空現有內容
        if (!newsItems.length) {
            newsGrid.innerHTML = '<p>此分類目前沒有新聞。</p>';
            return;
        }
        newsItems.forEach(news => {
            const newsCard = `
                <article class="news-card" data-category="${news.category}">
                    <div class="news-image">
                        <a href="${news.url}">
                            <img src="${news.image}" alt="${news.title}" loading="lazy">
                        </a>
                    </div>
                    <div class="news-content">
                        <div class="news-meta">
                            <span class="news-date">${news.date}</span>
                            <span class="news-category">${news.category_ch}</span>
                        </div>
                        <h3 class="news-title">
                            <a href="${news.url}">${news.title}</a>
                        </h3>
                        <p class="news-excerpt">${news.excerpt}</p>
                        <a href="${news.url}" class="news-link">繼續閱讀...</a>
                    </div>
                </article>
            `;
            newsGrid.innerHTML += newsCard;
        });
    }

    // 渲染分頁按鈕
    function renderPagination(totalPages, activePage) {
        if (!paginationContainer) return;
        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        let paginationHTML = '<div class="hero-buttons">';
        
        // 上一頁按鈕
        paginationHTML += `<a href="?page=${activePage - 1}" class="btn btn-primary ${activePage === 1 ? 'disabled' : ''}">&laquo; 上一頁</a>`;
        
        // 頁碼按鈕
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `<a href="?page=${i}" class="btn ${i === activePage ? 'btn-primary' : 'btn-outline'}">${i}</a>`;
        }

        // 下一頁按鈕
        paginationHTML += `<a href="?page=${activePage + 1}" class="btn btn-primary ${activePage === totalPages ? 'disabled' : ''}">下一頁 &raquo;</a>`;
        
        paginationHTML += '</div>';
        paginationContainer.innerHTML = paginationHTML;
        
        // 重新綁定分頁按鈕事件
        addPaginationListeners();
    }
    
    // 渲染指定頁面
    function renderPage(page) {
        const totalPages = Math.ceil(filteredNews.length / NEWS_PER_PAGE);
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        
        const start = (page - 1) * NEWS_PER_PAGE;
        const end = start + NEWS_PER_PAGE;
        const newsForPage = filteredNews.slice(start, end);

        renderNews(newsForPage);
        renderPagination(totalPages, page);
        
        // 更新當前頁碼
        currentPage = page;
        
        // 為了SEO和使用者體驗，更新URL但不要重載頁面
        const newUrl = window.location.pathname + `?page=${page}`;
        window.history.pushState({path: newUrl}, '', newUrl);
    }
    
    // 處理分頁點擊事件
    function handlePageClick(e) {
        e.preventDefault();
        const target = e.target.closest('a');
        if (target && !target.classList.contains('disabled')) {
            const page = parseInt(new URL(target.href).searchParams.get('page'));
            if (page) {
                renderPage(page);
                // 點擊後滾動到新聞列表頂部
                document.getElementById('all-news').scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // 綁定分頁按鈕事件監聽
    function addPaginationListeners() {
        if (paginationContainer) {
            paginationContainer.addEventListener('click', handlePageClick);
        }
    }

    // 處理分類篩選
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const selectedCategory = this.getAttribute('data-category');
            
            if (selectedCategory === 'all') {
                filteredNews = allNews;
            } else {
                filteredNews = allNews.filter(news => news.category === selectedCategory);
            }
            renderPage(1); // 篩選後永遠回到第一頁
        });
    });
});