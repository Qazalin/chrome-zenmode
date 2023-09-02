// remove the stupid shorts
const elements = Array.from(document.querySelectorAll("#dismissible"));
const filteredElements = elements.filter((element) => {
  return Array.from(element.children).some((child) =>
    child.textContent.includes("Shorts"),
  );
});
filteredElements.forEach((element) => {
  element.remove();
});

// select groups of channels i actually get value from
const whitelistChannels = [
  "History",
  "Watch later",
  "Downloads",
  "magnetic minds",
  "All was well",
];
const sidebarElements = Array.from(
  document.querySelectorAll("ytd-guide-entry-renderer"),
);
const innerTexts = sidebarElements.map((element) => element.innerText);
const shouldRemove = sidebarElements.filter((element) => {
  return !whitelistChannels.some((channel) => {
    return element.innerText.includes(channel);
  });
});
shouldRemove.forEach((element) => {
  element.remove();
});
