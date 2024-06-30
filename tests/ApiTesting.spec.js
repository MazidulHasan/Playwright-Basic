const {test, expect } = require("@playwright/test");
var userID;

test('Get Users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log("The respose is",await response.json());
    expect(response.status()).toBe(200);
})

test('Post request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{
                    "name": "morpheus",
                    "job": "leader"
            },
            headers:{
                "Accept":"application/json"
            }
        }
    );
    var res = await response.json();
    console.log("The respose is",res);
    userID = res.id;
    console.log("The id is:: ",userID);
    expect(response.status()).toBe(201);
})


test('Update request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/'+userID,
        {
            data:{
                    "name": "morpheus2",
                    "job": "leader"
            },
            headers:{
                "Accept":"application/json"
            }
        }
    );
    var res = await response.json();

    console.log("The respose is",res);
    expect(response.status()).toBe(200);
})

test('Delete request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/'+userID);
    expect(response.status()).toBe(204);
})

