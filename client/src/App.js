import React from 'react';
import './sass/main.scss';
import axios from 'axios';

import Active from './components/Active';
import Discussed from './components/Discussed';
import Suggested from './components/Suggested';


function App() {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    axios.get('/api?user=osaisacson') //sets query for which user data to get
    .then(response => {
      setUser(response.data)
    })

  }, [])

  return user && (
    <div className="App">
      <header>
        <img src={'https://rebellion.earth/wp/wp-content/themes/xr/images/xr-logo-no-symbol.svg'} className="logo" alt="logo" />
      </header>

      <div className="text-section">
        <br></br>
        <h1>DEMANDS</h1>
        <br></br>
        <h2>How it works</h2>
        <p>Since nobody has time for long and tedious discussions, the collaborative demand system instead works like this (a merry mix of reddit, github and wikipedia):</p>
        <br></br>
        <p>- Anyone can suggest a demand, these end up in the bottom 'suggested' section</p>
        <p>- If 1000 people agree with your demand, it moves to the 'Discussed' section</p>
        <p>- Once in 'Discussed' the options for adding suggested improvements to your demand are open</p>
        <p>- If 20 people agree with a suggested change then that change is accepted to the demand description</p>
        <p>- Once the demand definition is completed and has 10,000 upvotes it gets sent as a petition to the representative who can make the next move, and the demand moves to the 'active' section.</p>
        <p>- In 'Active' we can see where the demand is at, and what you can do to push it forward.</p>
        <p>- If a demand gets stuck, you'll find here how and where you can rebel.</p>
      </div>

      <Active />
      <Discussed />
      <Suggested />
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