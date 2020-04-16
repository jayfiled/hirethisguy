import App, { Container } from "next/app";
import Page from "../components/Page";

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
          {/* ^ I'll be the index.js and be replaced with whichever page you route to - need to be referenced in parent component by this.props.children*/}
        </Page>
      </Container>
    );
  }
}

export default MyApp;
