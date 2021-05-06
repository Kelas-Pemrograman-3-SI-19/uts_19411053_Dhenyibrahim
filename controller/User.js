const userModel = require('../model/user')

exports.register = (data) => {
    new Promise((resolve, reject) =>{
     }) .then(() =>{
            resolve({
                sukses: true
          ,      pesan: 'pesanan di konfirmasi'
            })
        }).catch(() => {
            reject({
                sukses: false
         ,       pesan: 'Data belum lengkap silahkan lengkapi data'
            })
        })
    }