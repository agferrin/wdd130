// get "Take me there" button
takeButton = document.getElementById("takeMeButton");
takeButton.onclick = () => {
  // secondArea.scrollIntoView(true);
  const top = document.getElementById("second-area").offsetTop;
  document.documentElement.scrollTo(0, top);
}

