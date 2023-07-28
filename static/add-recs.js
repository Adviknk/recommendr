
dupRec("/image.jpeg", "This is another title", "This is the description");

dupRec("/image.jpeg", "This is another title", "This is the description");

dupRec("/image.jpeg", "This is another title", "This is the description");

dupRec("/image.jpeg", "This is another title", "This is the description");

dupRec("/image.jpeg", "This is another title", "This is the description");

dupRec("/image.jpeg", "This is another title", "This is the description");


function addHeader() {
    var col = document.querySelector("#right-col");
    var header = document.createElement("h1");
    header.textContent = "Added text"
    col.appendChild(header)
}

function dupRec(image, title, description) {
    // Duplicate the div container
    var col = document.querySelector("#right-col");
    const originalDiv = document.querySelector("#rec");
    const duplicateDiv = originalDiv.cloneNode(true);
    
    // Modify the content of the duplicate div
    const duplicateImg = duplicateDiv.querySelector("img");
    duplicateImg.src = image;
    duplicateImg.alt = "Another Image";

    const duplicateTitle = duplicateDiv.querySelector("h2");
    duplicateTitle.textContent = title;

    const duplicateDescription = duplicateDiv.querySelector("p");
    duplicateDescription.textContent = description;

    // Append the duplicate div to the document
    col.appendChild(duplicateDiv);
}