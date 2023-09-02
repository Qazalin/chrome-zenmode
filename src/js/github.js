// if you're not in https://github.com/pulls wtf
if (window.location.pathname !== "/pulls") {
  window.location.href = "https://github.com/pulls";
}
const divs = Array.from(document.querySelectorAll("div"));

divs.forEach((div) => {
  if (div.textContent.includes("ProTip") && div.classList.contains("color-fg-muted")) {
    div.remove();
  }
});
