let current_users: string[] = ['saim', 'shaheer', 'murtajiz', 'abbas', 'safha'];
let new_users: string[] = ['saim', 'ali', 'ahmed'];

new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} is already taken. Please enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});
