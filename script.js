// Define an async function to fetch brewery data
async function fetchBreweryData() {
    try {
      const response = await fetch('https://api.openbrewerydb.org/breweries');
      if (!response.ok) {
        throw new Error('Failed to fetch brewery data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Create a function to display the brewery data in the webpage
  function displayBreweries(breweries) {
    const breweryList = document.getElementById('brewery-list');
  
    // Clear existing content
    breweryList.innerHTML = '';
  
    // Create a list element for each brewery
    breweries.forEach((brewery) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Name:- ${brewery.name}, Type:- ${brewery.brewery_type}, Address:- ${brewery.address_1}, URL:- ${brewery.website_url}, Phone:- ${brewery.phone},`;
      breweryList.appendChild(listItem);
    });
  }
  
  // Main function to fetch and display brewery data
  async function main() {
    try {
      const breweryData = await fetchBreweryData();
      displayBreweries(breweryData);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the main function when the webpage finishes loading
  window.addEventListener('load', main);