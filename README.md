# 🦀 exec-x 
dynamically execute commands in npm script with variables .


## Features:
- Use dynamic data form package.json (`name`, `verison`, `project path`) for npm scripts.
- change npm script current working directory.

**package.json:**
```json
    "execPath": "./../../",
    "scripts": {
        "dev": "exec-x \"cross-env Cells_EE_DIR={{project}} npm run dev  \"",
        "build": "exec-x \"cross-env Cells_EE_DIR={{project}} npm run build\"",
        "rebuild:native": "exec-x \" npm run rebuild -f -w sharp sqlite3 -m {{project}}/native {{name}}-v{{version}} \""
    },

```
## Install

```
npm i -D exec-c
```

## Usege

### use package.json data in npm scripts.
```json
"exec-x \"cross-env XXX={{project}} npm run dev  \""
```

- `{{project}}`：project path (current modules path)
- `{{name}}`：modules path
- `{{version}}`：modules version
- `{{workPath}}`：current working directory (Will be affected by `execPath`)


### change npm script current working directory
1. add `execPath` into package.json
2. use `exec-x` in npm secript 

**package.json:**
```diff
    "name": "YOU-MODULES"
+   "execPath": "./../../",
    "npm ": {
        "dev": "exec-x \"cross-env Cells_EE_DIR={{project}} npm run dev  \"",
    },

```
