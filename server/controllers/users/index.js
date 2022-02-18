const getUsernames = (req, res) => {
    const users = [
        {
            username: 'user1',
            password: 'pass1'

        },
        {
            username: 'user2',
            password: 'pass2'
        },
        {
            username: 'user3',
            password: 'pass3'
        }
    ]
    res.json({
        users
    })
}
module.exports = {
    getUsernames
}