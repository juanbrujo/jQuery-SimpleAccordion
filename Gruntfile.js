module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("jquery.SimpleAccordion.json"),
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *\n" +
				" *  <%= pkg.homepage %>\n" +
				" *  Demo: <%= pkg.demo %>\n" +
				" *\n" +
				" *  Author: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n" +
				" *  License: <%= pkg.licenses[0].type %>\n" +
				" *  <%= pkg.licenses[0].copyright %>\n" +
				" */\n"
		},
		concat: {
			dist: {
				src: ["src/jquery-SimpleAccordion.js"],
				dest: "dist/jQuery-SimpleAccordion.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		jshint: {
			files: ["src/jQuery-SimpleAccordion.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		uglify: {
			my_target: {
				src: ["src/jQuery-SimpleAccordion.js"],
				dest: "dist/jQuery-SimpleAccordion.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: ['src/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['demo/*.html'],
			},
			tasks: ['default']
		}
	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["concat", "uglify"]);
	grunt.registerTask("testjs", ["jshint"]);

};
