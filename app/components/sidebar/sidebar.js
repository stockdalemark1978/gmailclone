// 'use strict'

import sidebarComponent from './sidebar.component';

let sidebarModule = angular.module('sidebar', [])
.component('sidebar', sidebarComponent);

export default sidebarModule;