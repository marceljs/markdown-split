# markdown-split

Split a Markdown file (or any kind of plain-text file) in sections marked by the <kbd>§</kbd> character.

## Installation

```bash
npm install markdown-split
```

## Usage

```js
let split = require('markdown-split');

let content = `
§ First section

Content of the first section.

§ Second section

Content of the second section.
`;

let sections = split(content);

console.log(sections);

```

This should produce the following output: 

```js
[
	{
		name: 'First section',
		content: 'Content of the first section'
	},
	{
		name: 'Second section',
		content: 'Content of the second section'
	}
]
```

### Notes

If the <kbd>§</kbd> character is not followed by a section name, the `name` property of that section will not be present in the output.

## How to produce the <kbd>§</kbd> character

If you don't already have it on your keyboard, [this Wikipedia page](https://en.wikipedia.org/wiki/Section_sign#Keyboard_entry) lists the key combinations to produce the <kbd>§</kbd> character on a variety of keyboards.

