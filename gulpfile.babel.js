import {
  Preset,
  CleanJavascripts,
  Copy,
  Prepublish,
  PublishBuild,
  PublishGhPages,
  RollupUmd,
  RollupIife,
  Aggregate,
  series,
  parallel
} from 'gulp-pipeline'
import gulp from 'gulp'
import pkg from './package.json'
import moment from 'moment'

const preset = Preset.baseline()

const rollupConfig = {
  debug: true,
  options: {
    moduleName: 'test',
    banner: `/*!
  * ${pkg.name} v${pkg.version} (${pkg.homepage})
  * Copyright ${moment().format("YYYY")} ${pkg.author}
  * Licensed under ${pkg.license}
  */`
  }
}
const copyJsToSite = new Copy(gulp, preset, {
  task: {name: 'dist:js->site'},
  source: {
    options: {cwd: 'dist'},
    glob: ['*.iife*.js']
  },
  dest: 'site/dist/'
})


const js = new Aggregate(gulp, 'js',
  series(gulp,
    new CleanJavascripts(gulp, preset),
    parallel(gulp,
      // umd (non-bundled)
      new RollupUmd(gulp, preset, rollupConfig, {
        options: {
          dest: 'test.umd.js'
        }
      }),
      // self executing (fully bundled)
      new RollupIife(gulp, preset, rollupConfig, {
        options: {
          dest: 'test.iife.js'
        }
      })
    ),
    copyJsToSite
  )
)

// publish
new Aggregate(gulp, 'publish',

  series(gulp,
    new Prepublish(gulp, preset),   // asserts committed

    js,

    // setup the site in a non-monitored directory - it does it's own git thing.
    new Copy(gulp, preset, {
      task: {name: 'copy:site-to-gh-pages'},
      source: {
        options: {cwd: 'site'},
        glob: ['**']
      },
      dest: '_gh_pages'
    }),

    new PublishBuild(gulp, preset, {
      npm: {
        bump: false,
        publish: false
      }
    }),

    new PublishGhPages(gulp, preset)
  )
)
