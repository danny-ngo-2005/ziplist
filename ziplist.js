"use strict";
function zipList(list1, list2) {
    const result = [];
    const maxLength = Math.min(list1.length, list2.length);
    for (let i = 0; i < maxLength; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
function zipListFunctionalWay(list1, list2) {
    return list1.map((item, index) => [item, list2[index]]).reduce((acc, val) => acc.concat(val), []);
}
const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
console.log('Result of zipList function: ', zipList(list1, list2));
console.log('Result of zipListFunctionalWay:', zipListFunctionalWay(list1, list2));
