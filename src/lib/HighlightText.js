import React from "react"
import PropTypes from "prop-types"

const HighlightText = ({
  caseSensitive,
  highlight,
  highlightStyle,
  leftTextStyle,
  rightTextStyle,
  text,
  trimHighlight,
}) => {
  const trimmedHighlight = trimHighlight ? highlight.trim() : highlight
  const index = !!caseSensitive
    ? text && text.indexOf(trimmedHighlight)
    : text && text.toUpperCase().indexOf(trimmedHighlight && trimmedHighlight.toUpperCase())
  const begin = text && text.slice(0, index >= 0 ? index : text.length)
  const highlighted = text && text.slice(index, index >= 0 ? index + trimmedHighlight.length : index)
  const end = text && text.slice(index >= 0 ? index + trimmedHighlight.length : text.length)
  return (
    <>
      <span data-testid="begin" style={leftTextStyle}>{ begin }</span>
      <span data-testid="highlighted" style={highlightStyle}>{ highlighted }</span>
      <span data-testid="end" style={rightTextStyle}>{ end }</span>
    </>
  )
}

HighlightText.defaultProps = {
  caseSensitive: false,
  highlight: '',
  highlightStyle: null,
  leftTextStyle: null,
  rightTextStyle: null,
  text: '',
  trimHighlight: false,
}

HighlightText.propTypes = {
  caseSensitive: PropTypes.bool,
  highlight: PropTypes.string,
  highlightStyle: PropTypes.objectOf(PropTypes.string.isRequired),
  leftTextStyle: PropTypes.objectOf(PropTypes.string.isRequired),
  rightTextStyle: PropTypes.objectOf(PropTypes.string.isRequired),
  text: PropTypes.string,
  trimHighlight: PropTypes.bool,
}

export default HighlightText
