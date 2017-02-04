import React from 'react';
import { css } from 'glamor'

import { Jumbotron, ButtonGroup, Button } from 'reactstrap';

let JumbotronStyle = css({
  color: '#fff',
  backgroundColor: 'rgb(255, 81, 115)',
  borderRadius: '1em'
})

let ButtonGroupStyle = css({
  margin: '0 auto',
  textAlign: 'center'
})

let ButtonStyle = css({
  cursor: 'pointer'
})

let Bio = ({ profile }) =>
  <Jumbotron className={`${JumbotronStyle}`}>
    <h1 className={`display-4`}>{profile.name}</h1>
    <p className={`lead`}>I'm an <a href="https://github.com/myles">open source</a> developer living in Toronto. I run a small consultating company called <a href="http://monkeyinyoursoul.com/">Monkey&nbsp;in&nbsp;your&nbsp;Soul</a> (you should hire me).</p>
    <hr/>
    <ButtonGroup className={`${ButtonGroupStyle}`}>
      <Button className={`${ButtonStyle}`} onClick={() =>
        window.location = 'https://github.com/myles'
      }>
        GitHub
      </Button>
      <Button className={`${ButtonStyle}`} onClick={() =>
        window.location = 'http://codepen.io/mylesb/'
      }>
        CodePen
      </Button>
      <Button className={`${ButtonStyle}`} onClick={() =>
        window.location = 'https://twitter.com/mylesb'
      }>
        Twitter
      </Button>
      <Button className={`${ButtonStyle}`} onClick={() =>
        window.location = 'https://www.facebook.com/mylesbraithwaite'
      }>
        Facebook
      </Button>
      <Button className={`${ButtonStyle}`} onClick={() =>
        window.location = 'https://www.linkedin.com/in/mylesbraithwaite'
      }>
        LinkedIn
      </Button>
    </ButtonGroup>
  </Jumbotron>

export default Bio;
