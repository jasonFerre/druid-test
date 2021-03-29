"use strict";
const countDuplications = (value) => {
    var splited = [...new Set(value.replace(/\s/g, '').toLowerCase())];
    var jsonData = {};
    console.log(splited);
    splited.forEach(el => {
        let count = 0;
        Array.from(value).filter(ft => {
            if (ft == el)
                count++;
        });
        if (count > 1)
            jsonData[el] = count;
    });
    return JSON.stringify(jsonData);
};
console.log(countDuplications("TTt"));
