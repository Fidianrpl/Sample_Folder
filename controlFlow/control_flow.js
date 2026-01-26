let userRole = "admin";
let accesLevel;

if (userRole === "admin") {
    accesLevel = "Full access granted";
}
else if (userRole === "manager") {
    accesLevel = "Limited access granted";
}
else {
    accesLevel = "No access granted";
}

console.log("Access level:", accesLevel);

let isLoggedin = true;
let userMessage;

if (isLoggedin) {
    if (userRole === "admin"){
        userMessage = "Welcome, admin";
    } else {
        userMessage = "Welcome, user";
    }
} else {
    userMessage = "Please log in to access the system.";
}
        
console.log("User message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);