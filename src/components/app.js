import { hot } from 'react-hot-loader/root'
import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: red;
  font-size: 13em;
`

function App() {
  return <H1>Test Page</H1>
}

export default hot(App)
