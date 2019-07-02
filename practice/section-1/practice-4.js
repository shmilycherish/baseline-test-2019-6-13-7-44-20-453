'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.map(element => element.key)
    .filter(element => objectB.value.includes(element));
}
