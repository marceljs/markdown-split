const section_regex = /^\s*§(?:\s+(.+?))?\s*$/;

module.exports = function(content) {

	var lines = content.split(/\n/);
	var result = [], match, section, content = '', item;

	lines.forEach(function(line) {
		match = line.match(section_regex);
		if (match) {
			// new section encountered
			if (content = content.trim()) {
				item = { content: content };
				if (section) item.name = section;
				result.push(item);
			}
			section = match[1];
			content = '';
		} else {
			// content of a section
			content += '\n' + line;
		}
	});

	if ((content = content.trim()) || section) {
		item = { content: content };
		if (section) item.name = section;
		result.push(item);
	}

	return result;
};