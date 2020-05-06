import React, { Component } from "react";

class Product extends Component {
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
      <tr key={item.Name}>
        <td> {item.Name}</td>
        <td> {item.City}</td>
        <td>{item.Country}</td>
      </tr>
    ));
    return (
      <div>
        <table border="2px">
          <tr>
            <th>NAME</th>
            <th>CITY</th>
            <th>COUNTRY</th>
          </tr>
          {items}
        </table>
      </div>
    );
  }
}

export default Product;
