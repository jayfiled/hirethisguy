import App, { Container } from "next/app";
import Page from "../components/Page";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
        </Page>
        {/* ^ I'll be the index.js and be replaced with whichever page you route to*/}
      </Container>
    );
  }
}

export default MyApp;
