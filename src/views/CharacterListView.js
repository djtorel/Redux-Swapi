import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { getCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    // if (this.props.fetching) {
    //   // return something here to indicate that you are fetching data
    // }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = ({ charsReducer: { characters } }) => ({ characters });
export default connect(
  mapStateToProps,
  {
    getCharacters,
  }
)(CharacterListView);
