## React Word Highlighter

A simple react component to highlight the first substring ocorrence in a given text. Styling, trimming and use of case sensitive is also possible for the highlighted text.

`npm install -s react-word-highlighter`

```javascript
import React from 'react'
import HighlightText from 'react-word-highlighter'

export default () => {
  <HighlightText
    text="The Lord of the rings: the return of the king"
    highlight=" return "
    trimHighlight
    highlightStyle={
      {
        backgroundColor: '#ff0',
        fontWeight: 'bold',
        fontSize: 'xx-large',
        textDecoration: 'underline',
        textDecorationStyle: 'dashed',
      }
    }
  />
}
```
