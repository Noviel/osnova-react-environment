// Created by snov on 28.06.2016.
//

require('../../config/global')(false);
// launch via cluster launcher
require('./cluster-launcher');

// or comment above and uncomment below for single process server
//require('./worker')('default');