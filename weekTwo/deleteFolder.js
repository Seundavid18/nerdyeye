const fs = require('fs')

dir = './deleteMe'

fs.rm('./deleteMe', {recursive: true}, (err)=>{
    if (err){
        console.log(err)
    }
    console.log('successful')
})