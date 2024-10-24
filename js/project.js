import { scrollToTop } from "./scrollToTop.js";
import {handleLanguage}from "./handleLanguage.js"
import{openAndClose, openSearchInput}from './openAndClose.js'
import { changeToRtl } from "./changeToRtl.js";
openSearchInput
const lang=localStorage.getItem('lang')
// slides Data
const slidesData = [
  {
    imageSrc: './images/image1.jpeg',
    destination: 'Destination',
    destinationAr: 'الوجهة',
    title: 'Exploring the Wonders of Hiking',
    titleAr: 'استكشاف عجائب المشي لمسافات طويلة',
    description: 'An iconic landmark, this post unveils the secrets that make this destination a traveler\'s paradise.',
    descriptionAr: 'معلم بارز، يكشف هذا المنشور الأسرار التي تجعل هذه الوجهة جنة للمسافرين.',
    profile: {
      name: 'Mohamed Rady',
      imageSrc: './images/image1.jpeg',
      publicationDate: '24 Jan 2024',
      readTime: '10 mins read'
    },
    profileAr: {
      name: 'محمد راضي',
      imageSrc: './images/image1.jpeg',
      publicationDate: '24 يناير 2024',
      readTime: '10 دقائق قراءة'
    }
  },
  {
    imageSrc: './images/image4.avif',
    destination: 'Football',
    destinationAr: 'كرة القدم',
    title: 'Discovering Hidden Beaches',
    titleAr: 'اكتشاف الشواطئ الخفية',
    description: 'This post reveals the beauty of untouched beaches and the best spots to visit.',
    descriptionAr: 'يكشف هذا المنشور عن جمال الشواطئ البكر وأفضل الأماكن التي يمكن زيارتها.',
    profile: {
      name: 'Ahmed Ali',
      imageSrc: './images/image1.jpeg',
      publicationDate: '5 Feb 2024',
      readTime: '8 mins read'
    },
    profileAr: {
      name: 'أحمد علي',
      imageSrc: './images/image1.jpeg',
      publicationDate: '5 فبراير 2024',
      readTime: '8 دقائق قراءة'
    }
  },  
  {
    imageSrc: './images/image1.jpeg',
    destination: 'tips & tricks',
    destinationAr: 'نصائح وحيل',
    title: 'Exploring the Wonders of Hiking',
    titleAr: 'استكشاف عجائب المشي لمسافات طويلة',
    description: 'An iconic landmark, this post unveils the secrets that make this destination a traveler\'s paradise.',
    descriptionAr: 'معلم بارز، يكشف هذا المنشور الأسرار التي تجعل هذه الوجهة جنة للمسافرين.',
    profile: {
      name: 'Mohamed Rady',
      imageSrc: './images/image1.jpeg',
      publicationDate: '24 Jan 2024',
      readTime: '10 mins read'
    },
    profileAr: {
      name: 'محمد راضي',
      imageSrc: './images/image1.jpeg',
      publicationDate: '24 يناير 2024',
      readTime: '10 دقائق قراءة'
    }
  },
  {
    imageSrc: './images/categorates/clothes.jpg',
    destination: 'Lifestyle',
    destinationAr: 'أسلوب الحياة',
    title: 'Discovering Hidden Beaches',
    titleAr: 'اكتشاف الشواطئ الخفية',
    description: 'This post reveals the beauty of untouched beaches and the best spots to visit.',
    descriptionAr: 'يكشف هذا المنشور عن جمال الشواطئ البكر وأفضل الأماكن التي يمكن زيارتها.',
    profile: {
      name: 'Yasser Ali',
      imageSrc: './images/image1.jpeg',
      publicationDate: '5 Feb 2024',
      readTime: '8 mins read'
    },
    profileAr: {
      name: 'ياسر علي',
      imageSrc: './images/image1.jpeg',
      publicationDate: '5 فبراير 2024',
      readTime: '8 دقائق قراءة'
    }
  }
];

// Articles Data
let articlesData=[];
getAttribute()
function getAttribute(){
    fetch('./json/articles.json').then(response => response.json()).then(articles=>{
        articlesData=articles
        displayArticles(articlesData)
        displayCategorates()
    })
    
}

