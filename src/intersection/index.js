function intersection(a, b) {
    const map = new Map();
    const set = new Set();

    a.forEach((element,index) => map.set(element, index));

    b.forEach(element =>{
        if(map.has(element)){
            set.add(element);
        }
    });

    return Array.from(set);
}

module.exports = intersection;
