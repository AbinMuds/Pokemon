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
        // the function to clear the page element if needed
        function clearBox(elementID){
            document.getElementById(elementID).innerHTML = "";
        }
        // loop for getting the pokemon list

        for(let i=0;i<pokemonList.length;i++){
            // creating a element div to keep the list of pokemons inside maindiv
            div = document.createElement("div")
            mainDiv.appendChild(div)
            div.setAttribute("id",i)
            // capitalize
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
              }
            div.innerHTML = capitalizeFirstLetter(pokemonList[i].name)
            // creating a function to get pokemons by their id
            function createPokeImage(pokeID, containerDiv){
                let pokeImage = document.createElement('img')
                pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
                containerDiv.append(pokeImage);
              }
              
            //   function to get type of that pokemon
              function getTypeof(pokeID, containerDiv){
                fetch(pokemonList[i].url)
                .then((response) => response.json())
                .then((data) => {
                    for (j=0;j<data.types.length;j++){
                        let pType = document.createElement('li')
                        pType.textContent = data.types[j].type.name
                        containerDiv.append(pType)
                    }
                })     
            }
            
            // function for abilities
            function getAbilitiesOf(pokeID, containerDiv){
                fetch(pokemonList[i].url)
                .then((response) => response.json())
                .then((data) => {
                    for (j=0;j<data.abilities.length;j++){
                        let pAbilities = document.createElement('li')
                        pAbilities.textContent = data.abilities[j].ability.name
                        pAbilities.setAttribute("style","color:red;");
                        containerDiv.append(pAbilities)
                    }
                })     
            }
            
            
            //   calling for image of that id
            createPokeImage(i+1,div)
            // A button for the Pokedex page to take to diffrent page to get its details
            btn = document.createElement("button")
            btn.textContent = "Pokedex"
            div.appendChild(btn)
            btn.setAttribute("id","bttn"+i) 
            document.getElementById("bttn"+i).addEventListener('click',function() {
                // if pokedex button is clicked calling clearbox to delete other items
                clearBox('container')
                // creating a another div after cleared
                div = document.createElement("div")
                document.body.appendChild(div)
                div.setAttribute("style","display:grid;widht:300px;height:300px;justify-content:center;font-size:30px;background-color:light-blue;")
                // creating a button for types
                btn = document.createElement("button")
                div.appendChild(btn)
                btn.textContent = "Types"
                btn.setAttribute("id","bttn"+i) 
                document.getElementById("bttn"+i).addEventListener('click',function() {
                    getTypeof(i+1,div)
                })
                // for abilities
                btn1 = document.createElement("button")
                btn1.textContent = "Abilities"
                div.appendChild(btn1)
                btn1.setAttribute("id","bttn1"+i) 
                document.getElementById("bttn1"+i).addEventListener('click',function() {
                    getAbilitiesOf(i+1,div)
                })
                // name of the pokemon
                text = document.createElement('h1')
                document.body.appendChild(text)
                text.textContent = pokemonList[i].name
                createPokeImage(i+1,div)
                // location.href="../html/Pokedex.html"
            })
        
        }  
    })


