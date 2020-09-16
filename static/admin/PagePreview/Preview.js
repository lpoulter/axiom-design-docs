import React from "react"
import PropTypes from "prop-types"
import ComponentTemplate from "../../../src/templates/ComponentTemplate"

export default function Preview(props) {
  // Netlify CMS uses Immutable.js
  const { title, main_introduction, sections } = props.entry
    .getIn(["data"])
    .toJS()

  return (
    <ComponentTemplate
      title={title}
      mainIntroduction={main_introduction}
      sections={sections}
    />
  )
}

Preview.propTypes = {
  value: PropTypes.node,
}
