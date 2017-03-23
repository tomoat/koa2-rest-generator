import test from 'ava'
import {execSync} from 'child_process'
import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

const filepath = path.join(__dirname, '../install.js')
const cmd = `node ${filepath}`

function clean() {
  const root = path.join(__dirname, 'fixtures')
  fs.readdirSync(root).forEach(name => {
    ['.travis.yml', 'appveryor.yml', 'LICENSE'].forEach(file => {
      rimraf.sync(path.join(root, name, file))
    })
  })
}
