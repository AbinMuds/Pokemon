// creating a main div for the main page
let mainDiv = document.createElement("div")
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
                pokeImage.setAttribute("style","width: 200px;height:200px;")
              }
              
            //   function to get type of that pokemon
              function getTypeof(pokeID, containerDiv){
                fetch(pokemonList[i].url)
                .then((response) => response.json())
                .then((data) => {
                    for (j=0;j<data.types.length;j++){
                        let pType = document.createElement('p')
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
                        let pAbilities = document.createElement('p')
                        pAbilities.textContent = data.abilities[j].ability.name
                        pAbilities.setAttribute("style","color:red;text-align:right;");
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
                div.setAttribute('id',"dex")
                div.setAttribute("style","background-color:skyblue; width:80%;margin:auto;padding:10px;display:grid;font-size:30px;")
                // name of the pokemon
                text = document.createElement('h1')
                div.appendChild(text)
                text.textContent = capitalizeFirstLetter(pokemonList[i].name)
                createPokeImage(i+1,div)
                // creating a button for types
                btn = document.createElement("button")
                div.appendChild(btn)
                btn.textContent = "Types"
                btn.setAttribute("id","bttn"+i) 
                btn.setAttribute("style","border:ridge;width:50%;font-size:25px;")
                document.getElementById("bttn"+i).addEventListener('click',function() {
                    getTypeof(i+1,sect1)
                })
                // creating button for abilities
                btn1 = document.createElement("button")
                btn1.textContent = "Abilities"
                div.appendChild(btn1)
                btn1.setAttribute("id","bttn1"+i) 
                btn1.setAttribute("style","border:ridge;width:50%;font-size:25px;")
                document.getElementById("bttn1"+i).addEventListener('click',function() {
                    getAbilitiesOf(i+1,sect2)
                })
                // this is only for styling rather than functionality
                // a table for the buttons
                tab = document.createElement('table')
                div.appendChild(tab)
                tab.appendChild(btn)
                tab.appendChild(btn1)
                // a table for the div elements 
                tab2 = document.createElement('table')
                div.appendChild(tab2)
                sect1 = document.createElement("div")
                sect2 = document.createElement("div")
                tab2.appendChild(sect1)
                tab2.appendChild(sect2)
                sect1.setAttribute("style","width:50%")
                sect2.setAttribute("style","width:50%")
                tab2.setAttribute("style","display:flex;")
            })
        }  
    })