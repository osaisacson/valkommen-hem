import React from 'react';

class ProgressDiscussed extends React.Component {

    // Then we add our constructor which receives our props
    constructor(props) {
        super(props);
        this.state = {
          list: [
            {   
              id: '1',
              stageName: 'Being Defined', 
              class: 'not-active',
            }
          ],
        };
      }

  render() {
      return (
          <div className="progress-section">              
              {this.state.list.map(item => (
                <div key={item.id} className="progress">{item.stageName}</div>
              ))}
          </div>
      )
  }
}

export default ProgressDiscussed;