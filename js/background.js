const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");
bgImage.src = `img/${chosenImage}`;
document.body.prepend(bgImage);