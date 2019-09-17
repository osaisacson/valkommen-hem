import React from 'react';
import CountUp from 'react-countup';

class AccordionInfo extends React.Component {

  render() {
    return (
      <div>
        <div className="accordion-info">
        <p className="tid">Förra månaden:</p> <p className="nr">{this.props.lastMonth} {this.props.unit}</p>
        </div>
        <div className="accordion-info">
        <p className="tid">Denna månaden:</p> <p className="nr">
        <CountUp 
            start={this.props.thisMonthStart} end={this.props.thisMonthEnd} delay={1} duration={this.props.thisMonthDuration} separator=" " redraw/> {this.props.unit}
        </p>
        </div>
        <div className="accordion-info">
        <p className="tid">Detta året:</p> <p className="nr">
        <CountUp 
            start={this.props.thisYearStart} end={this.props.thisYearEnd} delay={1} duration={this.props.thisYearDuration} separator=" " redraw/> {this.props.unit}
        </p>
        </div>
        <blockquote className="blockquote mb-0 card-body">
        <p>{this.props.quoteBefore} <strong><CountUp 
            start={this.props.quoteStart} end={this.props.quoteEnd} delay={1} duration={this.props.quoteDuration} separator=" " redraw/> {this.props.quoteUnit}</strong>{this.props.quoteAfter}.</p>
        </blockquote>
    </div>
      )
  }
}

export default AccordionInfo;

