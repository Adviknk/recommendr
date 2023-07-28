data()
data()
data()

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