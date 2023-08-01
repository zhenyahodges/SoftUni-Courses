function parseError(error) {
    const result = {
        messages: [],
        fields: {},
    };

    if (error.name == 'ValidatioError') {
        // mongoose
        for (let [field, e] of Object.entries(error.errors)) {
            result.messages.push(e.message);
            result.fields[field] = field;
        }
    } else if (Array.isArray(error)) {
        // validator
        result.messages = error.map((e) => e.msg);
        result.fields = error.map((e) => [e.param, e.param]);
    } else {
        result.messages.push(error.message);
    }
    return result;
}

module.exports={
    parseError
}
