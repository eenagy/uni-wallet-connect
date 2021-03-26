import styled from 'styled-components'
import { Layout } from '../components/layouts/DefaultLayout'

const Title = styled.h1`
  font-size: 50px;
`

export default function Home() {
  return <Layout><Title>My page</Title></Layout>
}