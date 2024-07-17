const { test,expect } = require("allure-playwright")

let tokenValue;
test.beforeAll('Basic Auth', async ({ request }) => {
    const responseToken = await request.post("https://restful-booker.herokuapp.com/auth",{
                            data:{
                                "username" : "admin",
                                "password" : "password123"
                            }
                        });
    console.log(await responseToken.json());
    tokenValue = (await responseToken.json()).token;
    console.log(tokenValue);
})

test('Authentication for put call using auth token', async ({ request }) => {
    const putRes = await request.put("https://restful-booker.herokuapp.com/booking/1",{
                            headers:{
                                'Accept': "application/json",
                                'Content-Type': "application/json",
                                'Cookie':"token="+tokenValue
                            },
                            data:{
                                "firstname" : "James",
                                "lastname" : "Brown",
                                "totalprice" : 111,
                                "depositpaid" : true,
                                "bookingdates" : {
                                    "checkin" : "2018-01-01",
                                    "checkout" : "2019-01-01"
                                },
                                "additionalneeds" : "Breakfast"
                            }
                        });
    expect(putRes.status()).toBe(200);
})


test.skip('Authentication with API key', async ({ request }) => {
    const resp = await request.put('https://restful-booker.herokuapp.com/booking/1',{
                    headers:{
                        Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM=",
                        Accept: "application/json",
                    },
                    data:{
                        "firstname" : "James",
                        "lastname" : "Brown",
                        "totalprice" : 111,
                        "depositpaid" : true,
                        "bookingdates" : {
                            "checkin" : "2018-01-01",
                            "checkout" : "2019-01-01"
                        },
                        "additionalneeds" : "Breakfast"
                    }
                });
    expect(resp.status()).toBe(200);
})
