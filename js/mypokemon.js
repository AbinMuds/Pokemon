// creating a main div for the main page

mainDiv = document.createElement("div")
document.body.appendChild(mainDiv)
mainDiv.setAttribute("id","container")
// geting pokemons from the poke APi
fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
    .then((response) => response.json())
    .then((data) => {
        let pokemonList = []
        pokemonList = data.results
        // get a random number 
        function getRndInteger(n) {
            return  Math.floor(Math.random() * n);
          }
          let count = 0;

        // loop for getting the pokemon list

        for(let i=0;i<pokemonList.length;i++){
            if (count<=3) {
                // creating a element div to keep the list of pokemons inside maindiv
                div = document.createElement("div")
                mainDiv.appendChild(div)
                let pok = getRndInteger(200)
                // capitalize
                function capitalizeFirstLetter(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }
                div.innerHTML = capitalizeFirstLetter(pokemonList[pok-1].name)
                // creating a function to get pokemons by their id
                function createPokeImage(pokeID, containerDiv){
                    let pokeImage = document.createElement('img')
                    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
                    containerDiv.append(pokeImage);
                  }
                //   calling for image of that id
                createPokeImage(pok,div)
                count++;
            }
            
        }  
    })
