import React from 'react';

class Progress extends React.Component {

    // Then we add our constructor which receives our props
    constructor(props) {
        super(props);
        this.state = {
          list: [
            {   
              id: '1',
              stageName: 'Defined', 
              class: 'not-active',
            },            
            {   
              id: '2',
              stageName: 'Agreed', 
              class: 'not-active',
            },            
            {   
              id: '3',
              stageName: 'Sent', 
              class: 'not-active',
            },            
            {   
              id: '4',
              stageName: 'Denied', 
              class: 'not-active',
            },
            {   
              id: '5',
              stageName: 'Rebel', 
              class: 'take-action',
            },
          ],
        };
      }

  render() {
    return (
          <div className="progress-section">              
              {this.state.list.map(item => (
                <div key={item.id} className={`progress ${item.class}`}>{item.stageName}</div>
              ))}
          </div>
      )
  }
}

export default Progress;