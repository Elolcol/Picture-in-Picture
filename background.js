chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: togglePictureInPicture,
  });
});

function togglePictureInPicture() {
  const video = document.querySelector("video");

  if (video && typeof video.requestPictureInPicture === "function") {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      video.requestPictureInPicture();
    }
  }
}
