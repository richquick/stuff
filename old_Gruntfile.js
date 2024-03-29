// /*
//  * grunt-contrib-jasmine
//  * http://gruntjs.com/
//  *
//  * Copyright (c) 2013 GruntJS Team
//  * Licensed under the MIT license.
//  */

'use strict';

module.exports = function(grunt) {

  // Set jQuery version based on older IE or not
  var jQueryVersion = (!document.getElementById('ie')) ? "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min" : "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min";

  grunt.initConfig({
    connect: {
      test : {
        port : 8000
      }
    },
    jasmine: {
      prefab: {
        src: 'app/assets/javascripts/_prefab/application.js',
        options: {
          specs: 'app/assets/javascripts/_prefab/specs/*_spec.js',
          helpers: 'app/assets/javascripts/_prefab/specs/*_helper.js',
          host: 'http://127.0.0.1:8000/',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfig: {
              baseUrl:            '/assets/_prefab/',
              paths: {
                "jquery":         jQueryVersion,
                "common":         "general/common",
                "validate":       "general/validate",
                jasmine:          "jasmine/javascripts/jasmine",
                "jasmine-html":   "jasmine/javascripts/jasmine-html",
                spec:             "specs/"
              },
              shim: {
                jasmine: {
                  exports:        "jasmine"
                },
                "jasmine-html": {
                  deps:           ["jasmine"],
                  exports:        "jasmine"
                }
              }
            }
          }
        }
      }
    }
  });

  // grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-template-jasmine-requirejs');

  grunt.registerTask('test', ['jasmine']);

};





// /*
//  * grunt-contrib-jasmine
//  * http://gruntjs.com/
//  *
//  * Copyright (c) 2013 GruntJS Team
//  * Licensed under the MIT license.
//  */

// 'use strict';

// module.exports = function(grunt) {

// // Example configuration using a single requireJS config file
// grunt.initConfig({
//   connect: {
//     test : {
//       port : 8000
//     }
//   },
//   jasmine: {
//     taskName: {
//       src: 'app/assets/javascripts/_prefab/application.js',
//       options: {
//         specs: 'spec/*_spec.js',
//         helpers: 'spec/*_helper.js',
//         host: 'http://127.0.0.1:8000/',
//         template: require('grunt-template-jasmine-requirejs'),
//         templateOptions: {
//           requireConfigFile: 'app/assets/javascripts/_prefab/application.js'
//         }
//       }
//     }
//   }
// });

//   // grunt.initConfig({

//   //   connect: {
//   //     return500: {
//   //       options: {
//   //         port: 9000,
//   //           middleware: function(connect, options) {
//   //             return [function(req, res, next){
//   //               res.statusCode = 500;
//   //               res.end();
//   //             }];
//   //           }
//   //         }
//   //       }
//   //   },
//   //   jshint: {
//   //     all: [
//   //       'Gruntfile.js',
//   //       'tasks/**/*.js'
//   //     ],
//   //     options: {
//   //       jshintrc: '.jshintrc'
//   //     }
//   //   },
//   //   jasmine: {
//   //     prefab: {
//   //       src: [
//   //         'app/assets/javascripts/_prefab/application.js'
//   //       ],
//   //       options: {
//   //         specs:      'app/assets/javascripts/_prefab/specs/*_spec.js',
//   //         outfile:    'app/assets/javascripts/_prefab/jasmine/spec_runner.html',
//   //         keepRunner: true,
//   //         junit: {
//   //           path: 'junit'
//   //         }
//   //       }
//   //     }
//   //   }
//   // });

//   // grunt.loadTasks('tasks');

//   // grunt.loadNpmTasks('grunt-contrib-jshint');
//   // grunt.loadNpmTasks('grunt-contrib-nodeunit');
//   // grunt.loadNpmTasks('grunt-contrib-internal');
//   // grunt.loadNpmTasks('grunt-contrib-connect');
//   // grunt.loadNpmTasks('grunt-contrib-jasmine');
//   // grunt.loadNpmTasks('grunt-template-jasmine-requirejs');

//   // grunt.registerTask('test', ['connect:return500', 'jasmine', 'nodeunit']);
//   // grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
// };


