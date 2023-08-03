function parseError(error){
    return error.message.split('\n')
}

module.exports = {
    parseError
}