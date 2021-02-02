console.log("sanity check")
// form = document.createElement("FORM")
// text = document.createElement("h1")

mainDiv = document.createElement("div")
document.body.appendChild(mainDiv)
mainDiv.setAttribute("id","container")
fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((data) => {
        let pokemonList = []
        pokemonList = data.results
        for(let i=0;i<pokemonList.length;i++){
            function createPokeImage(pokeID, containerDiv){
                let pokeImage = document.createElement('img')
                pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
                containerDiv.append(pokeImage);
              }
            // createPokeImage(i+1,div)
            btn = document.createElement("button")
            btn.textContent = "Pokedex"
            div.appendChild(btn)
            btn.setAttribute("id","bttn"+i) 
            document.getElementById("bttn").addEventListener("click",function() {
                text = document.createElement('h1')
                document.body.appendChild(text)
                this.textContent = pokemonList[i].name 
        }
        
        })
        function getTypeof(pokeID, containerDiv){
            fetch("https://pokeapi.co/api/v2/pokemon/2")
            .then((response) => response.json())
            .then((data) => {
                for (j=0;j<data.types.length;j++){
                    let pType = document.createElement('h3')
                    pType.textContent = data.types[j].type.name
                    containerDiv.append(pType)
                }
            })
            
        }
        
        // getTypeof(0,div)       
    })


