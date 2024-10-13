
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
                localStorage.setItem("ind1", ind1.value);
                localStorage.setItem("ind2", ind2.value);
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
            var key1 = localStorage.getItem("ind1");
            var key2 = localStorage.getItem("ind2");
            if (key1 === ind3.value && key2 === ind4.value) {
                window.location.href = "main.html";
            } else {
                alert("Not registered");
            }

        });
    }


console.log(ind1,ind2,ind3,ind4)
const destinations = [
    {
        name: "The Colosseum",
        category: "Historical",
        description: "A historic Roman amphitheater located in the heart of Rome.",
        image: "https://via.placeholder.com/300x200.png?text=Colosseum",
        reviews: 5
    },
    {
        name: "Yellowstone National Park",
        category: "Natural",
        description: "A vast national park known for its wildlife and geothermal features.",
        image: "https://via.placeholder.com/300x200.png?text=Yellowstone",
        reviews: 4
    },
    {
        name: "The Louvre",
        category: "Museum",
        description: "The world's largest art museum and a historic monument in Paris.",
        image: "https://via.placeholder.com/300x200.png?text=Louvre",
        reviews: 5
    },
    {
        name: "Yosemite National Park",
        category: "Natural",
        description: "A beautiful national park known for its giant, ancient sequoias and iconic cliffs.",
        image: "https://via.placeholder.com/300x200.png?text=Yosemite",
        reviews: 4
    },
    {
        name: "The Acropolis",
        category: "Historical",
        description: "An ancient citadel located on a rocky outcrop above the city of Athens.",
        image: "https://via.placeholder.com/300x200.png?text=Acropolis",
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
displayoutput(destinations);
