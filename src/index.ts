
export const countDuplications = (value: string) => {
    var splited = [...new Set(value.replace(/\s/g, '').toLowerCase())];
    var jsonData: any = {};

    splited.forEach(el => {
        let count = 0;
        Array.from(value).filter(ft => {
            if (ft.toLowerCase() == el)
                count++;
        });
        if (count > 1)
            jsonData[el] = count;
    })
    return JSON.stringify(jsonData);
}
