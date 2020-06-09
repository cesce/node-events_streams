const EventEmitter = require('events').EventEmitter;

const processEvent = new EventEmitter();

// Registering to the endProcess event, this will be the latest to leave event loop,
//  when this occurs, the program will exit
processEvent.on('endProcess', (data) => {
  console.log(`... finished processing (code: ${data})`);
});

// Simulates a process, when it ends, emits the endProcess event.
function fakeProcess() {
  console.log('Starting fake process ...');
  setTimeout(() => {
    console.log('Ending fake process ...');
    processEvent.emit('endProcess', 1);
  }, 3000);
}

fakeProcess();
console.log('End line');
