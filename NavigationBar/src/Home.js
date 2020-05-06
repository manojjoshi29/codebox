import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    fetch("https://www.w3schools.com/angular/customers.php", {
      method: "GET"
    }).then(result => {
      result.json().then(resp => {
        this.setRecords(resp.records);
      });
    });
  }

  setRecords(data) {
    this.setState({
      list: data
    });
  }

  render() {
    const items = this.state.list.map((item, key) => (
      <li key={item.Name}>{item.Name}</li>
    ));
    return (
      <div>
        Hii ! Welcome to home page
        <hr />
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Home;
