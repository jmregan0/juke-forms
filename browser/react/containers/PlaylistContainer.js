import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class PlaylistContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {input: ''}

    this.recordPlaylistName = this.recordPlaylistName.bind(this);
    this.submitFormAction = this.submitFormAction.bind(this);
  }

  recordPlaylistName(event){
    const input = event.target.value;
    this.setState({
      currentValue: input
    });
  }

  submitFormAction(event){
    const value = event.target.value;
    console.log(value);
  }

  render(){
    return (
      <NewPlaylist
      recordPlaylistName={this.recordPlaylistName}
      submitFormAction={this.submitFormAction}
      />
    );
  }
}
