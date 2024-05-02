function getFullName (firstname, surname, useFormalName, gender) {
    if (useFormalName === true && gender === "female") {
        return "Lady " + firstname + " " + surname;
        } else if (useFormalName === true && gender === "male") {
            return "Lord " + firstname + " " + surname;
        } else if (firstname !== "" && surname !== "") {
        return firstname + " " + surname;
        } else if (firstname === "" && surname !== "") {
            return "Passenger " + surname;
        } else if (firstname !== "" && surname === "") {
            return "Passenger " + firstname;
        } else if (firstname === "" && surname === "") {
            return "Unknown Passenger";
        }
}

const fullname1 = getFullName("Maribel", "Preite", "female");
const fullname2 = getFullName("Oliver", "Twist", true, "male");

console.log(fullname1);
console.log(fullname2);