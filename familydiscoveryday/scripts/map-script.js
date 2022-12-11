// get header
header = document.getElementById("header");

// get header title to change header opacity
headerTitle = document.getElementById("headerTitle");
headerTitle.addEventListener("mouseover", () => {
  header.style.opacity = '1';
})

//  get main to change header opacity
main = document.getElementById("map-main");
main.addEventListener("mouseover", () => {
  header.style.opacity = '1';
})

// get map container
mapContainer = document.getElementById("map-section");

// get map image
mapImage = document.getElementById("mapImage");

// chapel hover
chapelSection = document
  .getElementById("chapel-section");

chapelSection.onmouseenter = () => {
  mapContainer.style.backgroundColor = "#001020";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/map/chapel.jpg";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
};

chapelSection.onmouseleave = () => {
  mapContainer.style.backgroundColor = "white";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/ChapelBluePrint.png";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
}

// overflow hover
overflowSection = document
  .getElementById("overflow-section");

overflowSection.onmouseenter = () => {
  mapContainer.style.backgroundColor = "#001020";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/map/overflow.jpg";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
};

overflowSection.onmouseleave = () => {
  mapContainer.style.backgroundColor = "white";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/ChapelBluePrint.png";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
}

// cultural center hover
culturalSection = document
  .getElementById("cultural-center-section");

culturalSection.onmouseenter = () => {
  mapContainer.style.backgroundColor = "#001020";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/map/cultural.jpg";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
};

culturalSection.onmouseleave = () => {
  mapContainer.style.backgroundColor = "white";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/ChapelBluePrint.png";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
}

// extra rooms hover
extraSection = document
  .getElementById("extra-rooms-section");

extraSection.onmouseenter = () => {
  mapContainer.style.backgroundColor = "#001020";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/map/extra.jpg";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
};

extraSection.onmouseleave = () => {
  mapContainer.style.backgroundColor = "white";
  mapImage.classList.remove("visible");
  mapImage.classList.add("transparent");
  setTimeout(() => {
    mapImage.src = "images/ChapelBluePrint.png";
    mapImage.classList.remove("transparent");
    mapImage.classList.add("visible");
  }, 200);
}