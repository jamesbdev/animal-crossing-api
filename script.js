
const apiKey = "c75ac129-2650-4330-b9b4-5f37a7df4330";

//fetch data about single random Animal Crossing villager

const getRandomVillager = async () => {
    //select a random number 
    const url = "https://api.nookipedia.com/villagers";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
      
    } catch (error) {
      console.log(error.message);
    
    }
}

getRandomVillager();



