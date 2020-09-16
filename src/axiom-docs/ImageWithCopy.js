import React from "react"

import {
  Base,
  Heading,
  Grid,
  GridCell,
  Image,
  Strong,
  Paragraph,
} from "@brandwatch/axiom-components"

import "./axiom-docs.css"

export default function ImageWithCopy({
  textAlign = "right",
  title,
  content,
  img,
}) {
  function ImageBlock() {
    return (
      <Base className="image-block">
        <Image src={img}></Image>
      </Base>
    )
  }

  function ContentBlock() {
    const formattedContent = content?.split("\n") || []
    return (
      <Base className="content-block">
        <Heading textSize="headtitle">
          <Strong>{title}</Strong>
        </Heading>
        {formattedContent.map(content => (
          <Paragraph>{content}</Paragraph>
        ))}
      </Base>
    )
  }
  const getBlockContent = () => {
    if (textAlign === "left") {
      return (
        <>
          <GridCell>
            <ContentBlock />
          </GridCell>
          <GridCell>
            <ImageBlock />
          </GridCell>
        </>
      )
    }

    return (
      <>
        <GridCell>
          <ImageBlock />
        </GridCell>
        <GridCell>
          <ContentBlock />
        </GridCell>
      </>
    )
  }

  return (
    <Base className="image-with-copy-container">
      <Grid>{getBlockContent()}</Grid>
    </Base>
  )
}
