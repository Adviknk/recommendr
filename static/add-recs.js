data()
data()
data()

// function checklist() {
//   const applyButton = document.getElementById("submit");
//     applyButton.addEventListener("click", () => {
//       const selectedItems = [];
//       const checkboxes = document.querySelectorAll(".form-check-input");

//       checkboxes.forEach(checkbox => {
//         if (checkbox.checked) {
//           selectedItems.push(checkbox.id);
//         }
//       });
//       if(selectedItems.length > 1) {

//       }
//       console.log("Selected Items:", selectedItems);
//       // You can perform any action with the selectedItems array here
//   });
// }
// check()
// function check() {
//   const myForm = document.getElementById("myForm");
//   const categoryCheckboxes = document.querySelectorAll(".form-check-input");
//   const submitButton = document.getElementById("submit");

//   // Event listener to check selected categories before form submission
//   myForm.addEventListener("submit", (event) => {
//     const selectedCategories = Array.from(categoryCheckboxes)
//       .filter(checkbox => checkbox.checked)
//       .map(checkbox => checkbox.id);

//     if (selectedCategories.length !== 1) {
//       event.preventDefault(); // Prevent form submission
//       alert("Please select only one category.");
//     }
//   });

//   // Event listener to update the category label when checkbox is clicked
//   categoryCheckboxes.forEach(checkbox => {
//     checkbox.addEventListener("click", () => {
//       const selectedCategories = Array.from(categoryCheckboxes)
//         .filter(checkbox => checkbox.checked)
//         .map(checkbox => checkbox.id);

//       const categoryLabel = document.getElementById("categoryLabel");
//       categoryLabel.textContent = selectedCategories[0] || "Select a category";
//     });
//   });
// }

function data() {
    var postsData = JSON.parse(document.querySelector('#information').textContent);
    console.log(postsData[0].description)

    for(let i = 0; i < postsData.length; i++) {
        dupRec(postsData[i].image, postsData[i].title, postsData[i].description, postsData[i].stars, postsData[i].category, postsData[i].address, postsData[i].url)
    }
}


// Add event listener to each star
// stars.forEach((star) => {
//   star.addEventListener("click", () => {
//     const rating = star.getAttribute("data-rating");
//     console.log(`You selected a rating of ${rating} stars.`);
//     updateStars(rating);
//   });
// });

const originalDiv = document.querySelector("#rec");
const stars = originalDiv.querySelectorAll(".star-rating .star");
updateStars(5, stars)

function updateStars(selectedRating, stars) {
  stars.forEach((star) => {
    const rating = star.getAttribute("data-rating");
    if (rating <= selectedRating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

function addHeader() {
    var col = document.querySelector("#right-col");
    var header = document.createElement("h1");
    header.textContent = "Added text"
    col.appendChild(header)
}

function dupRec(image, title, description, num_stars, category, address, link) {
    // Duplicate the div container
    var col = document.querySelector("#right-col");
    const originalDiv = document.querySelector("#rec");
    const duplicateDiv = originalDiv.cloneNode(true);
    
    // Modify the content of the duplicate div
    const duplicateImg = duplicateDiv.querySelector("img");
    duplicateImg.src = image;
    duplicateImg.alt = "Another Image";

    const addyBox = duplicateDiv.querySelector("#address");
    addy = addyBox.querySelector('p')
    addy.textContent = address

    const duplicateTitle = duplicateDiv.querySelector("#title");
    duplicateTitle.textContent = title;

    const linkBox = duplicateDiv.querySelector("#link");
    linkBox.textContent = link;
    linkBox.setAttribute('href', link);

    const button = duplicateDiv.querySelector("#cat");
    button.textContent = category;

    const duplicateDescription = duplicateDiv.querySelector("#des");
    duplicateDescription.textContent = description;

    const stars = duplicateDiv.querySelectorAll(".star-rating .star");
    updateStars(num_stars, stars)

    // Append the duplicate div to the document
    col.appendChild(duplicateDiv);
}