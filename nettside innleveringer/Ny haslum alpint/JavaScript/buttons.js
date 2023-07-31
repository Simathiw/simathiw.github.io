// Get the button:
let toTop = document.getElementById(".footBtn");

const goToTop = () => {
    document.body.scrollIntoView();
}

toTop.addEventListener("click", scroll)

/* // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} */