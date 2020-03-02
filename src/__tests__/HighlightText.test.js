import React from 'react'
import { render } from '@testing-library/react'
import HighlightText from '../lib/HighlightText'
import '@testing-library/jest-dom'

describe('empty and/or nullable case', () => {
  describe('with empty data', () => {
    test('and no properties', () => {
      const { getByTestId } = render(
        <HighlightText />
      )
      expect(getByTestId('begin').textContent).toBe('')
      expect(getByTestId('highlighted').textContent).toBe('')
      expect(getByTestId('end').textContent).toBe('')
    })
  })
  describe('with one property', () => {
    test('but only text', () => {
      const { getByTestId } = render(
        <HighlightText text="The Lord of the rings: the return of the king" />
      )
      expect(getByTestId('begin').textContent).toBe('')
      expect(getByTestId('highlighted').textContent).toBe('')
      expect(getByTestId('end').textContent).toBe('The Lord of the rings: the return of the king')
    })
    test('but only highlight', () => {
      const { getByTestId } = render(
        <HighlightText highlight="Lord " />
      )
      expect(getByTestId('begin').textContent).toBe('')
      expect(getByTestId('highlighted').textContent).toBe('')
      expect(getByTestId('end').textContent).toBe('')
    })
  })
  describe('with nullable', () => {
    test('text and highlight', () => {
      const { getByTestId } = render(
        <HighlightText
          text={null}
          highlight={null}
        />
      )
      expect(getByTestId('begin').textContent).toBe('')
      expect(getByTestId('highlighted').textContent).toBe('')
      expect(getByTestId('end').textContent).toBe('')
    })
    test('text and valid highlight', () => {
      const { getByTestId } = render(
        <HighlightText
          text={null}
          highlight="Lord"
        />
      )
      expect(getByTestId('begin').textContent).toBe('')
      expect(getByTestId('highlighted').textContent).toBe('')
      expect(getByTestId('end').textContent).toBe('')
    })
    test('highlight and valid text', () => {
      const { getByTestId } = render(
        <HighlightText
          text="The Lord of the rings: the return of the king"
          highlight={null}
        />
      )
      expect(getByTestId('begin').textContent).toBe('The Lord of the rings: the return of the king')
      expect(getByTestId('highlighted').textContent).toBe('')
      expect(getByTestId('end').textContent).toBe('')
    })
  })
})

describe('standard case', () => {
  describe('with valid text highlighting', () => {
    test('in the beginning', () => {
      const { getByTestId } = render(
        <HighlightText
          text="The Lord of the rings: the return of the king"
          highlight="The"
        />
      )
      expect(getByTestId('begin').textContent).toBe('')
      expect(getByTestId('highlighted').textContent).toBe('The')
      expect(getByTestId('end').textContent).toBe(' Lord of the rings: the return of the king')
    })
    test('in the middle', () => {
      const { getByTestId } = render(
        <HighlightText
          text="The Lord of the rings: the return of the king"
          highlight="rings"
        />
      )
      expect(getByTestId('begin').textContent).toBe('The Lord of the ')
      expect(getByTestId('highlighted').textContent).toBe('rings')
      expect(getByTestId('end').textContent).toBe(': the return of the king')
    })
    test('in the end', () => {
      const { getByTestId } = render(
        <HighlightText
          text="The Lord of the rings: the return of the king"
          highlight="king"
        />
      )
      expect(getByTestId('begin').textContent).toBe('The Lord of the rings: the return of the ')
      expect(getByTestId('highlighted').textContent).toBe('king')
      expect(getByTestId('end').textContent).toBe('')
    })
  })
  describe('with invalid text highlighting', () => {
    test('and no matching', () => {
      const { getByTestId } = render(
        <HighlightText
          text="The Lord of the rings: the return of the king"
          highlight="kings"
        />
      )
      expect(getByTestId('begin').textContent).toBe('The Lord of the rings: the return of the king')
      expect(getByTestId('highlighted').textContent).toBe('')
      expect(getByTestId('end').textContent).toBe('')
    })
  })
})

describe('hightlight with', () => {
  test('case sensitiviness', () => {
    const { getByTestId } = render(
      <HighlightText
        text="The Lord of the rings: the return of the king"
        highlight="King"
        caseSensitive
      />
    )
    expect(getByTestId('begin').textContent).toBe('The Lord of the rings: the return of the king')
    expect(getByTestId('highlighted').textContent).toBe('')
    expect(getByTestId('end').textContent).toBe('')
  })
  test('no surrounding spaces - trimmed', () => {
    const { getByTestId } = render(
      <HighlightText
        text="The Lord of the rings: the return of the king"
        highlight=" return "
        trimHighlight
      />
    )
    expect(getByTestId('begin').textContent).toBe('The Lord of the rings: the ')
    expect(getByTestId('highlighted').textContent).toBe('return')
    expect(getByTestId('end').textContent).toBe(' of the king')
  })
})

describe('styling', () => {
  test('the highlighted text', () => {
    const { getByTestId } = render(
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
    )
    expect(getByTestId('begin').textContent).toBe('The Lord of the rings: the ')
    expect(getByTestId('begin')).not.toHaveStyle({
      backgroundColor: '#ff0',
      fontWeight: 'bold',
      fontSize: 'xx-large',
      textDecoration: 'underline',
      textDecorationStyle: 'dashed',
    })
    expect(getByTestId('highlighted').textContent).toBe('return')
    expect(getByTestId('highlighted')).not.toHaveStyle({
      backgroundColor: 'blue',
      display: 'none',
    })
    expect(getByTestId('highlighted')).toHaveStyle({
      backgroundColor: '#ff0',
      fontWeight: 'bold',
      fontSize: 'xx-large',
      textDecoration: 'underline',
      textDecorationStyle: 'dashed',
    })
    expect(getByTestId('end').textContent).toBe(' of the king')
    expect(getByTestId('end')).not.toHaveStyle({
      backgroundColor: '#ff0',
      fontWeight: 'bold',
      fontSize: 'xx-large',
      textDecoration: 'underline',
      textDecorationStyle: 'dashed',
    })
  })
})