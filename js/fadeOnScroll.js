document.addEventListener("DOMContentLoaded", function() {
    const fadingDiv = document.querySelector(".arrow");
    const content = document.querySelector("body");
    const contentHeight = content.clientHeight;
    const windowHeight = window.innerHeight;
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const maxOpacityScroll = contentHeight - windowHeight;
      
      if (scrollPosition < maxOpacityScroll) {
        const opacity = 1 - (scrollPosition / maxOpacityScroll);
        fadingDiv.style.opacity = opacity;
      } else {
        fadingDiv.style.opacity = 0;
      }
    });
  });