import React, { Component } from 'react';
import './Wiki.css';

class Search extends Component {

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          onChange={event => this.props.onSearch(event.target.value)}
        /><span className="fa fa-search" />
      </div>
    );
  }
}

const Result = ({items, onSelect}) => (
  <ul>
    {items.map(item => <li onClick={() => onSelect(item)} key={item.pageid}>{item.title}</li>)}
  </ul>
);

const Page = ({item}) => (
  <div style={{flex: 3}}>
      <h1>{item ? item.title : ''}</h1>
      <div dangerouslySetInnerHTML={{__html: (item ? JSON.stringify(item.text) : '')}}></div>
  </div>
);

class Wiki extends Component {

  constructor() {
    super();

    this.state = {
      results: [],
      selected: null,
      page: null
    }
  }

  search(query) {
    const base = 'https://en.wikipedia.org/w/api.php';
    const encoded = encodeURIComponent(query);
    const url = `${base}?action=query&list=search&srsearch=${encoded}&utf8=&format=json&origin=*`;
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({results: json.query.search}));
  }

  page(title) {
    const base = 'https://en.wikipedia.org/w/api.php';
    const encoded = encodeURIComponent(title);
    const url = `${base}?action=parse&page=${encoded}&utf8=&format=json&origin=*`;
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({page: json.parse}));
  }

  selected(selected) {
    this.setState({selected: selected})
    this.page(selected.title)
  }

  render() {
    return (
      <div className="Wiki">
        <div style={{flex: 1}}>
          <Search onSearch={(query) => this.search(query)} />
          <Result onSelect={(selected) => this.selected(selected)} items={this.state.results} />
        </div>
        <Page item={this.state.page} />
      </div>
    );
  }
}

export default Wiki;
