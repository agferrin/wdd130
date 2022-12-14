// get header
header = document.getElementById("header");

// get header title to change header opacity
headerTitle = document.getElementById("headerTitle");
headerTitle.addEventListener("mouseover", () => {
  header.style.opacity = "1";
});

//  get main to change header opacity
main = document.getElementById("contactus-main");
main.addEventListener("mouseover", () => {
  header.style.opacity = "1";
});
