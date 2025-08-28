function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// Heart Button
const heartButtons = document.getElementsByClassName("heart-button");
for (let heartButton of heartButtons) {
  heartButton.addEventListener("click", function () {
    const heart = getElement("total-heart").innerText;
    const totalHeart = Number(heart) + 1;
    getElement("total-heart").innerText = totalHeart;
  });
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
    // Number copy function
    navigator.clipboard.writeText(serviceNumber).then(() => {
      alert(serviceTitle + " নম্বর কপি হয়েছে: " + serviceNumber);
    });

    const copyHistory = getElement("total-copy").innerText;
    const totalCopy = Number(copyHistory) + 1;
    getElement("total-copy").innerText = totalCopy;
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

    const availableCoin = getElement("total-coin").innerText;

    // Call Alert Function
    if (availableCoin <= 0) {
      alert("আপনার পর্যপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    } else {
      alert("Calling " + serviceTitle + " " + serviceNumber + "...");
    }
    const totalCoin = availableCoin - 20;
    getElement("total-coin").innerText = totalCoin;

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
    newCard.innerHTML = `<div class="history bg-[#FAFAFA] m-3 p-4 flex justify-between items-center rounded-[8px]">
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
