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

export default class AccordionCustom extends Component {
  state = { activeIndex: 0 }

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
        {/* <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={vatten} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Vattenåtervinning</div>
              <div className="accordion-custom-countup"><CountUp end={1422230} /><span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown' src={vatten} className="logos"/>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>Förra mån: 122 542 liter</p>
          <p>Denna mån: 13 370 liter</p>
          <p>Detta året: 1 422 230 liter</p>
        </Accordion.Content> */}

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={vatten} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Vattenåtervinning</div>
              <div className="accordion-custom-countup"><CountUp end={1422230} /><span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown'/>
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>Förra mån: 122 542 liter</p>
          <p>Denna mån: 13 370 liter</p>
          <p>Detta året: 1 422 230 liter</p>
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
              <div className="accordion-custom-countup"><CountUp end={340562} /><span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>Förra mån: 56 340 liter</p>
          <p>Denna mån: 9453 liter</p>
          <p>Detta året: 340 562 liter</p>
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
              <div className="accordion-custom-countup"><CountUp end={145} /><span className="accordion-custom-title"> kg</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>Förra mån: 41 kg</p>
          <p>Denna mån: 23 kg</p>
          <p>Detta året: 145 kg</p>
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
              <div className="accordion-custom-countup"><CountUp end={4210} /><span className="accordion-custom-title"> kg</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>Förra mån: 1200 kg</p>
          <p>Denna mån: 842 kg</p>
          <p>Detta året: 4210 kg</p>
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
              <div className="accordion-custom-countup"><CountUp end={44203} /><span className="accordion-custom-title"> liter</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>Förra mån: 23 370 liter</p>
          <p>Denna mån: 13 453 liter</p>
          <p>Detta året: 44, 000 liter</p>
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
              <div className="accordion-custom-countup"><CountUp end={145} /><span className="accordion-custom-title"> kg</span></div>
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
              <div className="accordion-custom-title">Energi</div>
              <div className="accordion-custom-countup"><CountUp end={55000} /><span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>Förra mån: 5121 kWh</p>
          <p>Denna mån: 3251 kWh</p>
          <p>Detta året: 55 000 kWh</p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 8}
          index={8}
          onClick={this.handleClick}
        >
          <div className="accordion-custom-trigger-section">
            <img src={odlingslampor} className="logos" alt="logo" />
            <div className="accordion-custom-title-countup-section">
              <div className="accordion-custom-title">Sollampor</div>
              <div className="accordion-custom-countup"><CountUp end={122000} /><span className="accordion-custom-title"> kWh</span></div>
            </div>
            <Icon name='dropdown' />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          (att uppdateras)
          <p>Förra mån: 5121 kWh</p>
          <p>Denna mån: 3251 kWh</p>
          <p>Detta året: 55 000 kWh</p>
        </Accordion.Content>
      </Accordion>
    )
  }
}
