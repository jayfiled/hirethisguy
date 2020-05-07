import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

class CreateItem extends Component {
  state = {
    title: "Rubber band",
    description: "Elasticity",
    price: 1000,
    image: "band.png",
    largeImage: "lrgBand.png",
  };

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    const { title, price, description } = this.state;
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={title}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
      </Form>
    );
  }
}

export default CreateItem;
