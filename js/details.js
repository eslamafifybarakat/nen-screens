import {handleLanguage}from "./handleLanguage.js"
import{openAndClose}from './openAndClose.js'
import { changeToRtl } from "./changeToRtl.js";
import { openSearchInput } from "./openAndClose.js";

const lang=localStorage.getItem('lang');
let categorateListAr = ['أسلوب الحياة', 'وجهة', 'نصائح وحيل', 'الطهي'];

function getArticleIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}
let article;
fetch('./json/articles.json').then(Response => Response.json()).then(articles => {
    article = articles.find(article => article.id == getArticleIdFromUrl());
    console.log(article)
    putText();

})

let descriptionContent= `
    <p>
      In an era where efficiency, elegance, and performance matter most, our product stands as the pinnacle of innovation. Designed with meticulous attention to detail, it integrates seamlessly into your daily routine, enhancing every aspect of your workflow. Whether you're a professional, a creative, or simply someone looking for reliable solutions, this product delivers beyond expectations.
    </p>
    <p>
      Built from the finest materials, our product is not only durable but also environmentally friendly. Each component is crafted with precision, ensuring long-lasting performance. The sleek design is not just about aesthetics; it's about creating an ergonomic experience that feels intuitive from the first use.
    </p>
    <p>
      With cutting-edge technology at its core, this product offers unparalleled speed and responsiveness. Its powerful processor handles the most demanding tasks effortlessly, while the intuitive user interface ensures a smooth, frustration-free experience. Every feature is designed to minimize hassle and maximize productivity.
    </p>
    <p>
      From the initial unboxing experience to everyday use, our product promises an extraordinary journey. We've reimagined the user experience from the ground up, incorporating feedback from thousands of users worldwide. The result? A product that not only meets but exceeds the diverse needs of our global customer base.
    </p>
    <h2 class="my-4">Innovation Meets Sustainability</h2>
    <p>
      Sustainability is at the heart of our product's design. We're committed to reducing our environmental footprint, and every step of our manufacturing process reflects this dedication. From using recycled materials to energy-efficient production methods, we're proud to offer a product that contributes positively to the planet.
    </p>
    <p>
      Furthermore, the packaging is 100% recyclable, reducing waste and promoting eco-friendly practices. Even the shipping process has been optimized to reduce carbon emissions. By choosing our product, you're not only investing in superior performance but also supporting a sustainable future.
    </p>
    <h2 class="my-4">Experience the Future Today</h2>
    <p>
      The future is here, and it's brighter than ever. Our product represents the next generation of innovation, a perfect blend of cutting-edge technology and user-centric design. It's more than just a tool; it's an experience—a gateway to enhanced productivity, creativity, and sustainability.
    </p>
    <p>
      Join millions of satisfied users who have already transformed their daily lives with our product. The future isn't something you wait for—it's something you create. Take the first step today and experience the ultimate in modern solutions.
    </p>
    <h2 class="my-4">Customer Testimonials</h2>
    <p>
      Don't just take our word for it—hear from our delighted customers! "This product has revolutionized the way I work. It's like having a personal assistant that never tires!" says Emily, a freelance designer. Another user, John, adds, "I've tried many similar products, but none come close to this one in terms of quality and performance. Highly recommended!"
    </p>
    <p>
      Our commitment to excellence doesn't stop at the product itself. We pride ourselves on providing exceptional customer service. Our support team is available 24/7 to assist you with any questions or concerns you may have. Your satisfaction is our priority, and we strive to ensure you have the best experience possible.
    </p>
    <h2 class="my-4">Join the Community</h2>
    <p>
      By choosing our product, you become part of a vibrant community of innovators and creators. Share your experiences, tips, and ideas with fellow users on our dedicated forums and social media platforms. Together, we can inspire one another to achieve greatness and push the boundaries of what’s possible.
    </p>
    <p>
      In conclusion, this product is not just a purchase—it's an investment in your future. Experience the transformative power of innovation and join us on this exciting journey towards a better tomorrow. Make the smart choice today and elevate your potential to new heights!
    </p>
  `;

