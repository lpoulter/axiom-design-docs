import React from "react"
import PropTypes from "prop-types"
import PageHeading from "../axiom-docs/PageHeading"
import SectionTitle from "../axiom-docs/SectionTitle"
import ImageWithCopy from "../axiom-docs/ImageWithCopy"
import "./component-template.css"

export default function ComponentTemplate({
  title,
  mainIntroduction,
  sections,
}) {
  return (
    <div className="body">
      <PageHeading title={title} content={mainIntroduction} />
      {sections?.map(({ title, blocks, text }) => {
        return (
          <div className="section-title">
            <SectionTitle title={title} content={text} />
            {blocks?.map(({ title, text, image, align, imageWidth }) => (
              <div>
                <ImageWithCopy
                  title={title}
                  content={text}
                  img={image}
                  textAlign={align}
                  imageWidth={imageWidth}
                />
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

ComponentTemplate.propTypes = {
  title: PropTypes.string,
  mainIntroduction: PropTypes.string,
  sections: PropTypes.array,
}
