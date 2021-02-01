console.log("sanity check")
form = document.createElement("FORM")
text = document.createElement("h1")


fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => {
        let pokemonList = []
        pokemonList = data.results
        for(let i=0;i<pokemonList.length;i++){
            div = document.createElement("div")
            // console.log(pokemonList[i])
            div.innerHTML = pokemonList[i].name
            document.body.appendChild(div)

            function createPokeImage(pokeID, containerDiv){
                let pokeImage = document.createElement('img')
                pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
                containerDiv.append(pokeImage);
              }

            createPokeImage(i+1,div)
        }
        
    })


