import EventEmitter from 'events';

const customEmitter = new EventEmitter();

customEmitter.on('response', (name: string, id: number) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here`);
});
customEmitter.emit('response', 'john', 34);
