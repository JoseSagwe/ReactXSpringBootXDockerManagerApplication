const person = {
    name: 'Developer Joseph',
    address: {
        Country : 'Kenya',
        City : 'Nairobi',
        Estate : 'Rongai'
    },
    profileLinks : ['twitter' , 'instagram' , 'LinkedIn'],

    //Printing to console
    printProfile : () => {
        console.log(person.profileLinks[1])
        //this is the same as 
        // function printProfile(){ console.log(person.profileLinks[1])}
    
        //printing all the list
        person.profileLinks.map(
            (profilesLinks) =>{
                console.log(profilesLinks)
            }
        )
    }
}

export default function LearningJavascript(){
    return(
        <div>
        <div>May name is {person.name} </div>
        <div>I am from {person.address.City}, {person.address.Country}</div>
        <div>{person.profileLinks[2]}</div>
        <div>{person.printProfile()}</div>
        </div>
    )
}