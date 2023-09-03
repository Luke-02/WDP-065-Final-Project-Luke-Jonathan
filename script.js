//portfolio tabs
// JavaScript to handle tab switching
$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".tab-pane").removeClass("show active");
    $($(this).attr("href")).addClass("show active");
  });
});

// JavaScript to dynamically populate items
const items = [
  { title: "Job Filtering Webpage", category: "website", image: "images/portfolio/job-filtering-webpage.png" },
  { title: "Login & signup app", category: "app-design", image: "images/portfolio/simple login signup page .png" },
  { title: "Login Webpage", category: "website", image: "images/portfolio/tailwind design login screen.png" },
  { title: "Login & signup app", category: "website", image: "images/portfolio/simple login signup page .png" },
  { title: "Login & signup app", category: "app-design", image: "images/portfolio/simple login signup page .png" },
  { title: "Login & signup app", category: "app-design", image: "images/portfolio/simple login signup page .png" },
  // Add more items here
];

items.forEach(item => {
  const card = `
  <div class="portfolio-card">
    <img class="portfolio-card-img-top" src="${item.image}" alt="Card image">
    <div class="portfolio-card-body">
      <h5 class="portfolio-card-title">${item.title}</h5>
      <!--p class="portfolio-card-text">${item.category}</p-->
    </div>
  </div>
  `;

  const allItems = document.getElementById("all-items");
  allItems.innerHTML += card;

  const category1Items = document.getElementById("website-items");
  if (item.category === "website") {
    category1Items.innerHTML += card;
  }

  const category2Items = document.getElementById("app-design-items");
  if (item.category === "app-design") {
    category2Items.innerHTML += card;
  }
});



// Select the message form by its ID
const messageForm = document.getElementById("message-form");

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from input fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Create an object to store the message data
    const messageData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Store the message data in local storage
    localStorage.setItem("contactMessage", JSON.stringify(messageData));

    // Optionally, provide feedback to the user that the message has been sent or saved.

    // Reset the form
    messageForm.reset();
});



//blog
//search
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});

//masonry grid
// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});









