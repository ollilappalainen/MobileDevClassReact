import React from 'react';

export default class Hello extends React.Component {
  render() {
    return (
      <div className="hello-container">
        <h1>Hello {this.props.name}! All good in the {this.props.location}?</h1>
      </div>
    );
  }
}