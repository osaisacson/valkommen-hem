import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react';
import CountUp from 'react-countup';
import AccordionInfo from './../components/AccordionInfo';

import vatten from './../vatten.png';
import fisk from './../fisk.png'; 
import jord from './../jord.png'; 
import naringslosning from './../naringslosning.png'; 
import odling from './../odling.png'; 
import odlingslampor from './../odlingslampor.png'; 
import regn from './../regn.png'; 
import solel from './../solel.png'; 

export default class Production extends Component {

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
            mainTrigger: 'Impose penalties on companies not meeting their c02 targets.', 
            mainDescription: defaultBillText,
            secondTrigger: 'Background',
            secondDescription: 'List of specific companies and their documented track record.',
            thirdTrigger: 'Articles',
            thirdDescription: 'List',
            fourthTrigger: 'Citations',
            fourthDescription: 'List',
            progressLevel: 3,
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
            progressLevel: 5,
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
            progressLevel: 4,
        },            {   
            id: '4',
            mainTrigger: 'Introduce tax for plastic packaging.', 
            mainDescription: defaultBillText,
            secondTrigger: 'Plan and timeline',
            secondDescription: 'The how and when.',
            thirdTrigger: 'Implementation',
            thirdDescription: 'List',
            fourthTrigger: 'Timeline',
            fourthDescription: 'List',
            progressLevel: 2,
        },            {   
            id: '5',
            mainTrigger: 'Ban plastic bags in all supermarkets.', 
            mainDescription: defaultBillText,
            secondTrigger: 'Plan and timeline',
            secondDescription: 'The how and when.',
            thirdTrigger: 'Implementation',
            thirdDescription: 'List',
            fourthTrigger: 'Timeline',
            fourthDescription: 'List',
            progressLevel: 4,
        },
      ],
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={vatten} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Vattenåtervinning</div>
              <div className="accordion-custom-countup">
                <CountUp 
                start={1422092} end={1422230} duration={2000} separator=" " redraw/>
                <span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown'/>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        <AccordionInfo
          unit='liter'
          lastMonth='122542'
          thisMonthStart='12303'
          thisMonthEnd='13370'
          thisMonthDuration='17000'
          thisYearStart='1422092'
          thisYearEnd='1422230'
          thisYearDuration='2000'
          quoteBefore='Vilket betyder att vi sparat '
          quoteStart='1422092'
          quoteEnd='1422230'
          quoteDuration='2000'
          quoteUnit='liter'
          quoteAfter=' hittills i år på att återvinna eget vatten'
        />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={regn} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Regnvatten</div>
              <div className="accordion-custom-countup">
                <CountUp end={340562} duration={3} separator=" " redraw/>
                <span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        <AccordionInfo
          unit='liter'
          lastMonth='56340'
          thisMonthStart='0'
          thisMonthEnd='9453'
          thisMonthDuration='3'
          thisYearStart='0'
          thisYearEnd='340562'
          thisYearDuration='3'
          quoteBefore='Och genom det drygat ut vår vattenförsöjning i år med '
          quoteStart='23'
          quoteEnd='26'
          quoteDuration='2000'
          quoteUnit='%'
        />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={fisk} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Fisk</div>
              <div className="accordion-custom-countup">
                <CountUp start={3170} end={3240} duration={2000} separator=" " redraw/>
                <span className="accordion-custom-title"> kg</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
        <AccordionInfo
          unit='kg'
          lastMonth='470'
          thisMonthStart='0'
          thisMonthEnd='380'
          thisMonthDuration='3'
          thisYearStart='0'
          thisYearEnd='3240'
          thisYearDuration='2000'
          quoteBefore='Vilket motsvarar ett värde av '
          quoteStart='650000'
          quoteEnd='675000'
          quoteDuration='2000'
          quoteUnit='kr'
        />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={odling} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Odling</div>
              <div className="accordion-custom-countup">
                <CountUp end={4710} duration={4} separator=" " redraw/>
                <span className="accordion-custom-title"> kg</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
        <AccordionInfo
          unit='kg'
          lastMonth='612'
          thisMonthStart='0'
          thisMonthEnd='525'
          thisMonthDuration='3'
          thisYearStart='0'
          thisYearEnd='4710'
          thisYearDuration='4'
          quoteBefore='Och genom det minskat vår gemensamma CO2 med '
          quoteStart='0'
          quoteEnd='250'
          quoteDuration='3'
          quoteUnit='kg'
          quoteAfter='. Läs mer om detta här'
        />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={naringslosning} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Näringslösning</div>
              <div className="accordion-custom-countup">
                <CountUp end={21000} duration={3} separator=" " redraw/>
                <span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
        <AccordionInfo
          unit='liter'
          lastMonth='2770'
          thisMonthStart='0'
          thisMonthEnd='1453'
          thisMonthDuration='3'
          thisYearStart='0'
          thisYearEnd='21000'
          thisYearDuration='3'
          quoteBefore='Att köpa motsvarande mängd skulle kostat '
          quoteStart='0'
          quoteEnd='5200'
          quoteDuration='3'
          quoteUnit='kr'
        />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={jord} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Jord</div>
              <div className="accordion-custom-countup">
                <CountUp end={145} duration={3} separator=" " redraw/>
                <span className="accordion-custom-title"> kg</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
        <AccordionInfo
          unit='kg'
          lastMonth='41'
          thisMonthStart='0'
          thisMonthEnd='23'
          thisMonthDuration='3'
          thisYearStart='0'
          thisYearEnd='145'
          thisYearDuration='3'
          quoteBefore='Skapat av '
          quoteStart='0'
          quoteEnd='6731'
          quoteDuration='3'
          quoteUnit='kg'
          quoteAfter=' råmaterial'
        />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 7}
          index={7}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={solel} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Energiproduktion</div>
              <div className="accordion-custom-countup">
                <CountUp start={70000} end={74000} duration={16000} separator=" " redraw/>
                <span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
        <AccordionInfo
          unit='kWh'
          lastMonth='5121'
          thisMonthStart='0'
          thisMonthEnd='3251'
          thisMonthDuration='3'
          thisYearStart='70000'
          thisYearEnd='74000'
          thisYearDuration='16000'
          quoteBefore='Motvarande laddningen av'
          quoteStart='0'
          quoteEnd='123'
          quoteDuration='3'
          quoteAfter=' elbilar dagligen i ett år'
        />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={solel} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Energikonsumtion</div>
              <div className="accordion-custom-countup">
                <CountUp start={160000} end={180000} duration={16000} separator=" " redraw/>
                <span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
        <AccordionInfo
          unit='kWh'
          lastMonth='8421'
          thisMonthStart='0'
          thisMonthEnd='5982'
          thisMonthDuration='3'
          thisYearStart='160000'
          thisYearEnd='180000'
          thisYearDuration='16000'
          quoteBefore='Motvarande'
          quoteStart='1234'
          quoteEnd='2245'
          quoteDuration='2000'
          quoteAfter=' lampor konstant tända i ett år'
        />
        </Accordion.Content>


        <Accordion.Title
          active={activeIndex === 9}
          index={9}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={odlingslampor} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Sollampor</div>
              <div className="accordion-custom-countup">
                <CountUp start={121500} end={122000} duration={4000} separator=" " redraw/>
                <span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
        <AccordionInfo
          unit='kWh'
          lastMonth='5121'
          thisMonthStart='3251'
          thisMonthEnd='4182'
          thisMonthDuration='19000'
          thisYearStart='121500'
          thisYearEnd='122000'
          thisYearDuration='4000'
          quoteBefore='Varav'
          quoteStart='0'
          quoteEnd='43'
          quoteDuration='3'
          quoteUnit='%'
          quoteAfter=' är täckt av vår egen elproduktion'
        />
        </Accordion.Content>
      </Accordion>
    )
  }
}
