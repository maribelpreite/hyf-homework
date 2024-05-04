function getFullName (firstName, surname, useFormalName, gender) {
    const fullName = firstName + " " + surname;
    if (firstName.trim() === "" || surname.trim() === "") {
        console.log(`Please provide your first name and surname. Both are mandatory.`);
    } else if (useFormalName && gender === "female") {
        console.log(`Lady ${fullName}`);
        } else if (useFormalName && gender === "male") {
            console.log(`Lord ${fullName}`);
        } else {
            console.log(fullName);
        }
}

const fullName1 = getFullName("  ", "Preite", "female");
const fullName2 = getFullName("Oliver", "Twist", true, "male");