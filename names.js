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

function getAllHtml() {
    let html = "<table>";
    html += `<tr> <th>First Name</th><th>Last Name</th>`;
    names.forEach(element => {
        html += `<tr><td>${element.firstName}</td><td>${element.lastName}</td></tr>`;
    });
    document.getElementById("names").innerHTML = html + "</table>";
}

module.exports = {getAll, getFirst, getLast, getAllHtml }