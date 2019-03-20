const fs = require('fs');
const config = require('../config/config');
const path = require('path');

function startRoutes(app) {
    fs.readdirSync(config.componentsDirectory).forEach(function (moduleName) {
        const moduleRoutePath = [config.componentsDirectory, moduleName, config.routesDirectory].join('/');

        fs.readdirSync(moduleRoutePath).forEach(routeName => {
            let moduleRouteFilePath = ['..', moduleRoutePath, routeName].join('/');
            moduleRouteFilePath = moduleRouteFilePath.replace('.js', '');

            app.use('', require(moduleRouteFilePath));
        });
    })
}

function createPath(moduleName, routeName, isWithId) {
    const moduleConfigPath = path.join('..', config.componentsDirectory, moduleName, config.configDirectory,
        config.configFile);
    const moduleConfig = require(moduleConfigPath);
    const dependency = moduleConfig[routeName].dependency;

    if (hasDependency(dependency)) {
        return handleCreatePathWithDependency(moduleName, routeName, dependency, isWithId);
    } else {
        return handleCreatePathWithoutDependency(moduleName, routeName, isWithId)
    }
}

function hasDependency(dependency) {
    return dependency !== undefined;
}

function handleCreatePathWithDependency(moduleName, routeName, dependency, isWithId) {
    const dependencyPath = createPath(dependency.moduleName, dependency.routeName, true);
    const url = dependencyPath + '/';
    const id = createModuleId(routeName);

    return isWithId ? url + routeName + '/:' + id : url + routeName;
}

function handleCreatePathWithoutDependency(moduleName, routeName, isWithId) {
    const id = '/:' + createModuleId(routeName);

    return isWithId ? '/' + routeName + id : '/' + routeName;
}

function createModuleId(routeName) {
    if (routeName.includes('-')) {
        let index = routeName.indexOf('-');
        routeName = routeName.replace('-', '');
        routeName = routeName.substring(0, index) + routeName.charAt(index).toUpperCase() +
            routeName.substring(index + 1);
    }

    return routeName + 'Id';
}

module.exports = {
    startRoutes,

    createPath,
};