// // /*
// //  * grunt-contrib-uglify
// //  * http://gruntjs.com/
// //  *
// //  * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
// //  * Licensed under the MIT license.
// //  */

// // 'use strict';

// // module.exports = function(grunt) {

// //   // Project configuration.
// //   grunt.initConfig({
// //     jshint: {
// //       all: [
// //         'Gruntfile.js',
// //         'tasks/**/*.js',
// //         '<%= nodeunit.tests %>'
// //       ],
// //       options: {
// //         jshintrc: '.jshintrc'
// //       }
// //     },

// //     // Before generating any new files, remove any previously-created files.
// //     clean: {
// //       tests: ['tmp']
// //     },

// //     // Configuration to be run (and then tested).
// //     uglify: {
// //       compress: {
// //         files: {
// //           'tmp/compress.js': ['test/fixtures/src/simple.js']
// //         },
// //         options: {
// //           mangle: false
// //         }
// //       },
// //       compress_mangle: {
// //         files: {
// //           'tmp/compress_mangle.js': ['test/fixtures/src/simple.js']
// //         }
// //       },
// //       compress_mangle_banner: {
// //         files: {
// //           'tmp/compress_mangle_banner.js': ['test/fixtures/src/simple.js']
// //         },
// //         options : {
// //           banner : '// banner without sourcemap\n'
// //         }
// //       },
// //       no_src: {
// //         files: {
// //           'tmp/compress_mangle.js': []
// //         }
// //       },
// //       compress_mangle_except: {
// //         files: {
// //           'tmp/compress_mangle_except.js': ['test/fixtures/src/simple.js']
// //         },
// //         options: {
// //           mangle: {
// //             except: ['argumentC']
// //           }
// //         }
// //       },
// //       compress_mangle_beautify: {
// //         files: {
// //           'tmp/compress_mangle_beautify.js': ['test/fixtures/src/simple.js']
// //         },
// //         options: {
// //           beautify: true
// //         }
// //       },
// //       enclose: {
// //         files: {
// //           'tmp/enclose.js': ['test/fixtures/src/simple.js']
// //         },
// //         options: {
// //           beautify: true,
// //           compress: false,
// //           enclose: {
// //             'window.argA': 'paramA',
// //             'window.argB': 'paramB'
// //           },
// //           mangle: false
// //         }
// //       },
// //       multifile: {
// //         files: {
// //           'tmp/multifile.js': ['test/fixtures/src/simple.js','test/fixtures/src/comments.js']
// //         },
// //         options: {
// //           mangle: false
// //         }
// //       },
// //       comments: {
// //         src: 'test/fixtures/src/comments.js',
// //         dest: 'tmp/comments.js',
// //         options: {
// //           mangle: false,
// //           preserveComments: 'some'
// //         }
// //       },
// //       wrap: {
// //         src: 'test/fixtures/src/simple.js',
// //         dest: 'tmp/wrap.js',
// //         options: {
// //           mangle: false,
// //           wrap: 'testExport'
// //         }
// //       },
// //       exportAll: {
// //         src: 'test/fixtures/src/simple.js',
// //         dest: 'tmp/exportAll.js',
// //         options: {
// //           mangle: false,
// //           wrap: 'testExport',
// //           exportAll: true
// //         }
// //       },
// //       sourcemap_basic: {
// //         src: 'test/fixtures/src/simple.js',
// //         dest: 'tmp/sourcemap_basic.js',
// //         options: {
// //           sourceMap: true
// //         }
// //       },
// //       sourcemap_customName: {
// //         src: 'test/fixtures/src/simple.js',
// //         dest: 'tmp/sourcemap_customName.js',
// //         options: {
// //           sourceMap: true,
// //           sourceMapName: 'tmp/source_map_custom_name'
// //         }
// //       },
// //       sourcemap_customDir: {
// //         src: 'test/fixtures/src/simple.js',
// //         dest: 'tmp/sourcemap_customDir.js',
// //         options: {
// //           sourceMap: true,
// //           sourceMapName: 'tmp/deep/directory/location/source_map.js.map'
// //         }
// //       },
// //       sourcemap_functionName: {
// //         src: 'test/fixtures/src/simple.js',
// //         dest: 'tmp/sourcemap_functionName.js',
// //         options: {
// //           sourceMap: true,
// //           sourceMapName: function( dest ) {
// //             return dest + ".fn.map";
// //           }
// //         }
// //       },
// //       sourcemap_multiple: {
// //         files: {
// //           'tmp/sourcemaps_multiple1.js': ['test/fixtures/src/simple.js'],
// //           'tmp/sourcemaps_multiple2.js': ['test/fixtures/src/comments.js']
// //         },
// //         options: {
// //           sourceMap: true
// //         }
// //       },
// //       sourcemap_multipleFunctionNames: {
// //         files: {
// //           'tmp/sourcemaps_multiple1_fnName.js': ['test/fixtures/src/simple.js'],
// //           'tmp/sourcemaps_multiple2_fnName.js': ['test/fixtures/src/comments.js']
// //         },
// //         options: {
// //           sourceMap: true,
// //           sourceMapName: function( dest ) {
// //             return dest+'.fn.map';
// //           }
// //         }
// //       },
// //       sourcemapin: {
// //         files: {
// //           'tmp/sourcemapin.js': ['test/fixtures/src/simple2.js']
// //         },
// //         options: {
// //           mangle: false,
// //           banner: '// Hello World\n',
// //           sourceMap: true,
// //           sourceMapIn: function() {
// //             return 'test/fixtures/src/simple2.map';
// //           }
// //         }
// //       },
// //       sourcemap_sources: {
// //           files: {
// //             'tmp/sourcemap_sources.js': ['test/fixtures/src/simple.js']
// //           },
// //           options: {
// //             sourceMap: true,
// //             sourceMapIncludeSources: true
// //           }
// //         },
// //     },

