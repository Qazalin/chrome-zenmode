const cssDir = "src/css";
// Mapping apps to css files that disable specific parts of the app
const fileAppMap = {
  "https://mail.google.com": "gmail.css",
  "https://docs.google.com": "docs.css",
  "https://discord.com/channels": "discord.css",
  "https://www.notion.so": "notion.css",
  "https://app.slack.com/": "slack.css",
  "https://open.spotify.com/": "spotify.css",
  "https://developer.chrome.com/docs/extensions": "chrome.css",
  "https://www.youtube.com": "youtube.css",
};

chrome.action.onClicked.addListener(async (tab) => {
  const supported_app = Object.keys(fileAppMap).find((app) =>
    tab.url.startsWith(app),
  );
  if (supported_app == null) {
    console.log(`App not supported: ${tab.url}`);
    return;
  }
  const cssFile = `${cssDir}/${fileAppMap[supported_app]}`;

  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  const active = prevState === "ON" ? false : true;
  // cutting edge state mngnt
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: active ? "ON" : "OFF",
  });

  if (!active) {
    await chrome.scripting.removeCSS({
      files: [cssFile],
      target: { tabId: tab.id },
    });
    return;
  }
  await chrome.scripting.insertCSS({
    files: [cssFile],
    target: { tabId: tab.id },
  });
});
