// Structured Data for Shih Hsin University Website
// This file contains JSON-LD structured data to help search engines understand the content

// Main Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "世新大學",
    "alternateName": ["Shih Hsin University", "世新", "SHU"],
    "url": "https://shu-edu-tw.github.io/home/",
    "logo": "https://shu-edu-tw.github.io/home/images/shu-logo.png",
    "image": "https://shu-edu-tw.github.io/home/images/campus-building.jpg",
    "description": "世新大學創立於1956年，由新聞界泰斗成舍我先生創辦，是台灣第一所以傳播教育為特色的高等學府。秉持「學校為學生而辦，學生為讀書而來」的辦學理念，致力培養品德與智慧並重、理論與實務合一的專業人才。",
    "foundingDate": "1956",
    "founder": {
        "@type": "Person",
        "name": "成舍我"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "台北市文山區木柵路一段17巷1號",
        "addressLocality": "台北市",
        "addressRegion": "台灣",
        "postalCode": "116",
        "addressCountry": "TW"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+886-2-2236-8225",
        "contactType": "customer service",
        "email": "info@shu.edu.tw",
        "availableLanguage": ["zh-TW", "en"]
    },
    "sameAs": [
        "https://www.shu.edu.tw/",
        "https://www.facebook.com/ShihHsinU/",
        "https://www.youtube.com/channel/UCuPF9UYEVknu4AFk_pNVtCQ",
        "https://zh.wikipedia.org/zh-hant/世新大學"
    ],
    "department": [
        {
            "@type": "EducationalOrganization",
            "name": "新聞傳播學院",
            "description": "台灣歷史最悠久、規模最完整的傳播學院，包含新聞、廣電、公廣、口傳、圖傳、數媒、傳管等系所。"
        },
        {
            "@type": "EducationalOrganization", 
            "name": "管理學院",
            "description": "結合傳播特色與管理專業，培養具備溝通能力的管理人才，包含企管、資管、財金、觀光、資傳等系所。"
        },
        {
            "@type": "EducationalOrganization",
            "name": "人文社會學院", 
            "description": "培養具備人文素養與社會關懷的專業人才，包含中文、英語、日文、社心、性別研究等系所。"
        },
        {
            "@type": "EducationalOrganization",
            "name": "法律學院",
            "description": "培養具備法學專業與社會正義感的法律人才，理論與實務並重，設有模擬法庭等專業設施。"
        }
    ]
};

// Course Schemas for different departments
const courseSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "新聞學系",
        "description": "培養具備新聞專業知識與實務技能的人才，課程涵蓋新聞採訪、編輯、攝影、數位媒體等領域。",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "世新大學新聞傳播學院"
        },
        "educationalLevel": "大學部",
        "courseMode": "全日制",
        "inLanguage": "zh-TW"
    },
    {
        "@context": "https://schema.org", 
        "@type": "Course",
        "name": "廣播電視電影學系",
        "description": "培養廣播、電視、電影製作專業人才，提供完整的影視製作訓練和實習機會。",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "世新大學新聞傳播學院"
        },
        "educationalLevel": "大學部",
        "courseMode": "全日制",
        "inLanguage": "zh-TW"
    },
    {
        "@context": "https://schema.org",
        "@type": "Course", 
        "name": "企業管理學系",
        "description": "培養具備現代管理知識與實務能力的管理人才，結合傳播特色發展獨特的管理教育。",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "世新大學管理學院"
        },
        "educationalLevel": "大學部",
        "courseMode": "全日制", 
        "inLanguage": "zh-TW"
    }
];

// Website Schema
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "世新大學官方網站",
    "alternateName": "Shih Hsin University Official Website",
    "url": "https://shu-edu-tw.github.io/home/",
    "description": "世新大學官方網站，提供學校介紹、招生資訊、學院系所、校園生活、最新消息等完整資訊。",
    "inLanguage": "zh-TW",
    "publisher": {
        "@type": "EducationalOrganization",
        "name": "世新大學"
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://shu-edu-tw.github.io/home/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

// Breadcrumb Schema
const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "首頁",
            "item": "https://shu-edu-tw.github.io/home/"
        }
    ]
};

