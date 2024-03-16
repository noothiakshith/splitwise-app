const zod = require('zod');

const users = zod.object({
    username:zod.string,
    password:zod.string,
    email:zod.string.email(),
    firstname:zod.string(),
    lastname:zod.string()
})

modules.export = users;