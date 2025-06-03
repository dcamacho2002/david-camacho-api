const display1 = document.getElementById("data");
const planetButton = document.getElementById("planetButton");
const characterButton = document.getElementById("characterButton");
const display2 = document.getElementById("data");

// Notable planets button
planetButton.addEventListener('click', function() {
    fetch('https://www.swapi.tech/api/planets')
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            display1.innerHTML = "<h2>Notable Planets</h2><ul>";
            data.results.forEach((planet) => {
                fetch(planet.url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Request failed');
                        }
                        return response.json();
                    })
                    .then((planetData) => {
                        display1.innerHTML += `<li>
                        ${planetData.result.properties.name}
                        <ul>
                        <li>Climate: ${planetData.result.properties.climate}</li>
                        <li>Population: ${planetData.result.properties.population}</li>
                        <li>Terrain: ${planetData.result.properties.terrain}</li>
                        </ul>
                        </li>`;
                    })
                    .catch(error => {
                        console.error('An error occurred:', error);
                    })
            })
            display1.innerHTML += "</ul>";
        })
        .catch(error => {
            console.error('An error occurred:', error);
        })
});


// Notable characters button
characterButton.addEventListener('click', function() {
    fetch('https://www.swapi.tech/api/people')
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            display2.innerHTML = "<h2>Notable Characters</h2><ul>";
            data.results.forEach((people) => {
                fetch(people.url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Request failed');
                        }
                        return response.json();
                    })
                    .then((peopleData) => {
                        display2.innerHTML += `<li>
                        ${peopleData.result.properties.name}
                        <ul>
                        <li>Birth Year: ${peopleData.result.properties.birth_year}</li>
                        <li>Gender: ${peopleData.result.properties.gender}</li>
                        <li>Height: ${peopleData.result.properties.height}cm</li>
                        </ul>
                        </li>`;
                    })
                    .catch(error => {
                        console.error('An error occurred:', error);
                    })
            })
            display2.innerHTML += "</ul>";
        })
        .catch(error => {
            console.error('An error occurred:', error);
        })
});