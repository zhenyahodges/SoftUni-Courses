const subscribers = {};

// {
//     callPesho: [
//         ()=>null
//     ];
// }

exports.subscribe = (eventType, callBack) => {
    // console.log('subscribe');

    if (!subscribers[eventType]) {
        subscribers[eventType] = [];
    }
    subscribers[eventType].push(callBack);
};

exports.publish = (eventType, ...params) => {
    // console.log('publish');

    subscribers[eventType].forEach(s => s(...params));
    // also
    // subscribers[eventType].forEach(s => s.apply(null,params));

    return ()=>{
        subscribers[eventType]= subscribers[eventType].filter(x=> x!== callBack);
    }
};
