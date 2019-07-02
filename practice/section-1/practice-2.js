'use strict';

function collectSameElements(collectionA, collectionB) {
  let flatCollection = collectionB.reduce((pre, arr) => pre.concat(arr), []);
  return collectionA.filter(element => flatCollection.includes(element));
}