// FAQ Schema for common questions
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "世新大學創立於何時？",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "世新大學創立於1956年，由新聞界泰斗成舍我先生創辦，是台灣第一所以傳播教育為特色的高等學府。"
            }
        },
        {
            "@type": "Question",
            "name": "世新大學有哪些學院？",
            "acceptedAnswer": {
                "@type": "Answer", 
                "text": "世新大學設有四個學院：新聞傳播學院、管理學院、人文社會學院、法律學院，共19個學系。"
            }
        },
        {
            "@type": "Question",
            "name": "世新大學的特色是什麼？",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "世新大學以傳播教育為特色，是台灣第一所傳播專業大學。秉持「德智兼修，手腦並用」的教育理念，培養理論與實務並重的專業人才。"
            }
        },
        {
            "@type": "Question",
            "name": "如何申請世新大學？",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "世新大學提供多種入學管道，包括個人申請、考試分發、繁星推薦等。詳細招生資訊請參考招生資訊頁面或聯絡招生組。"
            }
        }
    ]
};

// Function to inject structured data into the page
function injectStructuredData() {
    // Create script elements for each schema
    const schemas = [
        organizationSchema,
        websiteSchema,
        breadcrumbSchema,
        faqSchema,
        ...courseSchemas
    ];
    
    schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        script.id = `structured-data-${index}`;
        document.head.appendChild(script);
    });
}

// Function to update breadcrumb schema based on current page
function updateBreadcrumbSchema(pageTitle, pageUrl) {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "首頁",
                "item": "https://shu-edu-tw.github.io/home/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": pageTitle,
                "item": pageUrl
            }
        ]
    };
    
    // Remove existing breadcrumb schema
    const existingBreadcrumb = document.getElementById('breadcrumb-schema');
    if (existingBreadcrumb) {
        existingBreadcrumb.remove();
    }
    
    // Add new breadcrumb schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumb);
    script.id = 'breadcrumb-schema';
    document.head.appendChild(script);
}

// Function to add article schema for news pages
function addArticleSchema(title, description, publishDate, imageUrl) {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": imageUrl,
        "datePublished": publishDate,
        "dateModified": publishDate,
        "author": {
            "@type": "Organization",
            "name": "世新大學"
        },
        "publisher": {
            "@type": "EducationalOrganization",
            "name": "世新大學",
            "logo": {
                "@type": "ImageObject",
                "url": "https://shu-edu-tw.github.io/home/images/shu-logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(articleSchema);
    script.id = 'article-schema';
    document.head.appendChild(script);
}

// Initialize structured data when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    injectStructuredData();
    
    // Update page-specific schemas based on current page
    const currentPath = window.location.pathname;
    const currentUrl = window.location.href;
    
    if (currentPath.includes('about')) {
        updateBreadcrumbSchema('關於世新', currentUrl);
    } else if (currentPath.includes('colleges')) {
        updateBreadcrumbSchema('學院系所', currentUrl);
    } else if (currentPath.includes('admission')) {
        updateBreadcrumbSchema('招生資訊', currentUrl);
    } else if (currentPath.includes('campus-life')) {
        updateBreadcrumbSchema('校園生活', currentUrl);
    } else if (currentPath.includes('alumni')) {
        updateBreadcrumbSchema('傑出校友', currentUrl);
    } else if (currentPath.includes('news')) {
        updateBreadcrumbSchema('最新消息', currentUrl);
    } else if (currentPath.includes('contact')) {
        updateBreadcrumbSchema('聯絡我們', currentUrl);
    }
});

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        injectStructuredData,
        updateBreadcrumbSchema,
        addArticleSchema,
        organizationSchema,
        websiteSchema,
        faqSchema
    };
}

