const{Owner}=require('../models')
const ownerData=[
    {
        name:'John Doe',
        email:'john@upmakeemail.com',
        password:'password123'
    },
    {
        name:'Jack Skellington',
        email:'halloween@upmakeemail.com',
        password:'password123'
    },
    {
        name:'April Fools',
        email:'jokes@upmakeemail.com',
        password:'password123'
    },
]

const seedOwners=()=>Owner.bulkCreate(ownerData)

module.exports=seedOwners