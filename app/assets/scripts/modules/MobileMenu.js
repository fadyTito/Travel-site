import $ from 'jquery';


class MobileMenu {
  constructor() {
    this.header = $('.header');
    this.menuIcon = $('.header__menu-icon');
    this.menuContent = $('.header__menu-content');
    this.events();
    
  }
  
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this)); 
  }
  
  toggleTheMenu() {
    this.menuContent.toggleClass('header__menu-content--isVisible');
    this.header.toggleClass('header--isExpanded');
    this.menuIcon.toggleClass('header__menu-icon--close-x');
  }
}

export default MobileMenu;