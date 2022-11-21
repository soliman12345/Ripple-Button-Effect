const btnEl = document.querySelector(".btn");
//here we will store the values of X and Y diagonals 
btnEl.addEventListener("mouseover", (e) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
