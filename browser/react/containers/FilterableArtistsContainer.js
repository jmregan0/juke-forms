import React from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentValue: ''
    }

    this.userSearchContent = this.userSearchContent.bind(this);
  }

  userSearchContent(event){
    const input = event.target.value;
    this.setState({
      currentValue: input
    });
  }

  render () {
    const inputValue = this.state.currentValue;
    const filteredArtists = this.props.artists.filter(artist =>
    artist.name.match(inputValue));

    return (
    <div>
      <FilterInput userSearchContent={this.userSearchContent} />
      <Artists artists={filteredArtists} />
    </div>
    );
  }
}
