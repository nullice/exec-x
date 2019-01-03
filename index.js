#!/usr/bin/env node

// Created by nullice on 2019/01/03 - 10:56
const { exec } = require("child_process")
const path = require("path")

const workPath = path.resolve(__dirname, "./../../")
const projectPath = path.resolve(__dirname)
const command = process.argv[2]
console.log(`workPath: ${workPath}\nprojectPath: ${projectPath}`)
console.info("command: " + command)

let npmScript
npmScript = command.replace(/\{\{project\}\}/g, projectPath)
npmScript = npmScript.replace(/\{\{embryo\}\}/g, workPath)

const execOptions = {
    cwd: workPath
}

console.log("[exec]", npmScript)
const cmd = exec(npmScript, execOptions)

// --------
cmd.stdout.on("data", data => {
    process.stdout.write(data)
})
cmd.stderr.on("data", data => {
    process.stdout.write(data)
})

cmd.on("error", err => {
    console.error("Failed to start subprocess.\n", err)
})

cmd.on("close", code => {
    console.log(`done.`)
})
