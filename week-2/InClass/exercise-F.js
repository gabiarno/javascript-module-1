function validateUser(userName, userType) {
  if (userType === "admin" || userType === "manager") {
    return "Username valid";
  } else {
    const upper = userName[0] == userName[0].toUpperCase();
    const lenght = userName.length;
    if (upper && lenght >= 5 && lenght <= 10) {
      return "User valid";
    } else {
      return "User invalid";
    }
  }
}

console.log(validateUser("Gaabi", "otro"));
console.log(validateUser("Gabi", "otro"));
console.log(validateUser("Gabi", "admin"));
