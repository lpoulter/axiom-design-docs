import React from "react"
import PropTypes from "prop-types"

function Layout({ children }) {
  return <div className="ax-theme--day">{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