// Categorates list
let categorateList= ['Tips & Hacks','Culinary','All','Lifestyle','Destination','Tips & Hacks','Culinary']
let categorateListAr = [
  'الكل', 'أسلوب الحياة', 'وجهة', 'نصائح وحيل', 'الطهي','الكل', 'أسلوب الحياة', 'وجهة', 'نصائح وحيل', 'الطهي','الكل', 'أسلوب الحياة', 'وجهة', 'نصائح وحيل', 'الطهي'];
//Start DisplayContent
function displaycontent(slidesData){

    const list=document.querySelector('.list');
    slidesData.forEach((data,index)=>{
      const destination =lang==='ar'? data.destinationAr:data.destination;
      const title =lang==='ar'?data.titleAr: data.title;
      const description =lang==='ar'?data.descriptionAr: data.description;
      const profileName =lang==='ar'?data.profileAr.name:data.profile.name;
      const publicationDate =lang==='ar'?data.profileAr.publicationDate:  data.profile.publicationDate;
      const readTime =lang==='ar'?data.profileAr.readTime:data.profile.readTime;
        list.innerHTML+=`  

  <div class="item position-relative overflow-hidden" style="min-width:100%;">
    <img src="${data.imageSrc}" class="w-100 h-100 object-fit-cover" alt="${title}">
    <div class="content d-flex justify-content-between align-items-start flex-wrap z-2 gap-3 position-absolute text-white ">
      <div class="content-text" >
        <p class="destination bg-secondary bg-opacity-75 py-2 px-3 rounded-pill text-truncate">
          ${destination}
        </p>
        <h2 class="my-3 fs-1  text-truncate">${title}</h2>
        <p class="fw-normal fs-6 lh-base">
          ${description}
        </p>
      </div>
      <div class="profile position-relative mt-4 d-flex flex-column gap-3 align-self-center ">
        <div class="name d-flex align-items-center gap-2 cursor-pointer">
          <img src="${data.profile.imageSrc}" class="rounded-circle" style="width: 30px; height: 30px;" alt="${profileName}">
          <p class="fw-bold my-auto">${profileName}</p>
        </div>
        <div class="date d-flex gap-2 align-items-center position-relative fw-normal opacity-75 gap-lg-2">
          <span class="Publication-date">${publicationDate}</span>
          <span class="bg-white rounded-circle" style="width:5px; height:5px;"></span>
          <span class="read-time">${readTime}</span>
        </div>
      </div>
    </div>
  </div>
        `
    const sliderDots=document.querySelector('.slider-dots')

        let sliderDot=document.createElement('span')
        sliderDot.classList.add('dot')
        if (index === 0) {
            sliderDot.classList.add('active');
        }
        sliderDots.appendChild(sliderDot)
    });
    
    getIndex();

}


// End Display Content Function


// Start Display Categorates Function
  
function displayCategorates() {
  let categoratesDiv = document.querySelector('.categorates');
  let categorateName = lang === 'ar' ? categorateListAr : categorateList;

  categorateName.forEach((categorate, i) => {
      const categorateBtn = document.createElement('button');
      categorateBtn.classList.add('fs-6', 'rounded', 'py-2', 'text-truncate', 'px-2');
      categorateBtn.textContent = `${categorate}`;
      categoratesDiv.appendChild(categorateBtn);

      if (i === 0) {
          categorateBtn.classList.add('active');
          filterData('All');
      }

      categorateBtn.addEventListener('click', () => {
          categoratesDiv.querySelectorAll('button').forEach(btn => { btn.classList.remove('active'); });
          filterData(categorate);
          categorateBtn.classList.add('active');
          console.log(categorate);
      });
  });

  const swiperBtns = document.querySelectorAll('.swiper-btn');
  swiperBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          const firstCategorateBtnWidth = document.querySelector('.categorates button').clientWidth;
          categoratesDiv.scrollLeft += btn.classList.contains('back-btn') ? -firstCategorateBtnWidth : firstCategorateBtnWidth;
      });
  });

  updateSwiperBtnsVisibility(); // Call to set initial button visibility
}

