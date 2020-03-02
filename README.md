## React highlight text

A simple react component to highlight the first substring ocorence in a given text. Styling, trimming and use of case sensitive is also possible for the highlighted text.

`npm install -s @clertonraf/react-highlight-text`

```javascript
import React from 'react'
import HighlightText from '@clertonraf/react-highlight-text'

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
