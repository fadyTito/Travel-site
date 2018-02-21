import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor(trigger) {
//    this.lazyImages = $('.lazyload');
    
    this.header = $('.header');
    this.headerTrigger = trigger;
    this.createHeaderWaypoint();
    this.pageSections = $('.page-section');
    this.headerLinks = $('.header__menu-content__nav a');
    this.createPageSectionsWaypoints();
    this.addSmoothScrolling();
//    this.refreshWaypoints();
  }
  
//  refreshWaypoints() {
//    this.lazyImages.load(function() {
//      Waypoint.refreshAll();
//    });
//  }
  
  addSmoothScrolling() {
      this.headerLinks.smoothScroll();
  }  
  
  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0], /*l waypoint element expect native jquery dom element but here we pass an object we 7warat 3shan kda 7tena l [0] 3shan b tosher llnative dom element gwa l object array*/
      handler: function(direction) {
        if(direction == 'down') {
          that.header.addClass('header--dark');
        } else {
          that.header.removeClass('header--dark');
        }
      }
    });
  }
  
  createPageSectionsWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction =="down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("isCurrent-link");
            $(matchingHeaderLink).addClass("isCurrent-link");
          }
        },
        offset: '25%'
      });
      
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("isCurrent-link");
            $(matchingHeaderLink).addClass("isCurrent-link");
          }
        },
        offset: '-60%'
      });
    });
  }
}

export default StickyHeader;