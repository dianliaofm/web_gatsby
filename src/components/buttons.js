import React from "react"
import { Button } from "antd"
import Icon from "@ant-design/icons"

export const CircleButton = ({ style, children, onClick, disabled }) => {
  return (
    <Button
      type="primary"
      shape="circle"
      size="large"
      style={{
        margin: 5,
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export const PlainButton = ({ children, onClick }) => {
  return (
    <Button shape="circle" size="large" onClick={onClick}>
      {children}
    </Button>
  )
}

export const CustomIconButton = ({ icon, onClick }) => (
  <PlainButton onClick={onClick}>
    <Icon component={icon} />
  </PlainButton>
)
