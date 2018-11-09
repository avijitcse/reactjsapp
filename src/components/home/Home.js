import React, { Component } from 'react';
//import logo from '../../logo.svg';
import './Home.css';
import Nav from '../nav/Nav';
//import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super()
    this.state = { repos: [], owner: [], loading: true };
  }

  getAllRepos() {
    axios.get('https://api.github.com/users/ReactTraining/repos')
      .then(repos => this.setState({repos: repos.data, loading: false}))
  }

  getOwnerInfo() {
    axios.get('https://api.github.com/users/ReactTraining')
      .then(owner => this.setState({owner: owner.data, loading: false}))
  }

  componentDidMount() {
    this.getAllRepos();
    this.getOwnerInfo();
  }

  render() {
    const { repos }  = this.state;
    const { owner } = this.state;

    if (!this.state.loading) {
      return (
        <div>
          <Nav />
          
          <div>
          <h3 className="text-center"><img src={owner.avatar_url} alt="" height="100"/> {owner.name}&apos;s Repositories</h3>
          <hr/>
          </div>
        
          { repos.map((repo, index) => (
                <div className="col-sm-6" key={index}>
                  <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title"> 
                      <a target="_blank" href={ repo.html_url }><span className="btn">{ repo.name.charAt(0).toUpperCase() + repo.name.slice(1) }</span></a>
                      <span className="btn pull-right btn-padding-less">
  
                      {/* <button type="submit" className="btn btn-sm btn-with-count js-toggler-target" aria-label="Star this repository" title="Star ReactTraining/react-router">
                        <svg className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                        &nbsp;{repo.forks}
                      </button> */}
                      <span className="badge badge-light">                     
                      <svg className="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg> {repo.forks_count}</span>
                      </span>
  
                       <span className="btn pull-right btn-padding-less">
                       <span className="badge badge-light">                     
                       <svg className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> {repo.stargazers_count}</span>
                       </span>
  
                       <span className="btn pull-right btn-padding-less">
                       <span className="badge badge-light">                     
                       <svg className="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg> {repo.watchers_count}</span>
                       </span>
  
                      </h3>
                    </div>
                    <div className="panel-body">
                      <p> { repo.description } </p>
                    </div>
                  </div>
                </div>
            ))}
        </div>
      );
    }

    return (
      <div id="loader"></div>
    )
    
  }
}

export default Home;
