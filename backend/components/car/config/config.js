module.exports = {
    car: {},
    rent: {
        dependency: {
            routeName: 'car',
            moduleName: 'car'
        }
    },
    'rent-action': {
        dependency: {
            routeName: 'rent',
            moduleName: 'car'
        }
    },
};
