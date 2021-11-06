import React from "react"
import { Button } from "antd"

const CircleButton = ({ style, children, ...rest }) => {
  return (
    <Button
      type="primary"
      shape="circle"
      size="large"
      style={{
        margin: 5,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default CircleButton

export const PlainButton = ({ style, children, ...rest }) => {
  return (
    <Button
      shape="circle"
      size="large"
      style={{
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
