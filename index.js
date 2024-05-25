#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const degit = require('degit');
const { execSync } = require('child_process');

if (process.argv.length < 3) {
    console.log('Please provide a project name.');
    process.exit(1);
}

const projectName = process.argv[2];
const repoUrl = 'https://github.com/tranhoangkhang1212/base-next-project';

const emitter = degit(repoUrl, {
    cache: false,
    force: true,
    verbose: true,
});

emitter.on('info', (info) => {
    console.log(info.message);
});

emitter
    .clone(projectName)
    .then(() => {
        console.log('Project created successfully.');
        process.chdir(projectName);
        console.log('Installing dependencies...');
        execSync('npm install', { stdio: 'inherit' });
        console.log('Dependencies installed.');
        console.log('Running the development server...');
        execSync('npm run dev', { stdio: 'inherit' });
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
