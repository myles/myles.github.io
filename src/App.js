import React from 'react';
import { css } from 'glamor'

import Bio from './components/bio';
import Repos from './components/repos';

import wiggle from './components/icons/wiggle.svg';
import circuitBoard from './components/icons/circuit-board.svg';

let Section = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  padding: '3em'
});

let SectionBio = css({
  backgroundColor: 'rgb(255, 81, 115)',
  backgroundImage: `url(${wiggle})`
})

let SectionProjects = css({
  backgroundColor: 'rgb(36, 165, 212)',
  backgroundImage: `url(${circuitBoard})`
})

let SectionWrapper = css({
  width: '90vw'
})

let SectionWrapperBio = css({
  width: '50vw'
})

let SectionWrapperProjects = css({
  backgroundColor: '#fff',
  padding: '1em 1.5em',
  borderRadius: '.5em'
})

let SectionHeader = css({
  paddingBottom: '1em',
  marginBottom: '1em',
  borderBottom: '1px solid #f1f2f2'
})

class App extends React.Component {
  state = {
    profile: {},
    repos: []
  }

  async fetchProfile() {
    let res = await fetch(`https://api.github.com/users/myles`);
    let json = await res.json();

    this.setState({
      profile: json
    });
  }

  async fetchRepos() {
    let res = await fetch(`https://api.github.com/users/myles/repos?sort=pushed&type=sources&per_page=100`);
    let json = await res.json();

    this.setState({
      repos: json
    })
  }

  constructor(props) {
    super(props);
    this.fetchProfile();
    this.fetchRepos();
  }

  render() {
    return (
      <div className='App'>
        <div className={`${Section} ${SectionBio}`}>
          <div className={`${SectionWrapper} ${SectionWrapperBio}`}>
            <Bio profile={this.state.profile} />
          </div>
        </div>

        <div className={`${Section} ${SectionProjects}`}>
          <div className={`${SectionWrapper} ${SectionWrapperProjects}`}>
            <div className={`${SectionHeader}`}>
              <h1>Projects</h1>
            </div>
            <Repos repos={this.state.repos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
