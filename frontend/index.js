document.getElementById("scrapeButton").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "Searching...";

  // fetch api endpoint

  try {
    const response = await fetch(
      `http://localhost:3000/api?keyword=${encodeURIComponent(keyword)}`
    );

    // convert to json
    const data = await response.json();

    // if exists result and is biggest than 0, return for each product an html element
    if (data.products && data.products.length > 0) {
      resultsContainer.innerHTML = "";
      data.products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
                    <p><strong>title:</strong> ${product.title}</p>
                    <p><strong>rating:</strong> ${product.rating}</p>
                    <p><strong>reviewCount:</strong> ${product.reviewCount}</p>
                    <img src="${product.imageUrl}" alt="product image">
                    <hr>
                `;
        resultsContainer.appendChild(productElement);
      });
    } else {
      resultsContainer.innerHTML = "Result not found.";
    }
  } catch (error) {
    resultsContainer.innerHTML = "Server offline.";
  }
});
