if (window.location.href === "https://www.youtube.com/") {
  document.querySelector("#primary").remove();

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
  const shouldRemove = sidebarElements.filter((element) => {
    return !whitelistChannels.some((channel) => {
      return element.innerText.includes(channel);
    });
  });
  shouldRemove.forEach((element) => {
    element.remove();
  });
}

if (window.location.href.startsWith("https://www.youtube.com/watch?v=")) {
  // remove anything in the side
  document.querySelector("#secondary").remove();
  document.querySelector("#below").remove();
}
