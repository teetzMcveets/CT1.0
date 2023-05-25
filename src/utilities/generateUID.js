let ids = new Set();

export default function generateUID() {
    let newId = Math.floor(Math.random() * 1000000);
    while (ids.has(newId)) {
        newId = Math.floor(Math.random() * 1000000);
    }
    ids.add(newId);
    return newId;
}