document.addEventListener("DOMContentLoaded", function() {
    var popup = document.querySelector(".popup-container");
    var closeBtn = document.querySelector(".close-btn");
  
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    setTimeout(function() {
      popup.style.display = "flex";
    }, 3000);
  }
);
  