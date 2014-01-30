/*global module:false, define:false*/
module.exports = function(grunt) {
  "use strict";

  // Set jQuery version based on older IE or not
  var jQueryVersion = "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min";

  var defaultTemplateOptions = {
    requireConfigFile: '/assets/javascripts/_prefab/application.js',
    requireConfig : {
      baseUrl: '/assets/javascripts/_prefab/',
      paths: {
        "jquery":         jQueryVersion,
        "common":         "general/common",
        "validate":       "general/validate",
        jasmine:          "jasmine/javascripts/jasmine",
        "jasmine-html":   "jasmine/javascripts/jasmine-html",
        spec:             "specs/"
      },
      config: {
        math: {
          description: "Math module (overridden)"
        },
        sum: {
          description: "Sum module (overridden)"
        },
        serializer: {
          regexp: /foo/,
          fn: function () { return ''; }
        }
      },
      shim: {
        jasmine: {
          exports:        "jasmine"
        },
        "jasmine-html": {
          deps:           ["jasmine"],
          exports:        "jasmine"
        }
      },
      "callback": function() {
        define('inlineModule', function() {
          return 'this is inline module';
        });
      }
    }
  };

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        node : true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['src/**/*.js', '!src/lib/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test']
      }
    },
    connect: {
      test: {
        port: 8000,
        base: '.'
      }
    },
    jasmine: {
      requirejs: {
        src: '/assets/javascripts/_prefab/application.js',
        options: {
          specs: '/assets/javascripts/_prefab/specs/*_spec.js',
          helpers: '/assets/javascripts/_prefab/specs/*_helper.js',
          host: 'http://127.0.0.1:<%= connect.test.port %>/',
          templateOptions: defaultTemplateOptions
        }
      },

      version_path_test: {
        src: 'test/fixtures/requirejs/src/**/*.js',
        options: {
          specs: '/assets/javascripts/_prefab/specs/*_spec.js',
          helpers: '/assets/javascripts/_prefab/specs/*_helper.js',
          host: 'http://127.0.0.1:<%= connect.test.port %>/',
          templateOptions: grunt.util._.extend({version: "vendor/require-2.1.8.js"}, defaultTemplateOptions)
        }
      },
      parse_test: {
        src: ['test/fixtures/requirejs/src/**/*.js', '!test/fixtures/requirejs/src/main.js'],
        options: {
          specs: '/assets/javascripts/_prefab/specs/*_spec.js',
          helpers: '/assets/javascripts/_prefab/specs/*_helper.js',
          host: 'http://127.0.0.1:<%= connect.test.port %>/',
          //templateOptions: defaultTemplateOptions.requireConfig
          templateOptions: grunt.util._.extend({
            requireConfigFile: 'test/fixtures/requirejs/src/build.js',
          }, defaultTemplateOptions)
        }
      },
      'require-baseurl': {
        src: 'test/fixtures/require-baseurl/src/**/*.js',
        options: {
          specs: 'test/fixtures/require-baseurl/spec/**/*_spec.js',
          templateOptions: {
            requireConfig: {
              baseUrl: 'test/fixtures/require-baseurl/src/'
            }
          }
        }
      },
      'require-nobaseurl': {
        src: 'test/fixtures/require-nobaseurl/src/**/*.js',
        options: {
          specs: 'test/fixtures/require-nobaseurl/spec/**/*_spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('test', ['connect','jasmine']);

  // Default task.
  grunt.registerTask('default', [
      'jshint',
      'test',
  ]);
};
