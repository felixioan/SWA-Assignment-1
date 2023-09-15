const {deserializedData} = require("./utils");
async function fetchData() {
    try {
        const response = await fetch("http://localhost:8080/data");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        const deserialized = deserializedData(jsonData);

         console.log("Deserialized Data:");
           deserialized.forEach(item => {
            console.log("Item:");
          console.log("Type: " + item.getType());
        console.log("Value: " + item.getValue());
        console.log("Unit: " + item.getUnit());
         console.log("Time: " + item.getTime());
        console.log("Place: " + item.getPlace());
         });



//        return deserialized;
    } catch (error) {
        console.log("Error on fetchData(): " + error);
        throw error;
    }
}

async function fetchDataAndLog() {
    try {
        const data = await fetchData();
        console.log(data); // Log the fetched data
    } catch (error) {
        console.log("Error in fetchDataAndLog: " + error);
    }
}

fetchDataAndLog();

module.exports = {
    fetchData,
}