
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
        const textColor = villager.text_color;
        const titleColor = villager.title_color;

        

        const speciesInfo = document.createElement("span");
        speciesInfo.innerHTML = villager.species;

        const personalityInfo = document.createElement("span");
        personalityInfo.innerHTML = villager.personality;

        const birthdayInfo = document.createElement("span");
        birthdayInfo.innerHTML = `${villager.birthday_month} ${villager.birthday_day}`;


        //change image
        villagerImage.src = villager.image_url;
        //add a border colour depending on villager's gender
        if (villager.gender === "Male") {
            //add border colour
            villagerImage.classList.add("border-blue");
        } else {
            villagerImage.classList.add("border-pink");
        }
   
       
        if (villager.quote) {
          //change quote 
          quote.innerHTML = villager.quote;
        }
        //change name
        name.innerHTML = villager.name;
        //change species
        species.insertAdjacentElement("beforeend", speciesInfo);
        //change personality
        personality.insertAdjacentElement("beforeend", personalityInfo);
        //change hobby
        if (villager.hobby) {
          hobby.innerHTML = villager.hobby;
          //change hobby icon according to data
          const hobbyImg = document.querySelector(".hobby-image");
          hobbyImg.src = `/assets/${villager.hobby}.svg`;
          
        } else {
            console.log(villager.hobby);
            const hobbyContainer = document.querySelector(".hobby-container");
            //hide hobby section if there are no hobbies
            hobbyContainer.style.display = "none";
        }
      

        if (!villager.birthday_day || !villager.birthday_month) {
            //hide the birthday container if there is no birthday information
            const birthdayContainer = document.querySelector(".birthday-container"); 
            birthdayContainer.style.display = "none";
        } else {
          //change birthday
          birthday.insertAdjacentElement("beforeend", birthdayInfo);
        }

        //change title colour
        if (textColor && titleColor) {
            name.style.color = `#${textColor}`;
            name.style.backgroundColor = `#${titleColor}`;
        } else {
            console.log("textColour", textColor);
            console.log(titleColor);
        } 
    } catch (error) {
      console.log(error.message);
    
    }
}

getRandomVillager();






