import $ from 'jquery';

class MobileMenu {
  constructor() {
    // Make the selection
    this.menuIcon = $(".menu-icon");
    this.menuContent = $(".menu-icon-content-div");
    this.events();
  }

  // Event handler
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  // Action
  toggleTheMenu() {
    // console.log("Hooray - the icon was clicked.");
    this.menuContent.toggleClass("is-visible");
  }
}

export default MobileMenu;