import PropTypes from "prop-types"
import React from "react"
import PageHeading from "../../../src/axiom-docs/PageHeading"
import SectionTitle from "../../../src/axiom-docs/SectionTitle"
import ImageWithCopy from "../../../src/axiom-docs/ImageWithCopy"

function ComponentTemplate({ component_name, main_introduction, sections }) {
  return (
    <div className="body">
      <PageHeading title={component_name} content={main_introduction} />
      {sections?.map(({ title, blocks, text }) => {
        return (
          <div className="section-title">
            <SectionTitle title={title} content={text} />
            {blocks.map(({ title, text, image }) => (
              <div>
                <ImageWithCopy title={title} content={text} img={image} />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

ComponentTemplate.propTypes = {
  component_name: PropTypes.string,
  main_introduction: PropTypes.string,
  sections: PropTypes.array,
}

export default function Preview(props) {
  // Netlify CMS uses Immutable.js
  const data = props.entry.getIn(["data"]).toJS()

  return <ComponentTemplate {...data} />
}

Preview.propTypes = {
  value: PropTypes.node,
}
