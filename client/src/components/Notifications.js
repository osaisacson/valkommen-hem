import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react';
import Badge from 'react-bootstrap/Badge';

export default class Notifications extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    var defaultBillText = (
      <div>
        <p>
          'Extinction rebellion introduced the following bill; which was read
          twice and referred to the Committee on (date sent).'
        </p>
        <h5>SEC. 1.</h5>
        <p>
          Short Title: Your bill will have an official title, but this is where
          you put the title you actually want your bill to be called (i.e. JOBS
          Act, PATRIOT Act, etc.)
        </p>
        <h5>SEC. 2.</h5>
        <p>
          (a) Explanation of terminology- Which terms need to be defined in
          order to understand the bill?
        </p>
        <p>
          (b) Not all terms will need to be defined. In fact, you may not need
          to define any terms.
        </p>
        <h5>SEC. 3.</h5>
        <p>
          What is the act going to do? Who is going to be involved / impacted /
          affected by the act?
        </p>
        <h5>SEC. 4.</h5>
        <p>
          How is the act going to be funded? Who is going to enforce /
          administer this act? (Which government agency will oversee the bill
          and its duties?).
        </p>
        <h5>SEC. 5.</h5>
        <p>
          Penalties (if any) for non-compliance (not following the rules) of the
          act
        </p>
        <h5>SEC. 6.</h5>
        <p>Enactment Date: When will the law go into effect?</p>
      </div>
    );

    this.state = {
      list: [
        {
          id: '1',
          mainTrigger:
            'Impose penalties on companies not meeting their c02 targets.',
          mainDescription: defaultBillText,
          secondTrigger: 'Background',
          secondDescription:
            'List of specific companies and their documented track record.',
          thirdTrigger: 'Articles',
          thirdDescription: 'List',
          fourthTrigger: 'Citations',
          fourthDescription: 'List',
          progressLevel: 3
        },
        {
          id: '2',
          mainTrigger: 'Ration fossil fuels to a set limit/capita.',
          mainDescription: defaultBillText,
          secondTrigger: 'Plan and timeline',
          secondDescription: 'The how and when.',
          thirdTrigger: 'Implementation',
          thirdDescription: 'List',
          fourthTrigger: 'Timeline',
          fourthDescription: 'List',
          progressLevel: 5
        },
        {
          id: '3',
          mainTrigger: 'Introduce tax breaks for railways.',
          mainDescription: defaultBillText,
          secondTrigger: 'Plan and timeline',
          secondDescription: 'The how and when.',
          thirdTrigger: 'Implementation',
          thirdDescription: 'List',
          fourthTrigger: 'Timeline',
          fourthDescription: 'List',
          progressLevel: 4
        },
        {
          id: '4',
          mainTrigger: 'Introduce tax for plastic packaging.',
          mainDescription: defaultBillText,
          secondTrigger: 'Plan and timeline',
          secondDescription: 'The how and when.',
          thirdTrigger: 'Implementation',
          thirdDescription: 'List',
          fourthTrigger: 'Timeline',
          fourthDescription: 'List',
          progressLevel: 2
        },
        {
          id: '5',
          mainTrigger: 'Ban plastic bags in all supermarkets.',
          mainDescription: defaultBillText,
          secondTrigger: 'Plan and timeline',
          secondDescription: 'The how and when.',
          thirdTrigger: 'Implementation',
          thirdDescription: 'List',
          fourthTrigger: 'Timeline',
          fourthDescription: 'List',
          progressLevel: 4
        }
      ]
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="notifications-custom-div">
        <Accordion styled>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <div className="header-and-badge">
              <div>Uppdateringar </div>
              <Badge variant="danger">2</Badge>
            </div>
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <div className="notification-custom">Basilika redo att hämtas</div>
            <div className="notification-custom warning">
              Din vattenkonsumtion är högre än vanligt
            </div>
          </Accordion.Content>
        </Accordion>
      </div>
    );
  }
}
