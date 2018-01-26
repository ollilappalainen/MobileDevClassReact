// https://api.github.com/search/repositories?q=react

import React from 'react';
import './GitHubRepoList.less';

export default class GitHubRepoList extends React.Component {
  constructor() {
    super();
    this.state = {
      parameter: '',
      repoList: [{name: 'No repositories yet.', htmlUrl: 'Please use a keyword for search.'}]
    };

    this.handleChange = this.handleChange.bind(this);
    this.getRepositories = this.getRepositories.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      parameter: event.target.value
    });
  }

  handleReset() {
    this.setState({
      parameter: '',
      repoList: [{name: 'No repositories yet.', htmlUrl: 'Please use a keyword for search.'}]
    });
  }

  getRepositories() {
    let parameter = this.state.parameter;
    let url = 'https://api.github.com/search/repositories?q=' + parameter;    
    let repoList = [];
    fetch(url)
    .then(response => {      
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.total_count > 0) {
        data.items.map((item) => {
          let repo;
          repo = {
            name: item.full_name,
            htmlUrl: item.html_url
          }        
          repoList.push(repo);
        });
  
        this.setState({
          repoList: repoList
        });
      } else {
        let repo = {
          name: 'No repositories found.',
          htmlUrl: 'Please try another keyword.'
        }

        repoList.push(repo);

        this.setState({
          repoList: repoList
        });
      }     
      
      console.log(repoList);
    });
  }  

  render() {
    let repos = this.state.repoList;
    return (
      <div>
        <div>
          <label>Search for GitHub Repository </label>
          <input id="repoSearch" type="text" name="repoSearch" value={this.state.parameter} onChange={this.handleChange} />
          <button type="submit" onClick={this.getRepositories}>Search</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>        
        <div className="repo-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((repo, i) => {
                return (
                  <tr key={i}>
                    <td>{repo.name}</td>
                    <td>{repo.htmlUrl}</td>                
                  </tr>
                );                  
              })}
            </tbody>
          </table>
        </div>        
      </div>
    );
  }
}