// //     // Unit tests.
// //     nodeunit: {
// //       tests: ['app/assets/javascripts/_prefab/specs/*_spec.js']
// //     }

// //   });

// //   // task that expects its argument (another task) to fail
// //   grunt.registerTask('expectFail', function(){
// //     var task = this.args.join(':');

// //     var done = this.async();

// //     function onComplete(error, result, code) {
// //       grunt.log.write("\n > " + result.stdout.split("\n").join("\n > ") + "\n");
// //       var rv = error ? true : new Error("Task " + task + " unexpectedly passed.");
// //       done(rv);
// //     }

// //     grunt.util.spawn({
// //       grunt : true,
// //       args : task
// //     }, onComplete);
// //   });

// //   // Actually load this plugin's task(s).
// //   grunt.loadTasks('tasks');

// //   // These plugins provide necessary tasks.
// //   grunt.loadNpmTasks('grunt-contrib-jshint');
// //   grunt.loadNpmTasks('grunt-contrib-clean');
// //   grunt.loadNpmTasks('grunt-contrib-nodeunit');
// //   grunt.loadNpmTasks('grunt-contrib-internal');
// //   grunt.loadNpmTasks('grunt-contrib-jasmine');

// //   // Whenever the "test" task is run, first clean the "tmp" dir, then run this
// //   // plugin's task(s), then test the result.
// //   // grunt.registerTask('test', [
// //   //   'clean',
// //   //   'uglify:compress',
// //   //   'uglify:compress_mangle',
// //   //   'uglify:compress_mangle_banner',
// //   //   'uglify:no_src',
// //   //   'uglify:compress_mangle_except',
// //   //   'uglify:compress_mangle_beautify',
// //   //   'uglify:multifile',
// //   //   'uglify:sourcemap_sources',
// //   //   'uglify:comments',
// //   //   'uglify:wrap',
// //   //   'uglify:exportAll',
// //   //   'uglify:enclose',
// //   //   'uglify:sourcemap_basic',
// //   //   'uglify:sourcemap_customName',
// //   //   'uglify:sourcemap_customDir',
// //   //   'uglify:sourcemap_functionName',
// //   //   'uglify:sourcemap_multiple',
// //   //   'uglify:sourcemap_multipleFunctionNames',
// //   //   'uglify:sourcemapin',
// //   //   'uglify:sourcemap_sources',
// //   //   'nodeunit'
// //   // ]);

// //   // By default, lint and run all tests.
// //   // grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

// // };