function putText() {
    const imgContainer = document.getElementById('imgContainer');
    const artileTitle = document.querySelector('#articleTitle h1');
    const authorName = document.querySelector('#authorContent');
    const description = document.getElementById('description');

    const category =lang==='ar'?article.categoryAr:article.category;
    const title = lang==='ar'?article.titleAr:article.title;
    const profileName = lang==='ar'?article.author.nameAr:article.author.name;
    const publicationDate =  lang==='ar'?article.dateAr:article.date;
    const readTime =  lang==='ar'?article.readTimeAr:article.readTime;
    const breadCrumb=document.querySelectorAll('#breadCrumb span a')

    breadCrumb[1].innerHTML=category

    imgContainer.innerHTML = `<img class="main-img" src="${article.imgSrc}" alt="${title}">`;
    artileTitle.innerHTML = `${title}`
    authorName.innerHTML = `
        <div class="d-flex align-items-center justify-content-md-center gap-4 flex-wrap">

        <div class="author-img-container">
            <img src="${article.author.imgSrc}">
        </div>
        <div class="author-name d-flex gap-4 flex-row align-items-center">
            <p class="name fw-bold m-auto">${profileName}</p>
                    <span>${publicationDate}</span>

                </div>
                <div class="category align-items-center d-flex gap-3">
                    <span class="text-danger">${category}</span>
                    <span>${readTime}</span>
                </div>
            </div>
    `
    description.innerHTML=descriptionContent;

    document.querySelector('title').innerText = title;

}

function initializePageLanguage(){
  changeToRtl('./css/details-rtl.css');
  if(localStorage.getItem('lang')==='ar'){
    //  Fixing next and back buttons
    document.querySelectorAll('.swiper-btn').forEach((btn, index) => {
      btn.classList.replace(index === 0 ? 'back-btn' : 'next-btn', index === 0 ? 'next-btn' : 'back-btn');
    });
    
  }
}
initializePageLanguage();
function openPopup(url, title) {
    const width = 600;
    const height = 400;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    window.open(url, title, `width=${width},height=${height},top=${top},left=${left}`);
}


function shareOnFacebook() {
    const articleUrl = encodeURIComponent(window.location.href); 
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
    openPopup(facebookUrl, 'Share on Facebook');

}


function shareOnTwitter() {
    const articleUrl = encodeURIComponent(window.location.href); 
    const text = encodeURIComponent("Check out this amazing article!"); 
    const twitterUrl = `https://twitter.com/intent/tweet?url=${articleUrl}&text=${text}`;
    openPopup(twitterUrl, 'Share on Twitter');
};
function copyLink(){
    const articleUrl = (window.location.href); 
    navigator.clipboard.writeText(articleUrl)
}
//video
const video = document.getElementById("myVideo");
const overlay = document.getElementById("overlay");
const playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    overlay.classList.add("hidden"); // إخفاء الـ Overlay
  }
});

video.addEventListener("click", function() {
  if (!video.paused) {
    video.pause();
    overlay.classList.remove("hidden"); // إظهار الـ Overlay
    playPauseButton.innerHTML = `<svg fill="#ffffff" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 52" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"></path> <polygon points="32,36.783 32,15.438 14.043,25.806 "></polygon> </g> </g></svg>`;
  }
});
//video


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
    
    const breadCrumb=document.querySelectorAll('#breadCrumb span a')
    breadCrumb[0].innerHTML='الرئيسيه'
    
    
    const share=document.querySelector('#share span');
    share.innerHTML='مشاركة :'
    
    const categorateTitles=document.querySelector('#categorateTitle')
    categorateTitles.innerHTML='افضل التصنيفات :';
    

    const categorates=document.querySelectorAll('#categorates div button')
      categorates.forEach((categorate,i)=>{
        categorate.innerHTML=categorateListAr[i]
      })

      const authorTitle=document.querySelector('#authorsTitle')
      const authors=document.querySelectorAll('#authors div p')
      authorTitle.innerHTML='افضل الكتاب : ';
      authors[0].innerHTML='محمد راضي';
      authors[1].innerHTML='اليكساندرو سانيه';
      authors[2].innerHTML='ساديو ماني';

      const authorsCategorate=document.querySelectorAll('#authors div span')
      authorsCategorate[0].innerHTML='اسلوب الحياة';
      authorsCategorate[1].innerHTML='نصائح و حيل';
      authorsCategorate[2].innerHTML='اسلوب الحياة';

    const explanTitle=document.querySelector('.explan h2')
    explanTitle.innerHTML='فيديو توضيحي';
    const latestTitle=document.querySelector('.latest h2')
    latestTitle.innerHTML='اخر المقالات';
    
  }


}

document.addEventListener('DOMContentLoaded', () => {
  openAndClose('dash','ul','active','.close-btn',['#searchInput'],'open');

  
  openSearchInput('searchBtn','#searchInput','open',null,['ul'],'active');
  
  document.getElementById('facebookShareButton').addEventListener('click', shareOnFacebook);
  document.getElementById('twitterShareButton').addEventListener('click', shareOnTwitter);
  document.getElementById('copyLinkBtn').addEventListener('click', copyLink);
  openAndClose('langButton','#languagesCard','active');
  
  handleLanguage('#languagesCard button');
  initializePageLanguage()
  changeToArabic(lang)

  changeToRtl()
});