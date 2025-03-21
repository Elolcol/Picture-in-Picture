function addPiPButton() {
  const videoContainer = document.querySelector(".ytp-right-controls");

  if (videoContainer) {
    const pipButton = document.createElement("button");

    pipButton.className = "ytp-button";
    pipButton.innerHTML = `data-priority="7" data-tooltip-target-id="ytp-pip-button"`;
    pipButton.ariaLabel = "Picture-in-Picture";
    pipButton.title = "Picture-in-Picture";

    const updateButtonIcon = () => {
      const isPiPActive = !!document.pictureInPictureElement;

      pipButton.innerHTML = isPiPActive
        ? `
          <svg width="100%" height="100%" viewBox="-6 -6 36 36" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-101"></use>
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-102"></use>
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-103"></use>
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-104"></use>
            <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" id="ytp-id-101"/>
            <path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z" id="ytp-id-102"/>
            <path d="M7 9l4 4" id="ytp-id-103"/>
            <path d="M7 12v-3h3" id="ytp-id-104"/>
          </svg>
        `
        : `
          <svg width="100%" height="100%" viewBox="-6 -6 36 36" fill="currentColor">
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-99"></use>
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-100"></use>
            <path d="M11 4a1 1 0 0 1 0 2h-6a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-4a1 1 0 0 1 2 0v4a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3z" id="ytp-id-99"/>
            <path d="M20 4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2z" id="ytp-id-100"/>
          </svg>
        `;
    };

    updateButtonIcon();

    pipButton.addEventListener("click", () => {
      const video = document.querySelector("video");

      if (video && typeof video.requestPictureInPicture === "function") {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        } else {
          video.requestPictureInPicture();
        }
      } else {
        alert("Your browser don't support Picture-in-Picture.");
      }
    });

    document.addEventListener("enterpictureinpicture", updateButtonIcon);
    document.addEventListener("leavepictureinpicture", updateButtonIcon);

    videoContainer.prepend(pipButton);
  }
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  addPiPButton();
} else {
  document.addEventListener("DOMContentLoaded", addPiPButton);
}
