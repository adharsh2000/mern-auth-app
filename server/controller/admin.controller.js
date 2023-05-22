const adminModel = require('../model/modal.admin')
const jwt = require('../utils/jwt')
const userModel = require('../model/modal.user')

const login = async (req, res) => {
    try {
        // console.log(req.body.email);
        if (!req.body.email || !req.body.password) {
            return res.json({ error: 'Some of the fields are Empty' })
        }
        const admin = await adminModel.find({ email: req.body.email })
        // console.log(admin);
        if (admin.length == 0) {
            return res.json({ error: 'Invalid admin' })
        }
        if (req.body.password != admin[0].password) {
            return res.json({ error: 'Incorrect Password' })
        }
        const token = jwt.createAdminToken(admin[0])
        res.json({
            success: true,
            token: token,
        })
    } catch (err) {
        console.log(err);
    }
}

const getUsers = async (req, res) => {
    try {
        const user = await userModel.find({ isDeleted: false })
        res.json({ users: user })
    } catch (err) {
        console.log(err);
    }

}

const loadUserDetails = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userModel.findById(id)
        res.json(user)
    } catch (err) {
        console.log(err);
    }
}

const editUserDetails = async (req, res) => {
    try {
        const id = req.params.id
        const { username, email } = req.body
        await userModel.findByIdAndUpdate(id, {
            $set: {
                username,
                email
            }
        })
        res.json({ success: true })
    } catch (err) {
        console.log(err);
    }
}

const searchUser = async (req, res) => {
    try {
        const search = req.body.search
        const user = await userModel.aggregate([
            {
                '$match': {
                    'isDeleted': false,
                }
            }, {
                '$match': {
                    $or: [
                        { email: new RegExp(search, 'i') },
                        { username: new RegExp(search, 'i') }
                    ]
                }
            }
        ])
        res.json({ user, success: true })
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await userModel.findByIdAndUpdate(id, {
            $set: {
                isDeleted: true
            }
        })
        res.json({ success: true })
    } catch (err) {
        console.log(err);
    }
}

const AddUser = async (req, res) => {
    const { username, email,phone, password } = req.body
    if (!email || !password || !username || !phone) {
        return res.json({ error: 'Some of the fields are Empty' })
    }
    const user = new userModel({ username, email, phone, password })
    try {
        await user.save()
        const users = await userModel.find({ isDeleted: false })
        res.json({ success: true, user: users })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    login,
    getUsers,
    loadUserDetails,
    editUserDetails,
    searchUser,
    deleteUser,
    AddUser
}