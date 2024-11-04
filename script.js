var ind1 = document.getElementById("ind1");
var ind2 = document.getElementById("ind2");
var ind3 = document.getElementById("ind3");
var ind4 = document.getElementById("ind4");
var signup = document.getElementById("signup");
var login1 = document.getElementById("btn3");

if (signup) {
    signup.addEventListener("click", function(event) {
        event.preventDefault();
        if (ind1.value.trim() !== "" && ind2.value.trim() !== "") {
            localStorage.setItem(ind1.value + "_password", ind2.value);
            alert("Successfully registered");
            ind1.value = '';
            ind2.value = '';
        } else {
            alert("Please fill in both fields.");
        }
    });
}

if (login1) {
    login1.addEventListener("click", function(event) {
        event.preventDefault();
        var key1 = localStorage.getItem(ind3.value + "_password");
        if (key1 === ind4.value) {
            localStorage.setItem("currentUser", ind3.value);
            window.open("main.html","_self")
        } else {
            alert("Not registered");
        }
    });
}

const destinations = [
    {
        name: "The Colosseum",
        category: "Historical",
        description: "A historic Roman amphitheater located in the heart of Rome.",
        image: "https://cdn.britannica.com/36/162636-050-932C5D49/Colosseum-Rome-Italy.jpg",
        reviews: 5
    },
    {
        name: "Yellowstone National Park",
        category: "Natural",
        description: "A vast national park known for its wildlife and geothermal features.",
        image: "https://cdn.britannica.com/97/122097-050-B89080F4/Morning-Glory-Pool-Upper-Geyser-Basin-Wyoming.jpg",
        reviews: 4
    },
    {
        name: "The Louvre",
        category: "Museum",
        description: "The world's largest art museum and a historic monument in Paris.",
        image: "https://cdn.britannica.com/74/250074-050-DD110B36/IM-Pei-designed-pyramid-Louvre-Paris-France.jpg",
        reviews: 5
    },
    {
        name: "Yosemite National Park",
        category: "Natural",
        description: "A beautiful national park known for its giant, ancient sequoias and iconic cliffs.",
        image: "https://www.travelandleisure.com/thmb/4gCV8cgTfnsnOQ2n3adR9dSaOI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yosemite-national-park-landscape-lead-WINTERYOSEMITE0322-513572cd8d8d429d82ffbfc996c77c84.jpg",
        reviews: 4
    },
    {
        name: "The Acropolis",
        category: "Historical",
        description: "An ancient citadel located on a rocky outcrop above the city of Athens.",
        image: "https://cdn.thecollector.com/wp-content/uploads/2023/04/acropolis-museum-guide.jpg?width=1400&quality=70",
        reviews: 5
    }
];

var output = document.getElementById("output");

function displayoutput(list) {
    const output = document.getElementById('output');
    output.innerHTML = '';
    list.forEach((destination) => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-3 mb-4 mt-5';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card h-100 shadow-sm';

        const img = document.createElement('img');
        img.src = destination.image;
        img.className = 'card-img-top';
        img.alt = destination.name;

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'card-body d-flex flex-column';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = destination.name;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = destination.description;

        const reviewsParagraph = document.createElement('p');
        reviewsParagraph.innerHTML = `<strong>Reviews:</strong> ${destination.reviews} Stars`;

        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        cardBodyDiv.appendChild(reviewsParagraph);

        const footerDiv = document.createElement('div');
        footerDiv.className = 'card-footer bg-transparent border-top-0';
        const button = document.createElement('a');
        button.href = '#';
        button.className = 'btn btn-primary w-100';
        button.textContent = 'View Details';
        footerDiv.appendChild(button);

        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
        cardDiv.appendChild(footerDiv);
        colDiv.appendChild(cardDiv);
        output.appendChild(colDiv);
    });
}

displayoutput(destinations);

function searchoutput() {
    var searchbar = document.getElementById("searchbar").value.toLowerCase();
    var out1 = destinations.filter((destination) => {
        return destination.name.toLowerCase().includes(searchbar);
    });
    displayoutput(out1);
}

document.getElementById("searchbar").addEventListener("input", searchoutput);

var names = document.getElementById("name");
var email = document.getElementById("email");
var package = document.getElementById("package");
var date = document.getElementById("date");
var book = document.getElementById("book");
var tripdetails = document.getElementById("tripdetails");
var tripdetails1 = document.getElementById("tripdetailsoutput");

tripdetails.addEventListener("click", (event) => {
    event.preventDefault();
    var currentUser = localStorage.getItem("currentUser");
    // Retrieve user-specific details
    var namev = localStorage.getItem(currentUser + "_name");
    var emailv = localStorage.getItem(currentUser + "_email");
    var packagev = localStorage.getItem(currentUser + "_package");
    var datev = localStorage.getItem(currentUser + "_date");

    if (tripdetails1.style.display === "none" || tripdetails1.style.display === "") {
        tripdetails1.style.display = "block";
        tripdetails1.innerHTML = `
            <p><strong>Name:</strong> ${namev ? namev : "Not available"}</p>
            <p><strong>Email:</strong> ${emailv ? emailv : "Not available"}</p>
            <p><strong>Package:</strong> ${packagev ? packagev : "Not available"}</p>
            <p><strong>Date:</strong> ${datev ? datev : "Not available"}</p>
        `;
    } else {
        tripdetails1.style.display = "none";
    }
});

book.addEventListener("click", (event) => {
    event.preventDefault();
    if (names.value && email.value && package.value && date.value) {
        var currentUser = localStorage.getItem("currentUser");
        // Store booking details with the current user's unique identifier
        localStorage.setItem(currentUser + "_name", names.value);
        localStorage.setItem(currentUser + "_email", email.value);
        localStorage.setItem(currentUser + "_package", package.value);
        localStorage.setItem(currentUser + "_date", date.value);

        alert("Booking details saved successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});
// logout
var logout=document.getElementById("logoutBtn")
logout.addEventListener("click",()=>{
    window.location.href="index.html"
})