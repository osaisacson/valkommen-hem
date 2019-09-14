import React, { Component } from 'react';

class SectionHeader extends Component {

  render() {

    return(
        <div>
          <div className="section-header">
            <h3>{this.props.firstHeader}</h3>
            <p>{this.props.secondHeader}</p>
          </div>
        </div>
    );
  }
}

export default SectionHeader;
