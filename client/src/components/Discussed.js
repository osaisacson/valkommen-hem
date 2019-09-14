import React from 'react';

import Collapsible from './Collapsible.js';
import SectionHeader from './SectionHeader';
import ProgressDiscussed from './ProgressDiscussed';
import Voting from './Voting';

class Discussed extends React.Component {

    // Then we add our constructor which receives our props
    constructor(props) {
        super(props);

        var defaultBillText =
            <div>
                <p>'Extinction rebellion introduced the following bill; which was read twice and referred to the Committee on (date sent).'</p>
                <h5>SEC. 1.</h5>
                <p>Short Title: Your bill will have an official title, but this is where you put the title you actually want your bill to be called (i.e. JOBS Act, PATRIOT Act, etc.)</p>
                <h5>SEC. 2.</h5>
                <p>(a) Explanation of terminology- Which terms need to be defined in order to understand the bill?</p>
                <p>(b) Not all terms will need to be defined. In fact, you may not need to define any terms.</p>
                <h5>SEC. 3.</h5>
                <p>What is the act going to do? Who is going to be involved / impacted / affected by the act?</p>
                <h5>SEC. 4.</h5>
                <p>How is the act going to be funded? Who is going to enforce / administer this act? (Which government agency will oversee the bill and its duties?).</p>
                <h5>SEC. 5.</h5>
                <p>Penalties (if any) for non-compliance (not following the rules) of the act</p>
                <h5>SEC. 6.</h5>
                <p>Enactment Date: When will the law go into effect?</p>
            </div>
            
        this.state = {
          list: [
            {   
                id: '1',
                mainTrigger: 'How about this', 
                mainDescription: defaultBillText,
                secondTrigger: 'Companies',
                secondDescription: 'List of specific companies and their documented track record.',
                thirdTrigger: 'Articles',
                thirdDescription: 'List',
                fourthTrigger: 'Citations',
                fourthDescription: 'List',
            },
            {   
                id: '2',
                mainTrigger: 'How about that', 
                mainDescription: defaultBillText,
                secondTrigger: 'Plan and timeline',
                secondDescription: 'The how and when.',
                thirdTrigger: 'Implementation',
                thirdDescription: 'List',
                fourthTrigger: 'Timeline',
                fourthDescription: 'List',
            },            {   
                id: '3',
                mainTrigger: 'What about that', 
                mainDescription: defaultBillText,
                secondTrigger: 'Plan and timeline',
                secondDescription: 'The how and when.',
                thirdTrigger: 'Implementation',
                thirdDescription: 'List',
                fourthTrigger: 'Timeline',
                fourthDescription: 'List',
            },            {   
                id: '4',
                mainTrigger: 'What about this', 
                mainDescription: defaultBillText,
                secondTrigger: 'Plan and timeline',
                secondDescription: 'The how and when.',
                thirdTrigger: 'Implementation',
                thirdDescription: 'List',
                fourthTrigger: 'Timeline',
                fourthDescription: 'List',
            },            {   
                id: '5',
                mainTrigger: 'How about it', 
                mainDescription: defaultBillText,
                secondTrigger: 'Plan and timeline',
                secondDescription: 'The how and when.',
                thirdTrigger: 'Implementation',
                thirdDescription: 'List',
                fourthTrigger: 'Timeline',
                fourthDescription: 'List',
            },
          ],
        };
      }

      render() {
        return (
            <div>
              <SectionHeader firstHeader="Discussed" secondHeader="Top 5 currently being defined. Basically, if the demand is suggested to be a bill then we need to make it into the format of a bill. Add suggested improvements, if 20 people agree then it will be automatically included as an update." />
  
              {this.state.list.map(item => (
              <div key={item.id} className="single-accordion-section">
                  <Voting />
                  <div className="progress-and-accordion-section">
                      <ProgressDiscussed level={item.progressLevel} />
                      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger={item.mainTrigger}>
                        <p>{item.mainDescription}</p>
                        <Collapsible trigger={item.secondTrigger} open={true}>
                            <p>{item.secondDescription}</p>
                            <Collapsible trigger={item.thirdTrigger}><p>{item.thirdDescription}</p></Collapsible>
                            <Collapsible trigger={item.fourthTrigger}><p>{item.fourthDescription}</p></Collapsible>
                        </Collapsible>
                    </Collapsible>
                  </div>
              </div>
              ))}
            </div>
        )
    }
  }

export default Discussed;