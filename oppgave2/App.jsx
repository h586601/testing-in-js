import React from "react";
import PropTypes from "prop-types";

const App = (props) => {
  return (
    <div>
      <p>Hello {props.name}!</p>
      <p>Please sign in.</p>
      <form>
        <label for="username">Username: </label><input id="username" placeholder="username"></input>
        <input placeholder="password" type="password"></input>
        <button>{props.name}</button>
      </form>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
}

App.defaultProps = {
  name: "Unknown Employee",
}

export default App
