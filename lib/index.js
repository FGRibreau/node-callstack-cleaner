/*
 * callstack-cleaner
 * https://github.com/FGRibreau/node-callstack-cleaner
 *
 * Copyright (c) 2012 Francois-Guillaume Ribreau <npm@fgribreau.com> (http://fgribreau.com)
 * Licensed under the MIT license.
 */

module.exports = function(err) {
  if(err instanceof Error){
    err = err.message;
  }

  return err.split('\n').filter(function(line){
    return line.trim().indexOf('at') !== 0;
  }).join('\n');
};
