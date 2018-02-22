import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader($(".large-hero__content__title"));
var revealFeatureItem = new RevealOnScroll($(".feature-item"), "85%");
var revealTestimonialItem = new RevealOnScroll($(".testimonial-item"), "60%");
var modal = new Modal();



