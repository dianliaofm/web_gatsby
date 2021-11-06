import React from "react"
import { Col } from "antd"

const CenterCol = ({ style, children, ...rest }) => (
  <Col
    {...rest}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...style,
    }}
  >
    {children}
  </Col>
)

export default CenterCol
