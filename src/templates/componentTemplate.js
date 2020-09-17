import React from "react"
import PropTypes from "prop-types"
import { Image, Heading, Strong, Paragraph } from "@brandwatch/axiom-components"
import Layout from "../components/Layout"

import "../pages/Blocks.css"
import "./componentTemplate.css"

function PageHeading({ title, content }) {
  return (
    <>
      <Heading textSize="display2" textColor="body">
        <Strong>{title}</Strong>
      </Heading>
      <Heading textSize="headtitle" textColor="subtle">
        {content}
      </Heading>
    </>
  )
}

function BlockTitle({ title }) {
  return (
    <Heading textSize="headtitle" textColor="body">
      {title}
    </Heading>
  )
}

function BlockText({ text }) {
  return <Paragraph textColor="subtle">{text}</Paragraph>
}

function ComponentSection({ title, text, image, align, imageWidth }) {
  if (!text && imageWidth === "full") {
    return (
      <div className="block--full">
        <Image src={image} width="100%"></Image>
      </div>
    )
  }

  if (align === "left") {
    return (
      <>
        <div className="block--half">
          <BlockTitle title={title} />
          <BlockText text={text} />
        </div>

        <div className="block--half">
          <Image src={image}></Image>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="block--half">
        <Image src={image}></Image>
      </div>

      <div className="block--half">
        <BlockTitle title={title} />
        <BlockText text={text} />
      </div>
    </>
  )
}

export default function ComponentTemplate({
  title,
  mainIntroduction,
  sections,
}) {
  return (
    <Layout>
      <div className="component-page">
        <div className="block-layout">
          <div className="block--full">
            <PageHeading title={title} content={mainIntroduction} />
          </div>
          {sections?.map(({ title, blocks, text }) => {
            return (
              <>
                <div className="block--full">
                  <Heading textSize="headline">
                    <Strong>{title}</Strong>
                  </Heading>
                  <p>{text}</p>
                </div>
                {blocks?.map(block => (
                  <ComponentSection {...block} />
                ))}
              </>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

ComponentTemplate.propTypes = {
  title: PropTypes.string,
  mainIntroduction: PropTypes.string,
  sections: PropTypes.array,
}
