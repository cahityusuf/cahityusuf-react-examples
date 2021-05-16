import React, { useState } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";


// class SongList extends Component {
//   render() {
//     console.log(this.props);
//     return <div>SongList</div>;
//   }
// }

const SongList = (props) => {
  const [songs, setSongs] = useState([]);
  const songList = props.songs.map((song) => {
    return (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <div
            className="ui button primary"
            onClick={() => props.selectSong(song)}
          >
            Select
          </div>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });

  return (
    <div className="ui divided list">
      {songList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
