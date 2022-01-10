import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:57665',
  cache: new InMemoryCache()
})

export default client
