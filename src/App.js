import { Component } from "react";

class App extends Component {
    render() {
      return (
        <div>
          <input type="text" onChange={this.save} />
          <br>
          </br>
          <button onClick={this.addUser}>Click Here to Add User </button>
          <br>
          </br>
          <br>
          </br>
          <div>
            <p1>
            {this.state.user.map((listItems, itemIndex) => {
              return<p2>User {itemIndex} : <span key={itemIndex}> {listItems}</span><br></br></p2> 
            })}
            </p1>
          </div> 
        </div>
      );
    }
    state = {
      user: [],
    };
    save = (e) => {
      this.setState({ input: e.target.value });
    };
    addUser = () => {
      let { user: newUser, input } = this.state;
      newUser.push(input);
      this.setState({user: newUser});
    };
  }
export default App;
