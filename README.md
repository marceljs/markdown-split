# markdown-sections

An extension to Markdown to split the content into sections / pages.

## Markdown Sections

This:

```md

§ Optional Section Name

# Some heading

Some content.

§

This section is anonymous.
```

is parsed to this:

```js

{
  sections: [
    { name: 'Optional Section Name', content: '...'},
    { content: '...' }
  ]
}

```
