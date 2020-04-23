import isMultiple from "./isMultiple";

const getMultiples = (selectedNumber, count) => {
    let items = [];
    for (let i = 1; i <= count; i++) {
        if (isMultiple(i, selectedNumber)) {
            items.push(i);
        }
    }
    return items;
};

export default getMultiples;