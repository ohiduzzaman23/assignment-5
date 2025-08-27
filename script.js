function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// Copy Button
const copyButtons = document.getElementsByClassName("copy-button");
for (let copyButton of copyButtons) {
  copyButton.addEventListener("click", function () {
    // Service Title
    const serviceTitle = copyButton.parentNode.parentNode.children[1].innerText;
    // Service Number
    const serviceNumber =
      copyButton.parentNode.parentNode.children[3].innerText;
  });
}

// Call Button
const callButtons = document.getElementsByClassName("call-button");
for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
    // Service Title
    const serviceTitle = callButton.parentNode.parentNode.children[1].innerText;
    // Service Number
    const serviceNumber =
      callButton.parentNode.parentNode.children[3].innerText;

    // Local Time
    const data = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    //   Added Card Container
    const cardContainer = getElement("card-container");

    const newCard = document.createElement("div");
    newCard.innerHTML = `<div class="history bg-[#FAFAFA] m-3 p-4 flex justify-between items-center">
              <div class="history-content">
                <h1>${serviceTitle}</h1>
                <p>${serviceNumber}</p>
              </div>
              <div id="time" class="">${data}</div>
            </div>`;

    cardContainer.append(newCard);
  });
}

document.getElementById("clear-button").addEventListener("click", function () {
  getElement("card-container").innerText = "";
});
