import template from './sidebar.html';
import controller from './sidebar.controller';

let navbarComponent = {
    bindings: {},
    template,
    controller: ['$rootScope', '$interval', controller],
    controllerAs: '$ctrl'
};

export default sidebarComponent;