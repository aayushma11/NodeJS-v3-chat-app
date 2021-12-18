const users = []

const addUser = ({ id, username, room }) => {
    //Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate
    if (!username || !room) {
        return {
            error: 'Username and Room are required'
        }
    }

    // Check for existing users
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    //Store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id == id)

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}
// addUser({
//     id: 22,
//     username: 'Aayushma',
//     room: 'Sendai',
// })
// addUser({
//     id: 23,
//     username: 'Steph',
//     room: 'Sendai',
// })

// addUser({
//     id: 24,
//     username: 'Timrita',
//     room: 'Tokyo',
// })


const getUsers = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUsers,
    getUsersInRoom

}