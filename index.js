// Create form boxes with options to search by: name, city, state, type.  


// Add version of this request to an event listener for the 'submit' button
fetch('https://api.openbrewerydb.org/breweries')
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log('Name:', data[14].name)
    console.log('Street:', data[14].street)
    console.log('City:', data[14].city)
    console.log('State:', data[14].state)
    console.log('Zip:', data[14].postal_code)
    console.log('Phone:', data[14].phone)
    console.log('URL:', data[14].website_url)
    // Create card for each object and add the info listed above to elements.  Add h2 for name of brewery, ul and li for the address, phone, url.
    // Add forward and back buttons at the bottom to advance through searches
})