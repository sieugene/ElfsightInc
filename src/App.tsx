import React from 'react';
import './App.css';
import GalleryContainer from './Components/Gallery/GalleryContainer';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import AlbumsContainer from './Components/Album/AlbumsContainer';
import CurrentAlbumContainer from './Components/Album/CurrentAlbum/CurrentAlbumContainer';
import { AppStateType } from './redux/store';

type PropsType = {
  location: {
    pathname: string
  }
}

const App: React.FC<PropsType> = (props: PropsType) => {

  return (
    <div className="App">
      <div className="container">
        <Route exact path='/' render={() => <GalleryContainer />} />
        <Route exact path='/albums/:userId?' render={() => <AlbumsContainer />} />
        <Route exact path='/album/:albumId?' render={() => <CurrentAlbumContainer />} />
      </div>
    </div>
  )
}

let MapStateToProps = (state: AppStateType) => {
  return {

  }
}

export default withRouter(connect(MapStateToProps)(App));
