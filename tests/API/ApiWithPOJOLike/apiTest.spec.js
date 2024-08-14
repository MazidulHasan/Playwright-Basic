// apiTest.js
const { test, expect } = require('@playwright/test');
const User = require('./user');
const mapObjectToClass = require('./utility');

test('API Test - Validate User Data', async ({ request }) => {
    // Step 1: Make a GET request to the API
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    // Step 2: Validate the response status
    expect(response.status()).toBe(200);

    // Step 3: Parse the response body as JSON
    const userData = await response.json();
    console.log(userData);
    
    // Step 4: Create a User instance using the custom object mapper
    const userFromAPI = mapObjectToClass(User, userData);

    // Step 5: Create a User instance with expected data
    const expectedUser = new User("Leanne Graham", null, "Sincere@april.biz");

    // Step 6: Validate that the API data matches the expected data
    expect(userFromAPI.isEqual(expectedUser)).toBe(true);
});
