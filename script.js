
const apiKey = "c75ac129-2650-4330-b9b4-5f37a7df4330";

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
        console.log(json[villagerNumber]);
      
    } catch (error) {
      console.log(error.message);
    
    }
}

getRandomVillager();



