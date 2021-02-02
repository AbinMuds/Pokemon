console.log("sanity check")
// form = document.createElement("FORM")
// text = document.createElement("h1")

mainDiv = document.createElement("div")
document.body.appendChild(mainDiv)
mainDiv.setAttribute("id","container")
fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
    .then((response) => response.json())
    .then((data) => {
        let pokemonList = []
        pokemonList = data.results
        for(let i=0;i<pokemonList.length;i++){

            div = document.createElement("div")
            mainDiv.appendChild(div)
            div.setAttribute("id",i)
            // text = document.createElement("h1")
            // list.appendChild(text)
            div.innerHTML = pokemonList[i].name
            // list = document.createElement("li")
            // div.append(list)
            function createPokeImage(pokeID, containerDiv){
                let pokeImage = document.createElement('img')
                pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
                containerDiv.append(pokeImage);
              }
            createPokeImage(i+1,div)
            // getTypeof(i+1,div)
            // console.log(pokemonList[i])
            btn = document.createElement("button")
            btn.textContent = "Pokedex"
            div.appendChild(btn)
            btn.setAttribute("id","bttn"+i) 
            document.getElementById("bttn"+i).addEventListener("click",function() {
                // text = document.createElement('h1')
                // document.body.appendChild(text)
                // text.textContent = pokemonList[i] 
                location.href="../html/Pokedex.html"
                // console.log("hello")
            })
        
        }
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


