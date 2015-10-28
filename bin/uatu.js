#!/usr/bin/env node
/*eslint no-console:0 */
'use strict';

var path = require('path');
var fs = require('fs');

var chokidar = require('chokidar');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

var from = path.resolve(__dirname, '..', 'public');
var to = path.resolve(__dirname, '..', 'dist');

var watcher = chokidar.watch(from);

var errorMessage = chalk.red('error: ');

function errorHandler(err) {
  console.error(errorMessage, new Error(err));
  watcher.close();
  process.exit(1);
}

function logCopy(base) {
  console.log(chalk.green('File Copied:'), 'public/' + base, chalk.yellow('-->'), 'dest/' + base);
}

function copyFile(src) {
  var base = path.relative(from, src);
  var dest = path.join(to, base);
  var destDir = path.dirname(dest);
  mkdirp(destDir, function (err) {
    if(err) {
      return errorHandler(err);
    }
    var fromStream = fs.createReadStream(src);
    var toStream = fs.createWriteStream(dest);
    fromStream.pipe(toStream);
    fromStream.on('end', function () {
      logCopy(base);
    });
  });
}

watcher.on('add', copyFile);
watcher.on('change', copyFile);
