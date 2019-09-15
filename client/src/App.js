import React from 'react';
import './sass/main.scss';
import axios from 'axios';

import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Collapsible from './components/Collapsible.js';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';

import bilpool from './bilpool.png'; 
import fisk from './fisk.png'; 
import jord from './jord.png'; 
import lanabyta from './lana-byta.png'; 
import naringslosning from './naringslosning.png'; 
import odling from './odling.png'; 
import odlingslampor from './odlingslampor.png'; 
import regn from './regn.png'; 
import solel from './solel.png'; 
import vatten from './vatten.png'; 


// import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

function App() {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    // axios.get('/api?user=osaisacson') //sets query for which user data to get
    axios.get('/api')
    .then(response => {
      setUser(response.data)
    })

  }, [])

  const data = [
    {x: 0, y: 6},
    {x: 1, y: 7},
    {x: 2, y: 6},
    {x: 3, y: 7},
    {x: 4, y: 8},
    {x: 5, y: 7},
    {x: 6, y: 7},
    {x: 7, y: 8},
    {x: 8, y: 9},
    {x: 9, y: 8}
  ];

  const [show, setShow] = React.useState(true);
  const [show, setShow2] = React.useState(true);

  return user && (
    <div className="App">
      <header className="one-line-spread">
        <img src={'/logo.png'} className="logo" alt="logo" />
        <div className="header-title">
          <h2>Välkommen hem till</h2>
          <h1>Resilienshus Floda</h1>
        </div>
      </header>

      <div className="header-and-badge">
        <div>Uppdateringar </div> 
        <Badge variant="danger">5</Badge>
      </div>

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Hem">
      <h3>Aktuell produktion</h3>
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Vattenåtervinning - 1 422 230 liter'>
      <div className="stats-and-icon">
          <img src={vatten} className="logos" alt="logo" />
          <div>
          <p>Förra mån: 122 542 liter</p>
          <p>Denna mån: 13 370 liter</p>
          <p>Detta året: 1 422 230 liter</p>
          </div>
        </div>
      </Collapsible>

      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Regnvatten - 340 562 liter'>
        <div className="stats-and-icon">
          <img src={regn} className="logos" alt="logo" />
            <div>
            <p>Förra mån: 56 340 liter</p>
            <p>Denna mån: 9453 liter</p>
            <p>Detta året: 340 562 liter</p>
            </div>
        </div>
      </Collapsible>

      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Energi - 55 000 kWh'>
      <div className="stats-and-icon">
          <img src={solel} className="logos" alt="logo" />
          <div>
          <p>Förra mån: 5121 kWh</p>
          <p>Denna mån: 3251 kWh</p>
          <p>Detta året: 55 000 kWh</p>
          </div>
        </div>
      </Collapsible>

      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Näring - 44 203 liter'>
      <div className="stats-and-icon">
          <img src={naringslosning} className="logos" alt="logo" />
          <div>
          <p>Förra mån: 23 370 liter</p>
          <p>Denna mån: 13 453 liter</p>
          <p>Detta året: 44, 000 liter</p>
          </div>
        </div>
      </Collapsible>

      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Jord - 145 kg'>
      <div className="stats-and-icon">
          <img src={jord} className="logos" alt="logo" />
          <div>
          <p>Förra mån: 41 kg</p>
          <p>Denna mån: 23 kg</p>
          <p>Detta året: 145 kg</p>
          </div>
        </div>
      </Collapsible>

      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Bladgrönt - 4210 kg'>
      <div className="stats-and-icon">
          <img src={odling} className="logos" alt="logo" />
          <div>
          <p>Förra mån: 1200 kg</p>
          <p>Denna mån: 842 kg</p>
          <p>Detta året: 4210 kg</p>
          </div>
        </div>
      </Collapsible>

      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Fisk - 145 kg'>
      <div className="stats-and-icon">
          <img src={fisk} className="logos" alt="logo" />
          <div>
          <p>Förra mån: 41 kg</p>
          <p>Denna mån: 23 kg</p>
          <p>Detta året: 145 kg</p>
          </div>
        </div>
      </Collapsible>
    
      </Tab>
      
      <Tab eventKey="harvest" title="Skörd">
      <CardColumns>
  <Card>
    <Card.Img src="https://images.unsplash.com/photo-1508595165502-3e2652e5a405?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Basilika</Card.Title>
      <Card.Text>Extra söt denna veckan!</Card.Text>
      <Button variant="primary">Boka</Button>
      </Card.ImgOverlay>
  </Card>

  <Card>
    <Card.Img src="https://images.unsplash.com/photo-1508061461508-cb18c242f556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Pak Choi</Card.Title>
      <Card.Text>Stek upp med veckans vårlök</Card.Text>
      <Button variant="primary">Boka</Button>
      </Card.ImgOverlay>
  </Card>

  <Card>
    <Card.Img src="https://images.unsplash.com/photo-1528796940112-4979b4a98424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Koriander</Card.Title>
      <Button variant="primary">Boka</Button>
      </Card.ImgOverlay>
  </Card>
  <Card bg="primary" text="white" className="text-center p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>Än så länge har du ätit 56kg hemodlat i år, och genom det minskat ditt c02 avtryck med <strong>25kg</strong>.</p>
    </blockquote>
  </Card>
</CardColumns>

     
      </Tab>
      <Tab eventKey="water" title="Välj">

      <Alert show={show} variant="success">
        <Alert.Heading>Föreslagen ny gröda: Mikroblad!</Alert.Heading>
        <Image src="https://images.unsplash.com/photo-1536630596251-b12ba0d9f7d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Card image" fluid />
        <p>
        Microblad är en relativt ny företeelse i Sverige - det är plantor som skördas när det första paret med riktiga blad syns. De har ett väldigt högt näringsvärde med studier som visat att dessa plantor trots sin ringa storlek har ett 4-40 gånger högre näringsinnehåll än den färdigvuxna salladen (beroende på näringsämne).
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Ja, jag tycker vi ska odla mikrogreens!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Du har tyckt till och sagt du vill vi ska odla mikroblad, klicka här om du vill ändra dig</Button>}

      <Alert show={show} variant="success">
        <Alert.Heading>Föreslagen ny aktivitet: Bilfri tisdag!</Alert.Heading>
        <Image src="https://images.unsplash.com/photo-1533650936805-912836eda0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Card image" fluid />
        <p>Om alla i huset inte åker bil en dag i veckan skulle vi dra ner vårt gemensamma c02 med 145kg/år.</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow2(false)} variant="outline-success">
            Ja, jag är med. Ingen bil på tisdagar!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow2(true)}>Du har tyckt till och sagt du skippar bilen på tisdagar, klicka här om du vill ändra dig</Button>}
      </Tab>
      <Tab eventKey="neighbours" title="Grannar">
        <p>Alla mina grannar</p>

      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Låna socker'>
          <p>lista av folk som vill låna socker</p>
      </Collapsible>
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Byta tjänster'>
          <p>lista av folk som vill ha barnvakt</p>
      </Collapsible>
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Aktiviteter'>
          <p>Jag vill ha fest</p>
      </Collapsible>
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Transport'>
        <img src={bilpool} className="logos" alt="logo" />
        <p>Förra mån: 1200 kg</p>
      </Collapsible>
      </Tab>
    </Tabs>
    </div>
  );
}

export default App;





//Full data {JSON.stringify(user)}


/* <img src={user.user.avatar_url} className="logo" alt="logo" /> */
/* <p>Test API (should show name): {user.user.login}</p>
<p>This boilerplate is setup with React.js, Node.js, SASS & deploys on Heroku.</p> */
/* <a
  className="App-link"
  href="https://osaisacson.github.io/"
  target="_blank"
  rel="noopener noreferrer"
>
  OSASON
</a> */

// <Progress type="circle" percent={100} />
// <Progress percent={88} />
// <Progress percent={39} />
/* <Progress percent={43} status="success" /> */
// <Progress percent={32} status="success" />



{/* <Progress percent={88} status="error" theme={{
        error: {
          color: '#fbc630'
        }
      }} /> */}
     
      {/* <Progress percent={100} status="success" /> */}


//https://www.npmjs.com/package/react-collapsible

/* <Collapsible tabIndex={0} trigger="Start here">
<p>This is the collapsible content. It can be any element or React component you like.</p>
<p>It can even be another Collapsible component. Check out the next section!</p>
</Collapsible> */

/* <Collapsible transitionTime={400} trigger="This one will blow your mind." easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}>
  <p>Well maybe not. But did you see that little wiggle at the end. That is using a CSS cubic-beizer for the easing!</p>
  <p>You can pass any string into the prop easing that you would declare in a CSS transition-timing-function. This means you have complete control over how that Collapsible appears.</p>
</Collapsible>

<Collapsible transitionTime={400} trigger="Oh and did I mention that I'm responsive?" triggerWhenOpen="Plus you can change the trigger text when I'm open too">
  <p>That's correct. This collapsible section will animate to the height it needs to and then set it's height back to auto.</p>
  <p>This means that no matter what width you stretch that viewport to, the Collapsible it will respond to it.</p>
  <p>And no matter what height the content within it is, it will change height too.</p>
  <h2>CSS Styles</h2>
  <p>All of the style of the Collapsible (apart from the overflow and transition) are controlled by your own CSS too.</p>
  <p>By default the top-level CSS class is Collapsible, but you have control over this too so you can easily add it into your own project. Neato!</p>
  <p>So by setting the prop of classParentString=&#123;"MyNamespacedClass"&#125; then the top-level class will become MyNamespacedClass.</p>
</Collapsible>

<Collapsible lazyRender transitionTime={600} trigger="What happens if there's a shed-load of content?" easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'} overflowWhenOpen="visible">
  <p>Add the prop of <strong style={{ fontWeight: 'bold' }}>lazyRender</strong> and the content will only be rendered when the trigger is pressed</p>
  <img src="https://lorempixel.com/320/240?random=1" />
  <img src="https://lorempixel.com/320/240?random=2" />
  <img src="https://lorempixel.com/320/240?random=3" />
  <img src="https://lorempixel.com/320/240?random=4" />
  <img src="https://lorempixel.com/320/240?random=5" />
  <img src="https://lorempixel.com/320/240?random=6" />
</Collapsible>

<Collapsible trigger='You can set a custom trigger tag name.' triggerTagName='div'>
  <p>Use the <code>`triggerTagName`</code> prop to set the trigger wrapping element.</p>
  <p>Defaults to <code>span</code>.</p>
</Collapsible>

<Collapsible trigger="You can customise the CSS a bit more too"
  triggerClassName="CustomTriggerCSS"
  triggerOpenedClassName="CustomTriggerCSS--open"
  contentOuterClassName="CustomOuterContentCSS"
  contentInnerClassName="CustomInnerContentCSS"
>
  <p>This is the collapsible content. It can be any element or React component you like.</p>
</Collapsible>

<Collapsible trigger="You can disable them programatically too" open triggerDisabled>
  <p>This one has it's trigger disabled in the open position. Nifty.</p>
  <p>You also get the <strong>is-disabled</strong> CSS class so you can style it.</p>
</Collapsible>

<Collapsible trigger="You can have siblings to the trigger too which won't trigger the Collapsible" triggerSibling={triggerSiblingExample}>
  <p>This one has it's trigger disabled in the open position. Nifty.</p>
  <p>You also get the <strong>is-disabled</strong> CSS class so you can style it.</p>
</Collapsible>

<Collapsible trigger={"Add a triggerStyle Prop to add style directly to the trigger"} triggerStyle={{background: '#2196f3'}}>
  <p>Adds a <code>style</code> attribute to the <code>span</code> trigger.</p>
</Collapsible> */