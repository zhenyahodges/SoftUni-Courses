function parseError(error){
    if(error.name=='ValidationError'){
        return Object.values(error.errors).map(v=>v.message)
        // TODO IF ADD VALIDATIONS NEEDED
    }else if(Array.isArray(error)){
        return error.map(x=>x.msg)
    // 
    }else{
        return error.message.split('\n');
    }
    
}

module.exports = {
    parseError
}