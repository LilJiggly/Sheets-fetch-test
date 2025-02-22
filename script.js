async function fetchData() {
  const sheetURL =
    "https://script.google.com/macros/s/AKfycbz5sJ9VLAsLNnEXST32f_AgWe0qkVXO4I6UbrxS2OzWjnRdHtcSxwCVuxlE5miews9e/exec";
  // ; // Replace with your Google Apps Script URL
  try {
    const response = await fetch(sheetURL);
    const data = await response.json();

    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = ""; // Clear existing content

    data.forEach((item) => {
      let h2 = document.createElement("h2");
      h2.textContent = item.h2;

      let p = document.createElement("p");
      p.textContent = item.p;

      contentContainer.appendChild(h2);
      contentContainer.appendChild(p);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

window.onload = fetchData;