// Update visibility of swiper buttons
function updateSwiperBtnsVisibility() {
  const categoratesDiv = document.querySelector('.categorates');
  const screenWidth = window.innerWidth;
  const categorateBtns = categoratesDiv.querySelectorAll('button');
  const swiperBtns = document.querySelectorAll('.swiper-btn'); // Move this here to ensure it's scoped correctly

  if (categorateBtns.length === 0 || swiperBtns.length === 0) return; // Prevent errors if no buttons exist

  const buttonWidth = categorateBtns[0].clientWidth;
  const visibleButtons = Math.floor(categoratesDiv.clientWidth / buttonWidth);

  if (screenWidth >= 1024) {
      if (visibleButtons < 5) {
          swiperBtns.forEach(btn => btn.style.display = 'none');
      } else {
          swiperBtns.forEach(btn => btn.style.display = 'block');
      }
  } else if (screenWidth >= 768 && screenWidth < 1024) {
      if (visibleButtons < 4) {
          swiperBtns.forEach(btn => btn.style.display = 'none');
      } else {
          swiperBtns.forEach(btn => btn.style.display = 'block');
      }
  } else {
      swiperBtns.forEach(btn => btn.style.display = 'block');
  }
}

window.addEventListener('resize', updateSwiperBtnsVisibility);

// Call the displayCategorates function when the DOM is loaded
document.addEventListener('DOMContentLoaded', displayCategorates);

//Start GetSort function

function getSortBy(){
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    dropdownItems.forEach(item => {
      item.addEventListener('click', ()=> {
        console.log(item.getAttribute('data-filter'))
      });
    });}

//End GetSort function

//Start Pagination function
let currentPage=1;
let itemsPerPage=9;
let NumberOfPages=Math.ceil(articlesData/itemsPerPage)
let filteredData = articlesData;

// Function to display pagination buttons and manage pagination behavior
function displayPagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';
    // Create and append back button if currentPage > 1
    if (currentPage > 1) {
        const backButton = document.createElement('button');
        backButton.classList.add('pagination-btn', 'p-1', 'rounded');
        backButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="M15 18l-6-6 6-6"></path></svg>';

        backButton.addEventListener('click', () => {
                currentPage--;
                displayArticles(filteredData);
                displayPagination();
                const blogsElement = document.querySelector('.blogs');
                blogsElement.scrollIntoView({ behavior: 'smooth' });
        });

        pagination.appendChild(backButton);
    }

    // Create and append pagination number buttons
    if(NumberOfPages>1){
    for (let i = 1; i <= NumberOfPages; i++) {
        const pageNumberBtn = document.createElement('button');
        pageNumberBtn.classList.add('pagination-btn', 'px-3','py-1', 'my-0', 'mx-1', 'border-0', 'rounded', 'cursor-pointer', 'fw-bold');
        pageNumberBtn.textContent = i;

        // Highlight current page as active
        if (i === currentPage) {
            pageNumberBtn.classList.add('active');
        }

        // Logic for showing pages
        if (
            i ===1 || 
            i === NumberOfPages ||
            (currentPage === 1 && i <= 3) || // Always show the last page
            (i >= currentPage - 1 && i <= currentPage + 1) // Show current page and neighbors
        ) {
            pageNumberBtn.addEventListener('click', () => {
                currentPage = i;
                displayArticles(filteredData);
                displayPagination();

                const blogsElement = document.querySelector('.blogs');
                blogsElement.scrollIntoView({ behavior: 'smooth' });            
            });

            pagination.appendChild(pageNumberBtn);
        } else if (i === currentPage + 3 || (i === 2 && currentPage > 3)) {
            const dots = document.createElement('span');
            dots.classList.add('my-auto','pagination-dots');
            dots.textContent = '...';
            pagination.appendChild(dots);
        }
    }}

    // Create and append next button if currentPage < NumberOfPages
    if (currentPage < NumberOfPages) {
        const nextButton = document.createElement('button');
        nextButton.classList.add('pagination-btn', 'p-1','fs-5', 'rounded');
        nextButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="M9 18l6-6-6-6"></path></svg>';

        nextButton.addEventListener('click', () => {
                currentPage++;
                displayArticles(filteredData);
                displayPagination();
                
            const blogsElement = document.querySelector('.blogs');
            blogsElement.scrollIntoView({ behavior: 'smooth' });
        });

        pagination.appendChild(nextButton);
        
    }
}

