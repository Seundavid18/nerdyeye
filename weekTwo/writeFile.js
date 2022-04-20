const fs = require('fs')

//Write Sync
const data =   `write on new file`
try{
    fs.writeFileSync('./newFolder/index.txt', data)
    console.log('successful')
} catch(error){
    console.log(error)
}

//Write Async
let datas = `Seun is alright`
try{
    fs.writeFile('./newFolder/text.txt', datas, err =>{
        if (err){
            console.log(err)
        }
        console.log(`successful`)
    })
} catch(error){
    console.log(error)
}