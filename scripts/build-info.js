#!/usr/bin/env node
// Based on: https://gitlab.com/rippell/ngx-build-info/-/blob/master/ngx-build-info.js

const fs = require('fs'),
	exec = require('child_process').execSync,
	files = [],
	encoding = 'utf-8',
	gitData = exec('git log -1 --pretty=format:%H\\|%ct\\|%an\\|%ce\\|%D\\|%B')
		.toString()
		.split('|'),
	values = {
		buildTime: Date.now(),
		gitHash: gitData[0],
		gitHashShort: gitData[0].substr(0, 8),
		gitTimestamp: gitData[1],
		gitAuthorName: gitData[2],
		gitAuthorEmail: gitData[3],
		gitBranch: gitData[4].split(',')[0].substr(8),
		gitMessage: gitData[5].replace(/\r?\n|\r/g, ''),
	};

// Determine file name regex
let fileExp = 'index.html';
if (process.argv[2]) {
	if (process.argv[2] === 'main') {
		fileExp = 'main-.*.js';
	} else if (process.argv[2] === 'all') {
		fileExp = '[.html|.js]';
	} else if (process.argv[2] === 'all-html') {
		fileExp = '.html';
	} else {
		fileExp = process.argv[2];
	}
}

// Find all files to perform find/replace
let exp = new RegExp(fileExp, 'g');
const dir = './dist';
try {
	fs.readdirSync(`${dir}`).forEach(a => {
		const dirA = `${dir}/${a}`;
		try {
			fs.readdirSync(dirA).forEach(b => {
				const dirB = `${dirA}/${b}`;
				if (exp.test(b)) files.push(dirB);
			});
		} catch (e) {}
	});
} catch (e) {}

// Loop through files and replace
files.forEach(f => {
	const replaced = Object.keys(values).reduce(
		(contents, key) =>
			contents.replace(new RegExp('\\${' + key + '}', 'g'), values[key]),
		fs.readFileSync(f, encoding)
	);
	fs.writeFileSync(f, replaced, encoding);
});
