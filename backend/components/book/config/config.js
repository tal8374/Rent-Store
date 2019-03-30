module.exports = {
    book: {
    },
    rent: {
        dependency: {
            routeName: 'book',
            moduleName: 'book'
        }
    },
};
