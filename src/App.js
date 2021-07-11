import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toogler: true,
      img: "me.jpg",
      fullname: "Boudaya Khaled",
      bio: "learning Web devlp",
      profession: "futur Js Dev",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }
  toogle = () => {
    this.setState({
      toogler: !this.state.toogler,
      count: 0,
    });
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          border: "3px solid gray",
          width: "500px",
          marginLeft: "450px",
          height: "600px",
        }}
      >
        {this.state.toogler ? (
          <div style={{ marginTop: "50px" }}>
            <img
              style={{ width: "200px", height: "200px", marginTop: "-20px" }}
              src={this.state.img}
              alt=""
            />
            <h1>FullName: {this.state.fullname}</h1>
            <h1>Bio :{this.state.bio}</h1>
            <h1>Profession: {this.state.profession}</h1>
          </div>
        ) : (
          <h1 style={{ color: "red" }}>Welcome to my profile</h1>
        )}
        <Button
          style={{ marginLeft: "10px", marginTop: "20px" }}
          variant="dark"
          onClick={this.toogle}
        >
          Show Profile
        </Button>

        <h1 style={{ marginTop:'40px', color:'red'}}>
          Time :<span>{this.state.count}</span>
        </h1>
      </div>
    );
  }
}
export default App;
