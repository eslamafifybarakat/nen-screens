import {handleLanguage}from "./handleLanguage.js"
import{openAndClose}from './openAndClose.js'
import { scrollToTop } from "./scrollToTop.js";

import { changeToRtl } from "./changeToRtl.js";
import { openSearchInput } from "./openAndClose.js";

const lang=localStorage.getItem('lang');
let categorateListAr = ['أسلوب الحياة', 'وجهة', 'نصائح وحيل', 'الطهي'];
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
//Function to get Id

function getArticleIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}


//Get Articles
let allArticles;
let article;

fetch('./json/articles.json').then(Response => Response.json()).then(articles => {
  allArticles=articles;
    article = articles.find(article => article.id == getArticleIdFromUrl());
    console.log(article)
    putText();
  displayLatestArticles()

console.log(allArticles)


})
//Put Content of Article
function putText() {
    const imgContainer = document.getElementById('imgContainer');
    const artileTitle = document.querySelector('#articleTitle h1');
    const authorName = document.querySelector('#authorContent');
    const description = document.getElementById('description');

    const title = lang==='ar'?article.titleAr:article.title;
    const profileName = lang==='ar'?article.author.nameAr:article.author.name;
    const publicationDate =  lang==='ar'?article.dateAr:article.date;
    const readTime =  lang==='ar'?article.readTimeAr:article.readTime;


    imgContainer.innerHTML = `<img class="main-img" src="${article.imgSrc}" alt="${title}">`;
    artileTitle.innerHTML = `${title}`
    authorName.innerHTML = `
        <div class="d-flex align-items-center gap-4 flex-wrap">
        <div class="d-flex gap-2">
        <div class="author-img-container">
            <img src="${article.author.imgSrc}">
        </div>
        <p class="name fw-bold m-auto">${profileName}</p>
        </div>
        <div class="author-name d-flex gap-3 flex-row align-items-center">
                    <span class="d-flex gap-2 align-items-center">
                    <svg  class="no-rotate" fill="#000000" width="16" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,0C114.84,0,0,114.84,0,256s114.84,256,256,256s256-114.84,256-256S397.16,0,256,0z M423.127,396.636l-30.258-30.258 l-26.49,26.49l30.258,30.258c-33.551,28.279-75.697,46.657-121.905,50.598v-42.896h-37.463v42.896 c-46.207-3.941-88.354-22.319-121.905-50.598l30.258-30.258l-26.49-26.49l-30.258,30.258 c-28.279-33.551-46.657-75.697-50.598-121.905h42.896v-37.463H38.275c3.941-46.207,22.319-88.354,50.598-121.905l30.258,30.258 l26.49-26.49l-30.258-30.258c33.551-28.279,75.697-46.657,121.905-50.598v42.896h37.463V38.275 c46.207,3.941,88.354,22.319,121.905,50.598l-30.258,30.258l26.49,26.49l30.258-30.258 c28.279,33.551,46.657,75.697,50.598,121.905h-42.896v37.463h42.896C469.784,320.939,451.405,363.085,423.127,396.636z"></path> </g> </g> <g> <g> <polygon points="274.732,237.268 274.732,118.634 237.268,118.634 237.268,274.732 355.902,274.732 355.902,237.268 "></polygon> </g> </g> </g></svg>
                    ${publicationDate}</span>
                <div class="category align-items-center d-flex gap-3">
                    <span class="d-flex gap-2 align-items-center">
                    <svg class="no-rotate" fill="#000000" width="16" viewBox="0 0 35 35" data-name="Layer 2" id="a866a81f-2948-4418-8bd5-1a5193c5f74e" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M29.545,34.75H5.455a5.211,5.211,0,0,1-5.2-5.2V8.56a5.21,5.21,0,0,1,5.205-5.2h24.09a5.21,5.21,0,0,1,5.2,5.205V29.545A5.211,5.211,0,0,1,29.545,34.75ZM5.455,5.855A2.708,2.708,0,0,0,2.75,8.56V29.545a2.709,2.709,0,0,0,2.705,2.7h24.09a2.708,2.708,0,0,0,2.7-2.7V8.56a2.707,2.707,0,0,0-2.7-2.7Z"></path><path d="M33.5,17.331H1.541a1.25,1.25,0,0,1,0-2.5H33.5a1.25,1.25,0,0,1,0,2.5Z"></path><path d="M9.459,9.155a1.249,1.249,0,0,1-1.25-1.25V1.5a1.25,1.25,0,0,1,2.5,0V7.905A1.25,1.25,0,0,1,9.459,9.155Z"></path><path d="M25.542,9.155a1.249,1.249,0,0,1-1.25-1.25V1.5a1.25,1.25,0,0,1,2.5,0V7.905A1.25,1.25,0,0,1,25.542,9.155Z"></path></g></svg>
                    ${readTime}</span>
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

// Popup Share
function openPopup(url, title) {
    const width = 600;
    const height = 400;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    window.open(url, title, `width=${width},height=${height},top=${top},left=${left}`);
}

function openAndCloseSharePopup(){
  document.querySelector('#share').addEventListener('click',()=> document.querySelector('#sharePopup').classList.add('active'))
  document.querySelector('#closePopup').addEventListener('click',()=> document.querySelector('#sharePopup').classList.remove('active'))
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
function shareOnInstagram() {
document.getElementById("instagramShareButton").addEventListener("click", function () {
  const url = window.location.href; // الرابط الحالي
  const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
  openPopup(instagramShareUrl, 'Share on instagram');
});
}
function shareOnLinkedin() {
document.getElementById("linkedinShareButton").addEventListener("click", function () {
  const url = window.location.href;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  openPopup(linkedinShareUrl, 'Share on linkedin');
});
}
function shareOnWhats() {
document.getElementById("whatsappShareButton").addEventListener("click", function () {
  const url = window.location.href;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
  openPopup(whatsappShareUrl, 'Share on Whatsapp');
});
}
function copyLink(){
    const articleUrl = (window.location.href); 
    navigator.clipboard.writeText(articleUrl)
}
document.getElementById('link').innerHTML=window.location.href;
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
    breadCrumb[0].innerHTML='الرئيسية'
    breadCrumb[1].innerHTML='المدونات'
    
    
    const share=document.querySelector('#share span');
    share.innerHTML='مشاركة '
    
    const shareTitleInPopup=document.getElementById('shareTitle')
    shareTitleInPopup.innerHTML='مشاركة'

    const pageLink=document.getElementById('pageLink')
    pageLink.innerHTML='رابط الصفحة'
    const categorateTitles=document.querySelector('#categorateTitle')
    categorateTitles.innerHTML='افضل التصنيفات :';
    

    const categorates=document.querySelectorAll('#categorates div button span')
      categorates.forEach((categorate,i)=>{
        categorate.innerHTML=categorateListAr[i]
      })

    const explanTitle=document.querySelector('.explan h2')
    explanTitle.innerHTML='فيديو توضيحي';
    const latestTitle=document.querySelector('.latest h2')
    latestTitle.innerHTML='آخر المقالات';
    
  }


}

function displayLatestArticles(){
  let ArticlesDiv=document.getElementById('latestArticles');
  ArticlesDiv.innerHTML=`
          <a href="article details.html?id=${allArticles[0].id}" class="text-black text-decoration-none  p-1 col-lg-6 col-md-12">
            <div class="article">
            <div class="img-contaienr">
                    <img src="${allArticles[0].imgSrc ||'./images/default.jpg'}" alt="image">
            </div>
                    <div class="content">
                        <div class="title text-truncate">
                            ${allArticles[0].title}
                        </div>
                        <svg width='30' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                    fill="#ffffff"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                </a>
              <a href="article details.html?id=${allArticles[1].id}" class="text-black text-decoration-none  p-1 col-lg-3 col-md-6">
                <div class="article">
                <div class="img-contaienr">

                    <img src="${allArticles[1].imgSrc ||'./images/default.jpg'}" alt="image">
                    </div>
                    <div class="content">

                        <div class="title text-truncate">
                            ${allArticles[1].title}

                        </div>
                        <svg width='30' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                    fill="#ffffff"></path>
                            </g>
                        </svg>
                    </div>
                    
                    </div>
                </a>
                <a href="article details.html?id=${allArticles[2].id}" class="text-black text-decoration-none  p-1 col-lg-3 col-md-6">
                <div class="article">
                <div class="img-contaienr">
                    <img src="${allArticles[2].imgSrc ||'./images/default.jpg'}" alt="image">
                    </div>
                    <div class="content">

                        <div class="title text-truncate">
                           ${allArticles[2].title}
                        </div>
                        <svg width='30' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                                    fill="#ffffff"></path>
                            </g>
                        </svg>
                    </div>
                </div>
                </a>`
}
document.addEventListener('DOMContentLoaded', () => {
  openAndClose('dash','ul','active','.close-btn',['#searchInput'],'open');

  
  openSearchInput('searchBtn','#searchInput','open',null,['ul'],'active');
  
  openAndCloseSharePopup()
  document.getElementById('facebookShareButton').addEventListener('click', shareOnFacebook);
  document.getElementById('twitterShareButton').addEventListener('click', shareOnTwitter);
  document.getElementById('copyLinkBtn').addEventListener('click', copyLink);

  shareOnInstagram()
  shareOnLinkedin()
  shareOnWhats()
  
  openAndClose(['langButton','langFlag','langImg'],'#languagesCard','active');
  
  handleLanguage('#languagesCard button');
  initializePageLanguage()
  scrollToTop('toTop','opacity-1','opacity-0')

  changeToArabic(lang)
  changeToRtl()
});