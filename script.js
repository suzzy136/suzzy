const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "I'm a Freelancer";
  }, 0);
  setTimeout(() => {
    text.textContent = "I'm a Developer";
  }, 5000);
  setTimeout(() => {
    text.textContent = "I'm a YouTuber";
  }, 10000);
};

textLoad();
setInterval(textLoad, 15000); // Adjusted interval to 15s for smooth looping
