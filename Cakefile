fs   = require 'fs'
path = require 'path' 
{spawn} = require 'child_process'

run = (args, cb) ->
  proc =         spawn 'coffee', args
  proc.stderr.on 'data', (buffer) -> console.log buffer.toString()
  proc.on        'exit', (status) ->
    process.exit(1) if status != 0
    cb() if typeof cb is 'function'

task 'build', (options) ->
  run ['-c', '--contracts', '-o', 'lib-contracts', 'src'], ->
    run ['-c', '-o', 'lib', 'src/properties.coffee'], ->
