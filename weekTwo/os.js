// Operating system Module

const os = require('os')
console.log(os)

const userInfo = os.userInfo()
console.log(userInfo)
console.log(userInfo.username)

const upTime = `Your system uptime is ${os.uptime()} seconds`
console.log(upTime)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)