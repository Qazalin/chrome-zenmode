const cssDir = "src/css";
const jsDir = "src/js";
// Mapping apps to css files that disable specific parts of the app
const fileAppMap = {
  "https://mail.google.com": {
    css: "gmail.css",
  },
  "https://docs.google.com": {
    css: "docs.css",
  },
  "https://discord.com/channels": {
    css: "discord.css",
  },
  "https://www.notion.so": {
    css: "notion.css",
  },
  "https://app.slack.com/": {
    css: "slack.css",
  },
  "https://open.spotify.com/": {
    css: "spotify.css",
  },
  "https://developer.chrome.com/docs/extensions": {
    css: "chrome.css",
  },
  "https://www.youtube.com": {
    css: "youtube.css",
    js: "youtube.js",
  },
  "https://github.com/": {
    css: "github.css",
    js: "github.js",
  },
  "https://chat.openai.com/": {
    js: "chatgpt.js",
  },
};

chrome.action.onClicked.addListener(async (tab) => {
  const supported_app = Object.keys(fileAppMap).find((app) =>
    tab.url.startsWith(app),
  );
  if (supported_app == null) {
    console.log(`App not supported: ${tab.url}`);
    return;
  }

  const files = fileAppMap[supported_app];

  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  const active = prevState === "ON" ? false : true;
  // cutting edge state mngnt
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: active ? "ON" : "OFF",
  });

  if (!active) {
    if (files.css != null) {
      await chrome.scripting.removeCSS({
        files: [`${cssDir}/${files.css}`],
        target: { tabId: tab.id },
      });
    }
    if (files.js != null) {
      // hack to revert the js
      await chrome.tabs.reload(tab.id);
    }
    return;
  }

  if (files.js != null) {
    console.log(`Injecting ${files.js} into ${tab.url}`);
    await chrome.scripting.executeScript({
      files: [`${jsDir}/${files.js}`],
      target: { tabId: tab.id },
    });
  }
  if (files.css != null) {
    await chrome.scripting.insertCSS({
      files: [`${cssDir}/${files.css}`],
      target: { tabId: tab.id },
    });
  }
});
