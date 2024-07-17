const {test, expect } = require("allure-playwright");

test('Fetch and validate', async ({ request }) => {
    const getResponse = await request.get('https://restful-booker.herokuapp.com/apidoc/index.html#api-Booking-GetBooking');
    const headers = getResponse.headers();
    // console.log(headers);
    expect(headers.server).toEqual("Cowboy");
    const headersArrayValue = getResponse.headersArray();
    // console.log(headersArrayValue);
    expect(headersArrayValue.length).toBe(14);
    headersArrayValue.forEach((header)=>{
        // console.log("Object::",header);
        console.log("Object name::",header.name);
        console.log("Object value::",header.value);
    })
})
