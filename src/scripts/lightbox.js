// src/scripts/lightbox.js

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

// Wait for the entire HTML content to load before initializing PhotoSwipe
document.addEventListener('DOMContentLoaded', () => {
  console.log('PhotoSwipe script is running.'); // Check console for this message!

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',
    pswpModule: () => import('photoswipe')
  });

  lightbox.init();
});