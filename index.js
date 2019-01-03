#!/usr/bin/env node

// Created by nullice on 2019/01/03 - 10:56
const { exec } = require("child_process");
const path = require("path");
const execPath = "./../../";
const name = "";
const version = "";
try {
  const packageJson = require("./package.json");
  if (packageJson && packageJson.name) name = packageJson.name;
  if (packageJson && packageJson.execPath) execPath = packageJson.execPath;
  if (packageJson && packageJson.version) version = packageJson.version;
} catch (error) {}
const workPath = path.resolve(execPath);
const projectPath = path.resolve("./");
const command = process.argv[2];
console.log(`\x1b[37m workPath: ${workPath}\n projectPath: ${projectPath} \x1b[0m`);
console.info("\x1b[37m command: " + command + "\x1b[0m");

let npmScript;
npmScript = command.replace(/\{\{project\}\}/g, projectPath);
npmScript = npmScript.replace(/\{\{embryo\}\}/g, workPath);
npmScript = npmScript.replace(/\{\{execPath\}\}/g, workPath);
npmScript = npmScript.replace(/\{\{name\}\}/g, name);
npmScript = npmScript.replace(/\{\{version\}\}/g, version);


const execOptions = {
  cwd: workPath
};
 
console.log("\x1b[36m[exec-x]\x1b[0m", npmScript);
const cmd = exec(npmScript, execOptions);

// --------
cmd.stdout.on("data", data => {
  process.stdout.write(data);
});
cmd.stderr.on("data", data => {
  process.stdout.write(data);
});

cmd.on("error", err => {
  console.error("Failed to start subprocess.\n", err);
});

cmd.on("close", code => {
  console.log(`done.`);
});
