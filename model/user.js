const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    pemilihanmakanan: {
        type: String,
    },
    jumlahpesanan: {
        type: String,
    },
    pengantaranmkanan: {
        type: String,
    },
    penilaiankonsumen: {
        type: String
    }
})

module.exports = mongoose.model('user',UserSchema)