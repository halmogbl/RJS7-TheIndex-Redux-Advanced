import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Action Creators
import * as actionCreators from "./store/actions";

class SearchBar extends Component {
  state = { query: "" };

  handleChange = event => {
    this.setState({ query: event.target.value });
    this.props.changeHandler(event.target.value);
  };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeHandler: query => dispatch(actionCreators.filterAuthors(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