// Function to filter data based on category

function filterData(category) {
    document.querySelectorAll('.categorate-button').forEach(btn=>{
        btn.classList.remove('active')
    })
    if (category !== 'All'&&category !== 'الكل') {
        filteredData = articlesData.filter(article=> lang === 'ar' ? article.categoryAr === category : article.category === category          );
    }else{
        filteredData = articlesData
    }
    NumberOfPages = Math.ceil(filteredData.length / itemsPerPage);
    currentPage = 1;
    displayArticles(filteredData)
        displayPagination();
}

// Function to display articles based on current page

function displayArticles(articlesData){
    const cards=document.querySelector('.cards');
    cards.innerHTML = ''; 

    //Get the start index and end index of the number of data to display.

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = articlesData.slice(startIndex, endIndex);
    paginatedData.forEach(article=>{
      const category =lang==='ar'?article.categoryAr:article.category;
      const title = lang==='ar'?article.titleAr:article.title;
      const description = lang==='ar'?article.descriptionAr:article.description;
      const profileName = lang==='ar'?article.author.nameAr:article.author.name;
      const publicationDate =  lang==='ar'?article.dateAr:article.date;
      const readTime =  lang==='ar'?article.readTimeAr:article.readTime;
    const card=document.createElement('div');
    card.classList.add('card','border-0','py-2', 'col-12','col-md-6' ,'col-lg-4')
    card.innerHTML=`      
<a href="article details.html?id=${article.id}" class="text-black text-decoration-none">
      <div class="img-container">
            <img class="card-img w-100 h-100 object-fit-cover rounded-2" src="${article.imgSrc}" alt="${article.title}" />
          <h4 class="category fs-6 py-2 px-3 d-inline position-absolute rounded-pill text-truncate">${category}</h4>
      </div>
            <div class="card-body d-flex flex-column  justify-content-between">
              <div class="d-flex flex-column justify-content-between flex-grow-1">
              <div>
              <div class="date d-flex align-items-center mb-3 mt-2  position-relative fs-6 fw-normal opacity-75 gap-3">
                <span class="Publication-date"> ${publicationDate} </span>
               <span class="bg-secondary opacity-75 rounded-circle" style="width:7px; height:7px;"></span>
                <span class="read-time"> ${readTime} </span>
              </div>
                      <h4 class="card-title text-truncate fs-3 mb-2"><a href="article details.html?id=${article.id}" class="text-black text-decoration-none">${title}</a></h4>
              <div class="description">
                <p class="card-text fs-6 overflow-hidden opacity-75 lh-base mb-3">
                  ${description}
                </p>
              </div>
              </div>
  
                <div class="profile d-flex align-items-center gap-2">
                  <div class="name d-flex gap-2">
                      <div class="img-container rounded-circle overflow-hidden flex-shrink-0" style="width:30px; height:30px;">
                    <img class="w-100 object-fit-contain" src="${article.author.imgSrc}" alt="${profileName}" />
                    </div>
                    <p class="fw-bold m-auto">${profileName}</p>
                  </div>
                </div>
              </div>
            </div>
</a>
        `
        cards.appendChild(card)
    })

}

let currentIndex = 0;

// Function to get the current index of the slider from the dot buttons
function getIndex(){
    const sliderDots = document.querySelectorAll('.slider-dots .dot'); 

        sliderDots.forEach((dot,i)=>{
            dot.addEventListener('click',()=>{
                currentIndex=i;
                showSlide(currentIndex);
                console.log(currentIndex)
            })
    })

}
// End get index From dot button funcion

// Function to automatically transition to the next slide every 5 seconds
function autoSlide(){
    const slides =document.querySelectorAll('.list .item')
    setInterval(()=>{
                currentIndex = (currentIndex + 1) % slides.length;

                showSlide(currentIndex);
    },5000)
}
// Function to show the slide corresponding to the given index
function showSlide(index) {
    const list =document.querySelector('.slider .list');
    const X =window.localStorage.getItem('lang')=='ar'? index * 100:-index * 100;
    list.style.transform = `translateX(${X}%)`;
    updateActiveDot(index); 
}

