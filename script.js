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
  { title: "Item 1", category: "website", image: "image1.jpg" },
  { title: "Item 2", category: "app-design", image: "image2.jpg" },
  { title: "Item 3", category: "website" },
  { title: "Item 4", category: "website" },
  { title: "Item 5", category: "app-design" },
  { title: "Item 6", category: "app-design" },
  // Add more items here
];

items.forEach(item => {
  const card = `
  <div class="card">
    <img class="card-img-top" src="${item.image}" alt="Card image">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">${item.category}</p>
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


//todos
const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  // Load tasks from Local Storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = '';
  
    for (let index = 0; index < tasks.length; index++) {
      const task = tasks[index];
  
      const li = document.createElement('li');
      li.classList.add('list-group-item');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => toggleTaskCompletion(index));
  
      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon'); // Add classes for the trash icon
      deleteIcon.addEventListener('click', () => deleteTask(index));
  
      li.textContent = task.description;
      li.prepend(checkbox);
      li.appendChild(deleteIcon);
  
      li.classList.toggle('completed', task.completed);
  
      taskList.appendChild(li);
    }
    updateLocalStorage();
  }
  

  function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
  }

  //delete task
  function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
  }

  //add task
    addTaskButton.addEventListener('click', () => {
      const description = taskInput.value.trim();
      if (description !== '') {
        tasks.push({ description, completed: false });
        taskInput.value = '';
        renderTasks();
      }
    });

    renderTasks();

  

  //for the message section that was part of the contact us page
  const messageForm = document.getElementById("message-form");

        messageForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contactNumber = document.getElementById("contact-number").value;
            const message = document.getElementById("message").value;

            const messageData = {
                name: name,
                email: email,
                contactNumber: contactNumber,
                message: message
            };

            // Store the message data in local storage
            localStorage.setItem("contactMessage", JSON.stringify(messageData));

            // Optionally, you can provide feedback to the user that the message has been sent or saved.

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








