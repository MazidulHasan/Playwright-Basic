// utility.js
function mapObjectToClass(ClassType, data) {
    const instance = new ClassType();

    // Iterate over the keys in the data object
    for (const key in data) {
        // Only assign properties that exist in the class
        if (instance.hasOwnProperty(`_${key}`)) {
            instance[key] = data[key];
        }
    }

    return instance;
}

module.exports = mapObjectToClass;
