import React from 'react';
import './sass/main.scss';
import axios from 'axios';

import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries} from 'react-vis';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Collapsible from './components/Collapsible.js';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Progress } from 'react-sweet-progress';
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

  return user && (
    <div className="App">
      <header className="one-line-spread">
        <img src={'/logo.png'} className="logo" alt="logo" />
        <div className="header-title">
          <h2>Välkommen hem till</h2>
          <h1>Resilienshus Floda</h1>
        </div>
      </header>


      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Hem">
      <h3>Aktuell produktion</h3>
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='H20 - 1,472,350 liter'>
          <p>Förra mån: 13 370 liter</p>
          <p>Denna mån: 13 370 liter</p>
          <p>Detta året: 1 422 230 liter</p>

      </Collapsible>
      {/* vattenillustration */}
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Näringslösning - 44,000 liter'>
          <p>Förra mån: 23 370 liter</p>
          <p>Denna mån: 13 453 liter</p>
          <p>Detta året: 44, 000 liter</p>
      </Collapsible>
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Jordförbättring - 145 kg'>
          <p>Förra mån: 29 kg</p>
          <p>Denna mån: 35 kg</p>
          <p>Detta året: 145 kg</p>
      </Collapsible>
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Fisk - 3245 kg'>
          <p>Förra mån: 212 kg</p>
          <p>Denna mån: 125 kg</p>
          <p>Detta året: 3245 kg</p>
      </Collapsible>
      {/* <Progress percent={88} status="error" theme={{
        error: {
          color: '#fbc630'
        }
      }} /> */}
      <Collapsible triggerClassName="main-trigger" transitionTime={400} trigger='Odling - (1 ny)'>
          <p>Tomater</p>
          <p>Pak choi</p>
          <p>Micros</p>
          <p>Kål</p>
          <p>Oregano</p>
          <p>Basilika</p>
          <p>Timjan (ny!) - beräknad skörd: 8 dagar</p>
      </Collapsible>
      {/* <Progress percent={100} status="success" /> */}
      </Tab>
      <Tab eventKey="harvest" title="Dagens Skörd">
        Skörden enna. Bilder och actions.
      </Tab>
      <Tab eventKey="water" title="System">
        <p>Kombinerade nummer produktion eller sparade utgifter.</p>
      <XYPlot height={300} width={400}>
        <LineSeries data={data} />
      </XYPlot>
      </Tab>
      <Tab eventKey="neighbours" title="Grannar">
        <p>Alla mina grannar</p>
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