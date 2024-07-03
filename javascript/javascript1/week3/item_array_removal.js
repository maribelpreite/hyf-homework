// DATA
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "Katrine",
    "Tala",
  ];
  
  const start = 1;
  const end = 1;

  //LOGIC
  const nameToRemove = names.splice(start, end); // I know that I can simply put 1,1 inside here, but I wanted to separate data from logic as much as possible

  // RENDER
  console.log(names);