// Function to update the active dot based on the current slide
function updateActiveDot(index) {
    const sliderDots = document.querySelectorAll('.slider-dots .dot'); 
    sliderDots.forEach(dot => dot.classList.remove('active'));
    sliderDots[index].classList.add('active');

}

function initializePageLanguage(){
    changeToRtl('./css/style-rtl.css');
    if(localStorage.getItem('lang')==='ar'){
      //  Fixing next and back buttons
      document.querySelectorAll('.swiper-btn').forEach((btn, index) => {
        btn.classList.replace(index === 0 ? 'back-btn' : 'next-btn', index === 0 ? 'next-btn' : 'back-btn');
      });
      
    }
}

function changeToArabic(lang) {
  if (lang === 'ar') {
      const navBarLinks = document.querySelectorAll('#navBarLinks li a');

      navBarLinks[0].innerHTML = 'فندق';         
      navBarLinks[1].innerHTML = 'رحلة';         
      navBarLinks[2].innerHTML = 'قطار';         
      navBarLinks[3].innerHTML = 'سفر';          
      navBarLinks[4].innerHTML = 'تأجير سيارات'; 

    const registerBtns=document.querySelectorAll("#register button")
    registerBtns[0].innerHTML = 'تسجيل دخول';         
    registerBtns[1].innerHTML = 'اشتراك'; 

    const BlogTile=document.querySelector('#blogText h2')
    const BlogParagraph=document.querySelector('#blogText p')
    BlogTile.innerHTML='مدونة'
    BlogParagraph.innerHTML='نشارك هنا نصائح السفر وأدلة الوجهات والقصص التي إلهام مغامرتك القادمة.'

    const sortTitle=document.querySelector('#sortTitle')
    const sortBtn=document.querySelector('#sort button');
    const sortOptions=document.querySelectorAll('#sort ul li a')

    sortTitle.innerHTML='الترتيب حسب:'
    sortBtn.innerHTML='اختر'
    sortOptions[0].innerHTML='الكل'
    sortOptions[1].innerHTML='اخر المدونات'
    sortOptions[2].innerHTML='اقدم المدونات'
    sortOptions[3].innerHTML='اشهر المدونات'
    
    const bookingTitle = document.querySelector('#booking h2');
    const bookingDescription = document.querySelector('#booking p');
    const bookingButton = document.querySelector('#booking button');

    bookingTitle.innerHTML = 'استكشف أكثر للحصول على منطقة راحتك';
    bookingDescription.innerHTML = 'احجز إقامتك المثالية معنا.';
    bookingButton.innerHTML = 'احجز الآن →';

    const articleText = document.querySelector('#article p');
    const articleCount = document.querySelector('#article h3');

    articleText.innerHTML = 'مقالات متاحة';
    articleCount.innerHTML = '78'; 

    const beyondTitle = document.querySelector('#beyond h2');

    beyondTitle.innerHTML = 'خارج الإقامة، خلق ذكريات تدوم مدى الحياة';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  // 1. Call Displaycontent function 
  displaycontent(slidesData);
  // 3. Call displayArticles Function
  displayArticles(articlesData);

  // 4. Initialize the slider (if it depends on displayed content)
  getIndex(); // Set up event listeners for dots
  //autoSlide(); 

  getSortBy()
  // 5. Other initializations
  displayPagination(); // Pagination depends on articlesData

  // Function to toggle the menu list when the dashboard button is clicked

  openAndClose('dash','ul','active','.close-btn',['#searchInput'],'open');

  // Function to toggle the search input field when the search button is clicked
  
  openSearchInput('searchBtn','#searchInput','open',null,['ul'],'active');
  

  // Open And Close Language Menu
  openAndClose('langButton','#languagesCard','active');
  
  handleLanguage('#languagesCard button');
  initializePageLanguage(); // Ensure language settings are applied
  scrollToTop('toTop','opacity-1','opacity-0')
  changeToArabic(lang)
  autoSlide()

});