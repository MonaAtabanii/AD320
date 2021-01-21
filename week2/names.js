let names =[
    {firstName: "Sam",      lastName: "Alex"},
    {firstName: "Julia",    lastName: "Box"},
    {firstName: "Alberto",  lastName: "Dallas"},
    {firstName: "Mohamed",  lastName: "Fahad"},
    {firstName: "Jasmin",   lastName: "Nasir"},
    {firstName: "Zac",      lastName: "Rox"},
    {firstName: "Roy",      lastName: "Tom"},
];

const getAll = () => { 
    return names; }


const getFirst = (firstName) =>{
    return names.find((fname) => {
        return fname.firstName == firstName;
    });
}

const getLast = (lastName) =>{
    return names.find((lname) => {
        return lname.lastName == lastName;
    });
}

const getAllHtml = () =>{
    document.getElementById("names").innerHTML = names.firstName + "," + names.lastName;
}

module.exports = {getAll, getFirst, getLast, getAllHtml }