import React from "react"
import { Button } from "antd"
import Icon from "@ant-design/icons"

export const CircleButton = ({ style, children, ...rest }) => {
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

export const PlainButton = ({ children }) => {
  return (
    <Button
      shape="circle"
      size="large"
    >
      {children}
    </Button>
  )
}

export const CustomIconButton = ({ icon }) => (
  <PlainButton>
    <Icon
      component={icon}
    />
  </PlainButton>
)
