import React from "react";
import { connect } from 'react-redux';


const SongDetail = ({selectedSong}) => {
    console.log(selectedSong);
    if(selectedSong){
    return (
        <div className="ui list">
            <ul>
            <li style={{listStyle : 'none'}}><h4>Song : {selectedSong.title}</h4> Duraton {selectedSong.duration}</li>
            </ul>
        </div>
    )
    }
    else return <p>Please select a song</p>;
}

const mapStateToProps = (state) => {
    return {
        selectedSong : state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);