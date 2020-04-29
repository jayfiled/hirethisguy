import withApollo from 'next-with-apollo'; // <-- used to expose the client db 👇 to react, we need this because we are using next for SSR.
import ApolloClient from 'apollo-boost'; // <-- the db that gets created in the client
import { endpoint } from '../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  });
}

export default withApollo(createClient);
