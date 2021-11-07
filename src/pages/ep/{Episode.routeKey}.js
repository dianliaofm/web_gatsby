import { graphql } from "gatsby"
import React from "react"
import App from "../../components/app"

const Episode = props => {
  const { title, image, url } = props.data.episode
  return (
    <App>
      <div>
        episode title:{title}, route key {props.params.routeKey}
      </div>
      <div>image: {image}</div>
      <div>url: {url}</div>
    </App>
  )
}

export default Episode

export const query = graphql`
  query ($id: String) {
    episode(id: { eq: $id }) {
      title
      image
      url
    }
  }
`
