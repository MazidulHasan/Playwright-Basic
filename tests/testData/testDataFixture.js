import {test } from "@playwright/test"

exports.test = test.extend({
    loginData:{
        UserName: "Admin",
        Password: "admin123"
    },
    testData:{
        fname:"firstName",
        lname:"LastName"
    }
})