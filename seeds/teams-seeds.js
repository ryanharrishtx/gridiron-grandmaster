const{Team}=require('../models')
const teamData=[
    {
        name: "Buccos",
        description: "the bucking buccos",
        owner_id: 1
    },
    {
        name: "Screaming Banshees",
        description: "AHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
        owner_id: 2
    },
    {
        name: "The Crying Babies",
        description: "WAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, I WANT MY MOMMY",
        owner_id: 3
    }
]
const seedTeams=()=>Team.bulkCreate(teamData)

module.exports=seedTeams