chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const url = new URL(tab.url);
    if (url.hostname.endsWith(".io")) {
      chrome.tabs.update(tabId, { url: "https://google.com" });
    }
  }
});
