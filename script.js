'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///!+++++=====++++Selectin + creatin + deleting element v186
// //?selctiong
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const headr = document.querySelector('.header');
// const allsection = document.querySelectorAll('.section');

// console.log(allsection);

// document.getElementById('section--1')
// const allBtn = document.getElementsByTagName('button');
// console.log(allBtn);

// console.log(document.getElementsByClassName('btn'));

//?CREATING and inserting
// .insertAdjectHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'we use cookied for improved functionality and analytics'

// message.innerHTML = 'we use cookied for improved functionality and analytics. <button class="btn btn--close--cooki ">Go it</button> ';

// // // headr.prepend(message); //to insert up
// headr.append(message); // to insert down
// // // headr.append(message.cloneNode(true)); // to insert down and up

// // // headr.before(message); //to insert up
// // // headr.after(message); //to insert down

// // ? deleting  elements
// document.querySelector('.btn--close--cooki')
// addEventListener('click',function(){
//     // message.remove();
//     message.parentElement.removeChild(message);
// })
// //?stayle, Attributes and Classes v187

// //stayle

// message.style.backgroundColor = '#37381d'
// message.style.width = '120%'

// console.log(message.style.height);//empty
// console.log(message.style.backgroundColor);//color hash

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
// Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px' ;

// document.documentElement.style.setProperty('--color-primary','orangered');

// //?Attributes
// const logo =  document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// //Non_sta
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

// logo.setAttribute('company','Bankist_web');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// const link2 = document.querySelector('.nav__link--btn');

// console.log(link2.href);
// console.log(link2.getAttribute('href'));

// //?data set

// console.log(logo.dataset.versionNumber);

// //?class

// logo.classList.add('c','j');
// logo.classList.remove('c','k');
// logo.classList.toggle('c','l');
// logo.classList.contains('c','3');

// //dont use that

// logo.className = 'jonas '

//? BTN Scrol

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //  console.log('click');
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (x/y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height / width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //!scrollTo

  // window.scrollTo(
  //     s1coords.left + window.pageXOffset ,
  //     s1coords.top+ window.pageYOffset)

  //!smoth scrol

  // window.scrollTo({
  //    left: s1coords.left + window.pageXOffset ,
  //    top:  s1coords.top+ window.pageYOffset,
  //    behavior: 'smooth'
  // })
  //! more way use

  section1.scrollIntoView({ behavior: 'smooth' });
});

//! type of event and event hendlers v 189

// const h1 = document.querySelector('h1');

//!way1
// h1.addEventListener('mouseenter', function(e){
//     alert('addEventlisener: Great! You are reading the heading :D')
// });

//!way2
// h1.onmouseenter = function(e){
//     alert('addEventlisener: Great! You are reading the heading :D')
// };
//! way 3
// const alertH1 = function(e){
//     alert('addEventlisener: Great! You are reading the heading :D')
// };

// h1.addEventListener('mouseenter',alertH1)

//! to remove

// setTimeout(()=>
// h1.removeEventListener('mouseenter',alertH1),3000)

//!colore elemnt navbar  EVENT PROPGAATION

// const randomInt = (min,max)=>
// Math.floor(Math.random()*(max-min +1 )- min) ;

// const randomColor = ()=>
// `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK',e.target);//to show target

//   //stop propgation
// // e.stopPropagation()
// });

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER',e.target);
// });

// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV',e.target);
// });

//!page navigation
//!way 1 not best way to use
// document.querySelectorAll('.nav__link').forEach(function(el){
// el.addEventListener('click', function(e){
//   // console.log('LINK');
//   e.preventDefault();
//   const id = this.getAttribute('href');
//   // console.log(id);

//   document.querySelector(id).scrollIntoView({behavior: 'smooth'});

// });
// });
//!way two is the best way  to use

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//!DOM TRAVLING
const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

//!closest
// h1.closest('.header').style.background  =
// 'var(--gradient-secondary)'
// h1.closest('h1').style.background  =
// 'var(--gradient-primary)'

//!sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nexElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform ='scale(0.5)'
// });

//!Tabbed componant

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t => t.addEventListener('click',()=>console.log('TAB')));
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  console.log(clicked);
  // clicked.classList.add('operations__tab--active');
  //?add action
  if (!clicked) return;

  //remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //ACTIVE TAB
  clicked.classList.add('operations__tab--active');

  //?Activate content area

  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//! menu Animation

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  // console.log(this,e.currentTarget);//Test
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// nav.addEventListener('mouseover',function(e){
//   handleHover(e,0.5);
// });
//! sticy navigation
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);//test
window.addEventListener('scroll', function () {
  // console.log(window.scrollY);//test

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// //! sticky navigation : Intersection Observer API
// const aosCallback = function(entries, observe){
//     entries.forEach(entry=>{
//       console.log(entry);
//     })
// }

// const options = {
//   root: null,
//   threshold:[0,0.2]

// };

// const Observer = new IntersectionObserver(aosCallback,options);
// Observer.observe(section1)

//! header observer
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);test

const stickyNav = function (entries) {
  const [entry] = entries;
  //  console.log(entry);test
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-90px'
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//!Reval section

const allsection = document.querySelectorAll('.section');

const revealSection = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allsection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//! LAZY Loading Images

const imageTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  //?replase src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  imgObserver.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 1,
  rootMargin: '200px',
});

imageTargets.forEach(img => imgObserver.observe(img));
//!SLIDER
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  let curSlide = 0;
  const maxSlider = slides.length;
  const dotContainer = document.querySelector('.dots');
  //show all img
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5) translateX(-800px)';
  // slider.style.overflow = 'visible';
  //to loop all slieds
  slides.forEach(
    (s, i) =>
      //0% 100% 200%
      (s.style.transform = `translateX(${100 * i}%)`)
  );

  //?dot create

  const creatDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  //?Active dot

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  //?goToSlide
  const goToSlide = function (slide) {
    //to loop all slieds
    slides.forEach(
      (s, i) =>
        //-100% 0% 100% 200%
        (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //? NEXT slider

  const nextSlide = function () {
    if (curSlide === maxSlider - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    //to loop all slieds
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  //? prevSlide

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlider - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  };
  // all init function
  const init = function () {
    creatDots();
    activeDot(0);
    goToSlide(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  //! next key prev key

  document.addEventListener('keydown', function (e) {
    // console.log(e); test
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};

slider();

//! lifecycle DOM Events

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });