import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Production extends Component {
  // Then we add our constructor which receives our props
  constructor(props) {
    super(props);

    this.state = {
      neighbours: window.Dataset.neighbours,
      exchanges: window.Dataset.exchanges
    };
  }

  render() {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="one-line-spread"
          >
            <h4>Grannar</h4>
            <span className="badge badge-primary badge-pill">4</span>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul className="list-group list-group-flush">
                {this.state.neighbours.map(function(item) {
                  return (
                    <li
                      className="list-group-item one-line-left padding-top-bottom-10px"
                      key={item.id}
                    >
                      <img
                        src={item.profileImg}
                        alt={item.name}
                        className="avatar"
                      ></img>
                      <div>
                        <h4 className="no-margin">{item.name}</h4>
                        <p className="no-margin">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="2"
            className="one-line-spread"
          >
            <h4>Byta/Låna</h4>
            <span className="badge badge-primary badge-pill">2</span>
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul className="list-group list-group-flush">
                {this.state.exchanges.map(function(item) {
                  return (
                    <li
                      className="list-group-item one-line-left padding-top-bottom-10px"
                      key={item.id}
                    >
                      <div>
                        <h7 className="no-margin">{item.time}</h7>
                        <h4 className="no-margin">{item.title}</h4>
                        <p>{item.description}</p>
                        <Button variant="primary" className="float-right">
                          {" "}
                          <img
                            src={item.userImg}
                            alt={item.userName}
                            className="avatar"
                          ></img>
                          Svara {item.userName}
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
