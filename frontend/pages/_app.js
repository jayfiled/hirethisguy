import App, { Container } from "next/app";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";

class MyApp extends App {
  // 👇 Exposes the page number to props in a lifecycle method that runs before the render.
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps }/>
            {/* ^ I'll be the index.js and be replaced with whichever page you route to - need to be referenced in parent component by this.props.children*/}
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);