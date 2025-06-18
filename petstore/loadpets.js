const pets = [
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 3,
        "img": "images/dogs/dog01.jpg"
    },
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 3,
        "img": "images/dogs/dog02.jpg"
    },
    {
        "name": "Charlie",
        "type": "Dog",
        "age": 3,
        "img": "images/dogs/dog03.jpg"
    },
    {
        "name": "Leo",
        "type": "Cat",
        "age": 4,
        "img": "images/cats/cat03.jpg"
    },
    {
        "name": "Whiskers",
        "type": "Cat",
        "age": 2,
        "img": "images/cats/cat01.jpg"
    },
    {
        "name": "Mittens",
        "type": "Cat",
        "age": 2,
        "img": "images/cats/cat02.jpg"
    },
    {
        "name": "Simba",
        "type": "Cat",
        "age": 4,
        "img": "images/cat.webp"
    },

    {
        "name": "Goldie",
        "type": "Capybara",
        "age": 3,
        "img": "images/capybaras/capybara01.jpg"
    },
    {
        "name": "Nemo",
        "type": "Capybara",
        "age": 1,
        "img": "images/capybaras/capybara02.jpg"
    },
    {
        "name": "Charlie",
        "type": "Bird",
        "age": 4,
        "img": "images/birds/bird01.jpg"
    },
    {
        "name": "Tweety",
        "type": "Bird",
        "age": 4,
        "img": "images/birds/bird02.jpg"
    },
    {
        "name": "Charlie",
        "type": "Dog",
        "age": 4,
        "img": "images/dog.jpg"
    }
]

function loadPets() {
    console.log("Loading pets...");
    const petList = $("#pet-list");
    pets.forEach((pet) => {
        const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
        petList.append(petItem);
    });

    // Attach click handler using event delegation
    petList.on("click", ".adopt-btn", adoptPet);

    // install event handler for pet type
    $('input[name="pet-type"]').on("change", function () {
        const selectedType = $(this).val();
        filterPets();

    });
}


function filterPets() {

    console.log("Selected pet type:", $('input[name="pet-type"]:checked'));
    const types = $('input[name="pet-type"]:checked')
        .map(function () {
            return $(this).val();
        })
        .get();

    console.log(types);

    const filteredPets = pets.filter((pet) => types.includes(pet.type));
    console.log(filteredPets);

    const petList = $("#pet-list");
    petList.empty(); // Clear the existing pets
    filteredPets.forEach((pet) => {
        const petItem = $("<div>").addClass("pet").html(`
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Type: ${pet.type}</p>
      <p>Age: ${pet.age} years</p>
      <button class="adopt-btn">Adopt Now</button>
    `);
        petList.append(petItem);
    });
}

$(document).ready(loadPets);





