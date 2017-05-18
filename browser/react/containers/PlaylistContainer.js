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
    const currentValue = event.target.value;
    this.setState({ input: currentValue });
  }

  submitFormAction(event){
    event.preventDefault();
    console.log(this.state.input)
    this.setState({input: ''})
  }



  render(){
    return (
      <NewPlaylist
      recordPlaylistName={this.recordPlaylistName}
      submitFormAction={this.submitFormAction}
      input={this.state.input}
      />
    );
  }
}
