import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react';
import CountUp from 'react-countup';

import vatten from './../vatten.png';
import fisk from './../fisk.png'; 
import jord from './../jord.png'; 
import lanabyta from './../lana-byta.png'; 
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
                start={1422092} end={1422230} delay={1} duration={2000} separator=" " redraw/>
                <span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown'/>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Förra mån: 122 542 liter</p>
          <p>Denna mån: <CountUp 
                start={12303} end={13370} delay={1} duration={17000} separator=" " redraw/> 
                liter</p>
          <p>Detta året: <CountUp 
                start={1422092} end={1422230} delay={1} duration={2000} separator=" " redraw/> 
                liter</p>
          <blockquote className="blockquote mb-0 card-body">
            <p>Vilket betyder att vi sparat <strong><CountUp 
                start={38434} end={39289} delay={1} duration={2000} separator=" " redraw/> kr</strong> hittills i år på att återvinna eget vatten.</p>
          </blockquote>
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
                <CountUp end={340562} duration={4} separator=" " redraw/>
                <span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>Förra mån: 56 340 liter</p>
          <p>Denna mån: 9453 liter</p>
          <p>Detta året: 340 562 liter</p>
          <blockquote className="blockquote mb-0 card-body">
            <p>Och genom det drygat ut vår vattenkonsumtion i år med <strong><CountUp 
                start={23} end={26} delay={1} duration={2000} separator=" " redraw/> %</strong></p>
          </blockquote>
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
          <p>Förra mån: 470 kg</p>
          <p>Denna mån: 380 kg</p>
          <p>Detta året: <CountUp start={3170} end={3240} duration={2000} separator=" " redraw/> kg</p>
          <blockquote className="blockquote mb-0 card-body">
            <p>Vilket annars skulle kostat <strong><CountUp 
                start={214670} end={215000} delay={1} duration={2000} separator=" " redraw/> kr</strong>.</p>
          </blockquote>
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
          <p>Förra mån: 6122 kg</p>
          <p>Denna mån: 5251 kg</p>
          <p>Detta året: 4710 kg</p>
          <blockquote className="blockquote mb-0 card-body">
            <p>Och genom det minskat vårt gemensamma c02 fotavtryck med <strong><CountUp 
               end={257} separator=" " redraw/> kg</strong>.</p>
          </blockquote>
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
                <CountUp end={21000} duration={4} separator=" " redraw/>
                <span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>Förra mån: 2770 liter</p>
          <p>Denna mån: 1453 liter</p>
          <p>Detta året: 21000 liter</p>
          <blockquote className="blockquote mb-0 card-body">
            <p>Helt gratis! Att köpa motsvarande mängd skulle kostat <strong><CountUp 
               end={5200} separator=" " redraw/> kr</strong>.</p>
          </blockquote>
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
                <CountUp end={145} duration={4} separator=" " redraw/>
                <span className="accordion-custom-title"> kg</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>Förra mån: 41 kg</p>
          <p>Denna mån: 23 kg</p>
          <p>Detta året: 145 kg</p>
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
                <CountUp start={70000} end={74000} delay={1} duration={16000} separator=" " redraw/>
                <span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>Förra mån: 5121 kWh</p>
          <p>Denna mån: 3251 kWh</p>
          <p>Detta året: <CountUp start={120210} end={124000} delay={1} duration={16000} separator=" " redraw/> kWh</p>
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
                <CountUp start={160000} end={180000} delay={1} duration={16000} separator=" " redraw/>
                <span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          <p>Förra mån: 5121 kWh</p>
          <p>Denna mån: 3251 kWh</p>
          <p>Detta året: <CountUp start={160000} end={180000} delay={1} duration={16000} separator=" " redraw/> kWh</p>
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
                <CountUp start={121500} end={122000} delay={1} duration={4000} separator=" " redraw/>
                <span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
          <p>Förra mån: 5121 kWh</p>
          <p>Denna mån: <CountUp start={3251} end={4182} delay={1} duration={19000} separator=" " redraw/> kWh</p>
          <p>Detta året: <CountUp start={121500} end={122000} delay={1} duration={4000} separator=" " redraw/> kWh</p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
