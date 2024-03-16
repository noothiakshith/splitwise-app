const zod = require('zod');

const users = zod.object({
    username:zod.string,
    password:zod.string,
    email:zod.string.email(),
    firstname:zod.string(),
    lastname:zod.string()
})
const loginschema = zod.object({
    username:zod.string(),
    password:zod.string().min(8).max(20)
})
modules.export ={users,loginschema};