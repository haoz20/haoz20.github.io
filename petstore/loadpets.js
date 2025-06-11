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
        "name": "Polly",
        "type": "Bird",
        "age": 4,
        "img": "images/birds/bird02.jpg"
    }

]

function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
    pets.forEach(pet => {
        const petItem = document.createElement('div');
        petItem.className = 'pet';
        petItem.innerHTML = `
	      <img src="${pet.img}" alt="${pet.name}">
	      <h3>${pet.name}</h3>
	      <p>Type: ${pet.type}</p>
	      <p>Age: ${pet.age} years</p>
	      <button onclick="adoptPet()">Adopt Now</button>
	  `;
        petList.appendChild(petItem);
    });
}
document.addEventListener('DOMContentLoaded', loadPets);
console.log('Pets loaded successfully.')