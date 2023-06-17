const eventBus = require('../eventBus');

let firstSayHelloUnsubscribe = eventBus.subscribe(
    'say-hello',
    (name, secondName) =>
        console.log(
            'Event Say hello executed!- ' +
                name +
                ' ' +
                (secondName ? secondName : '')
        )
);
eventBus.subscribe('say-hello', (name, secondName) =>
    console.log(
        'Event Say hello executed 2nd time!- ' +
            name +
            ' ' +
            (secondName ? secondName : '')
    )
);
eventBus.subscribe('say-bye', (name) =>
    console.log('Event Say bye executed!- ' + name)
    );
    
    eventBus.publish('say-hello', 'Pesho', 'Ivan');
    firstSayHelloUnsubscribe();
    eventBus.publish('say-hello', 'Gesho');
    eventBus.publish('say-bye', 'Pesho');
