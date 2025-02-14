const MemoryStorage = require("memorystorage");

const store = new MemoryStorage("note-app");

exports.getKeys = (store) => {
  const keys = [];
  for (var i = 0; i < store.length; i++) {
    const key = store.key(i);
    keys.push(key);
  }
  return keys;
};

exports.getValues = (store) => {
  const values = [];
  for (var i = 0; i < store.length; i++) {
    const key = store.key(i);
    const value = store.getItem(key);
    values.push(value);
  }
  return values;
};

exports.store = store;
