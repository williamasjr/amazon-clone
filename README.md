# Amazon main page challenge!

This project is a challenge for a job opening. It allows users to enter a keyword on a web page, press a button, and get product information from Amazon. The server searches Amazon and sends the results to the web page, which displays them in an organized and stylized way. This way, users can see Amazon product information based on a search keyword.

The backend is the part of the project that operates on the server.
It uses the Node.js language to create a server.
Configures an endpoint (URL) called /api that receives search requests.
When someone makes a request to /api?keyword=someWord, the server searches Amazon for that keyword.
Front-end (HTML, CSS, JavaScript):

The front-end is the user-visible part of a browser.
It includes a web page with a text field to enter a keyword and a button to start the search.
When the button is clicked, a JavaScript script makes a request to the server to fetch information from Amazon.
The search result is displayed on the web page.

CORS is a security mechanism in the browser that controls requests between different domains.
To allow the frontend to access the backend (across different domains), we configure the server to allow requests from specific origins.

# To run the project

1. Clone the repository

- `https://github.com/williamasjr/amazon-clone.git`.

2. Install dependencies and initialize the project

- Install dependencies:
  - `npm install`
- Initialize the project:
  - `npm run dev`

This will start the Node.js server on port 3000.

4. Run the Front-end

Open the HTML file (index.html) in a web browser.

You will see the web page with a keyword input field and a button.

Enter a search keyword in the input box and click the "Search" button.

The search results will be displayed on the page in an organized and stylized format.
