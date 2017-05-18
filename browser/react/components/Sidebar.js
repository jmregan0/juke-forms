import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/artists">ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <h4 className="text-muted">PLAYLISTS</h4>

      <ul className="list-unstyled">
        {
          props.playlists.map(playlist => { return (
            <li className="playlist-item menu-item">
              <Link to="FILL_ME_IN">{playlist.name}</Link>
            </li>)
          })
        }
      </ul>
      <hr />
      <section>
        <h4>
          <Link className="btn btn-primary btn-block" to="newPlaylist">
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
