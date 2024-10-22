
import apiKey from "./utility.js";

//fetch data about single random Animal Crossing villager

//function to create a random number
const makeRandNumber = (max) => {
  return Math.floor(Math.random() * max);
}


//gets data of random villager
const getRandomVillager = async () => {
    //select a random number 
    const url = "https://api.nookipedia.com/villagers";

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-API-KEY': apiKey,
                'Accepted-Version': "1.0.0",
            }
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const villagerNumber = makeRandNumber(json.length);
        const villager = json[villagerNumber];
        console.log("villager", villager);

        //change the HTML 

        const villagerImage = document.querySelector(".villager-image");
        const quote = document.querySelector(".quote");
        const name = document.querySelector(".name");
        const species = document.querySelector(".species");
        const personality = document.querySelector(".personality");
        const hobby = document.querySelector(".hobby");
        const birthday = document.querySelector(".birthday");

        const speciesInfo = document.createElement("span");
        speciesInfo.innerHTML = villager.species;

        const personalityInfo = document.createElement("span");
        personalityInfo.innerHTML = villager.personality;


        //change image
        villagerImage.src = villager.image_url;
        //change quote 
        quote.innerHTML = villager.quote;
        //change name
        name.innerHTML = villager.name;
        //change species
        species.insertAdjacentElement("beforeend", speciesInfo);
        //change personality
        personality.insertAdjacentElement("beforeend", personalityInfo);
        //change hobby
        if (villager.hobby) {
          hobby.innerHTML = villager.hobby;
        } else {
            console.log(villager.hobby);
        }
        //change birthday
        birthday.innerHTML = `${villager.birthday_month} ${villager.birthday_day}`;
      

      
    } catch (error) {
      console.log(error.message);
    
    }
}

getRandomVillager();






