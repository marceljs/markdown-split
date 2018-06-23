let tape = require('tape');
let sections = require('../src/index');
let fg = require('fast-glob');
let path = require('path');
let fs = require('fs');

fg.sync('*.md', { cwd: 'test/input' }).forEach(
	input => {
		tape(`input: ${input}`, test => {
			test.deepEqual(
				sections(
					fs.readFileSync(path.join('test/input', input), 'utf8')
				),
				JSON.parse(
					fs.readFileSync(path.join('test/output', input.replace(/md$/, 'json')), 'utf8')
				)
			)
			test.end();
		})
	}
)