import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import HighlightText from '../lib/HighlightText';

export default {
  component: HighlightText,
  title: 'HighlightText',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Playground = () => (
  <HighlightText
    caseSensitive={boolean('caseSensitive', false, 'Case Sensitivity')}
    trimHighlight={boolean('trimHighlight', false, 'Trimming')}
    text={text('text', 'The lord of the rings: The return of the king', 'text')}
    highlight={text('highlight', 'Lord', 'highlight')}
    highlightStyle={
      {
        backgroundColor: '#ff0',
        fontWeight: 'bold',
        fontSize: 'xx-large',
        textDecoration: 'underline',
        textDecorationStyle: 'dashed',
      }
    }
    leftTextStyle={{ paddingRight: '5px' }}
    rightTextStyle={{ paddingLeft: '5px' }}
  />
);
