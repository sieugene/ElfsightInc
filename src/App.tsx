import React from 'react';
import './App.css';
import GalleryContainer from './Components/Gallery/GalleryContainer';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

type PropsType = {
  location:{
    pathname: string
  }
}

const App:React.FC<PropsType> = (props:PropsType) => {
  if(props.location.pathname && props.location.pathname !== '/'){
    return <div>'ты в другом месте'</div>;
  }
  return (
    <div className="App">
      <GalleryContainer/>
    </div>
  )
}

let MapStateToProps = (state:any) => {
  return{
   
  }
}

export default withRouter(connect(MapStateToProps)(App));
