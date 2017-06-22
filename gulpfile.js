const gulp = require('gulp');
const args = require('yargs').argv;
const config = require('./gulp.config');
const plugins = require('gulp-load-plugins');
const browseriry = require('browseriry');
const watchfy = require('watchfy');
const source = require('vinyl-source-stream');


//principal task

gulp.task('dev', ['dev-watchify', 'dev-serve']);

//dev-serve
gulp.task('dev-serve', function () {
  log('Iniciando o servidor: ['+ [].concat(config.temp).concat(config.src).join(', ') + ']');
});

gulp.task('dev-serve', function() {
  log('Iniciando servidor: [' +
      [].concat(config.temp).concat(config.src).join(', ') +
      ']');
  var port = args.port || config.devServerPort;
  plugins.connect.server({
    root: [config.temp, config.src],
    fallback: config.index,
    port: port,
    livereload: true
  });
  gulp.watch(config.watchReload, function() {
    return gulp.src(config.watchReload, {read: false})
            .pipe(plugins.connect.reload());
  });
});

gulp.task('dev-watchify', function () {
  log('Iniciando o servidor watchfy...');
});

function log(msg){
  if (typeof(msg) === 'object') {
    for (var item in msg){
      if (msg.hasOwnProperty(item)) {
        plugins.util.log(plugins.util.colors.blue(msg[item]))
      }
    }
  }else{
    plugins.util.log(plugins.util.colors.blue(msg));
  }
}
