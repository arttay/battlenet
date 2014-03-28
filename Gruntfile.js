module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded'
        },
        files: {
          'stylesheets/build/main.css': 'stylesheets/main.scss'
        }
      }
    },
       smushit: {
      mygroup: {
        src: ['images/good/**/*.png','images/good/**/*.jpg','images/good/**/*.jpeg'],
        dest: 'images/build'
      }
    },
      compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        src: ['css/*.css'],
        dest: 'css/gzip'
      }
    },
       cssmetrics: {
        dev: {
            src: [
                'css/build/base.css',
                'css/reset.css'
            ]
        }
    },
    csscomb: {
      dist: {
      options: {
        sortOrder: 'css/cssSorts/sort.json'
      },
      files: {
        'css/build/base.css': ['css/build/base.css'],
      },
    },
  },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/good/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
       images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }
    },
    
  });

  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-smushit');
grunt.loadNpmTasks('grunt-contrib-compress');

grunt.loadNpmTasks('grunt-csscomb');
grunt.loadNpmTasks('grunt-css-metrics');

   grunt.registerTask('default', ['sass']);

};