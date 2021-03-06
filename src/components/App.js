import React from "react";
import SongList from './SongList';
import SongDetail from "./SongDetail";
import './App.css';

const App = () => {
    return(
        <div className="ui container grid ui-mt-5">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    )
}

export default App;
