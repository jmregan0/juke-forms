import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class PlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isDirty: false,
    }

    this.recordPlaylistName = this.recordPlaylistName.bind(this);
    this.submitFormAction = this.submitFormAction.bind(this);
    this.inputValidate = this.inputValidate.bind(this);
    this.lengthWarning = this.lengthWarning.bind(this);
  }

  recordPlaylistName(event) {
    const currentValue = event.target.value;
    this.setState({ input: currentValue , isDirty: true});
  }

  submitFormAction(event) {
    event.preventDefault();
    this.props.addPlaylist(this.state.input);
    this.setState({ input: '', isDirty: false })
  }

  inputValidate(event) {
    return (!this.state.input.length || this.state.input.length > 16)
  }

  lengthWarning() {
    if (this.state.input.length > 16) return <div className="alert alert-warning"> Your playlist name is too long!</div>
    if (this.state.isDirty && !this.state.input.length) return <div className="alert alert-warning"> Please Enter a Playlist name </div>
  }





  render() {
    return (
      <NewPlaylist
        recordPlaylistName={this.recordPlaylistName}
        submitFormAction={this.submitFormAction}
        input={this.state.input}
        inputValidate={this.inputValidate}
        lengthWarning={this.lengthWarning}
      />
    );
  }
}
