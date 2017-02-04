import React from 'react';
import { css } from 'glamor'
import TimeAgo from 'react-timeago'

import { CardColumns, Card, CardHeader, CardBlock, CardText, CardLink,
         CardFooter } from 'reactstrap';

function boundCardClick(url, e) {
  window.location = url;
}

let CardStyle = css({
  cursor: 'pointer'
})

let CardHeaderStyle = css({
  fontWeight: 'normal',
  overflow: 'hiden'
})

let LanguageStyle = {
  'Python': css({
    color: '#fff',
    backgroundColor: '#3572a5'
  }),
  'HTML': css({
    color: '#fff',
    backgroundColor: '#e44b23'
  }),
  'Ruby': css({
    color: '#fff',
    backgroundColor: '#701516'
  }),
  'JavaScript': css({
    color: '#000',
    backgroundColor: '#f1e05a'
  }),
  'CSS': css({
    color: '#fff',
    backgroundColor: '#563d7c'
  }),
  'PHP': css({
    color: '#fff',
    backgroundColor: '#4F5D95'
  }),
  'Shell': css({
    color: '#fff',
    backgroundColor: '#89e051'
  }),
  'Jupyter Notebook': css({
    color: '#fff',
    backgroundColor: '#DA5B0B'
  }),
  'CoffeeScript': css({
    'color': '#fff',
    'backgroundColor': '#244776'
  })
}

let Repo = ({ repo }) =>
  <Card className={`${CardStyle}`} onClick={() =>
    boundCardClick(repo.html_url)
  }>
    <CardHeader tag='h3' className={`${CardHeaderStyle} ${LanguageStyle[repo.language]}`}>{repo.name}</CardHeader>
    <CardBlock>
      <CardText>{repo.description}</CardText>
      {repo.homepage &&
        <CardLink href={`${repo.homepage}`}>Homepage</CardLink>
      }
      {repo.has_issues &&
        <CardLink href={`${repo.html_url}/issues`}>Issues</CardLink>
      }
      {repo.has_wiki &&
        <CardLink href={`${repo.html_url}/wiki`}>Wiki</CardLink>
      }
    </CardBlock>
    <CardFooter><small className="text-muted">Last updated <TimeAgo date={repo.pushed_at} /></small></CardFooter>
  </Card>

let Repos = ({ repos }) =>
  <CardColumns>
    {repos.map((repo) =>
      <Repo repo={repo}/>
    )}
  </CardColumns>

export default Repos;
