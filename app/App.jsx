import React from 'react';
import './App.less';
import Hello from './Hello/Hello.jsx';
import Counter from './Counter/Counter.jsx';
import Weather from './Weather/Weather.jsx';
import GitHubRepoList from './GitHubRepoList/GitHubRepoList.jsx';

export default class App extends React.Component {
  constructor () {
    super();    
  }
  
  render() {
    return (
      <div className="app-main">
        <div>
          <h3>Ex 1</h3>
          <Hello name="Jorma" location="universe" />
        </div>        
        <div>
          <h3>Ex 2</h3>
          <Counter />
        </div>          
        <div>
          <h3>Ex 3</h3>
          <Weather />
        </div>
        <div>
          <h3>Ex 4</h3>
          <GitHubRepoList />
        </div>
      </div>
    );
  }
}