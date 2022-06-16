"use strict"

const navIcon = document.querySelector('.nav_icon');

const nav = document.querySelector('nav');

const header = document.querySelector('header')



const clickIconClicked = () => {

  nav.classList.remove('active')

  const iconClicked = document.querySelector('.nav_icon.clicked')
  iconClicked.removeEventListener('click', clickIconClicked)


  iconClicked.classList.remove('clicked')

  iconClicked.addEventListener('click', clickIcon)

}

const clickIcon = () => {

  nav.classList.add('active');
  navIcon.classList.add('clicked')
  const iconClicked = document.querySelector('.nav_icon.clicked')

  if (iconClicked) {


    iconClicked.addEventListener('click', clickIconClicked)


  }
}


navIcon.addEventListener('click', clickIcon)















