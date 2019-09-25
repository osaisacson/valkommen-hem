import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import CountUp from 'react-countup';
import AccordionInfo from './../components/AccordionInfo';

import dataSet from './../dataset.js';

export default class Production extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      production: window.Dataset.production
    };
  }

  // handleClick = (e, titleProps) => {
  //   const { index } = titleProps;
  //   const { activeIndex } = this.state;
  //   const newIndex = activeIndex === index ? -1 : index;
  //   this.setState({ activeIndex: newIndex });
  // };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion styled>
        {this.state.production.map(function(item) {
          return (
            <div key={item.id}>
              <Accordion.Title
                active={activeIndex === item.id}
                index={item.id}
                // onClick={handleClick}
              >
                <div className="accordion-custom-trigger-section">
                  <img src={item.icon} className="logos" alt="logo" />
                  <div className="accordion-custom-title-countup-section">
                    <div className="accordion-custom-title">{item.title}</div>
                    <div className="accordion-custom-countup">
                      <CountUp
                        start={item.thisMonthStart}
                        end={item.thisMonthEnd}
                        duration={item.thisMonthDuration}
                        separator=" "
                        redraw
                      />
                      <span className="accordion-custom-title">
                        {' '}
                        {item.unit}{' '}
                      </span>
                    </div>
                  </div>
                  <Icon name="dropdown" />
                </div>
              </Accordion.Title>
              ;
              <Accordion.Content active={activeIndex === item.id}>
                <AccordionInfo
                  unit={item.unit}
                  lastMonth={item.lastMonth}
                  thisMonthStart={item.thisMonthStart}
                  thisMonthEnd={item.thisMonthEnd}
                  thisMonthDuration={item.thisMonthDuration}
                  thisYearStart={item.thisYearStart}
                  thisYearEnd={item.thisYearEnd}
                  thisYearDuration={item.thisYearDuration}
                  quoteBefore={item.quoteBefore}
                  quoteStart={item.quoteStart}
                  quoteEnd={item.quoteEnd}
                  quoteDuration={item.quoteDuration}
                  quoteUnit={item.quoteUnit}
                  quoteAfter={item.quoteAfter}
                />
              </Accordion.Content>
              ;
            </div>
          );
        })}
      </Accordion>
    );
  }
}
