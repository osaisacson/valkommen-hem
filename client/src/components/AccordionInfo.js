import React from "react";
import CountUp from "react-countup";

class AccordionInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="accordion-info">
          <h6 className="tid">Förra månaden:</h6>{" "}
          <h6 className="nr">
            {this.props.lastMonth} {this.props.unit}
          </h6>
        </div>
        <div className="accordion-info">
          <h6 className="tid">Denna månaden:</h6>{" "}
          <h6 className="nr">
            <CountUp
              start={this.props.thisMonthStart}
              end={this.props.thisMonthEnd}
              delay={1}
              duration={this.props.thisMonthDuration}
              separator=" "
              redraw
            />{" "}
            {this.props.unit}
          </h6>
        </div>
        <div className="accordion-info">
          <h6 className="tid">Detta året:</h6>{" "}
          <h6 className="nr">
            <CountUp
              start={this.props.thisYearStart}
              end={this.props.thisYearEnd}
              delay={1}
              duration={this.props.thisYearDuration}
              separator=" "
              redraw
            />{" "}
            {this.props.unit}
          </h6>
        </div>
        <br></br>
        <blockquote className="blockquote mb-0 card-body">
          {this.props.quoteBefore}{" "}
          <strong>
            <CountUp
              start={this.props.quoteStart}
              end={this.props.quoteEnd}
              delay={1}
              duration={this.props.quoteDuration}
              separator=" "
              redraw
            />{" "}
            {this.props.quoteUnit}
          </strong>
          {this.props.quoteAfter}.
        </blockquote>
      </div>
    );
  }
}

export default AccordionInfo;
