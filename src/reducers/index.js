import {combineReducers} from 'redux';

const songsReducer = () => {
    return(
        [
            {title : 'hey how are you?', duration : 4.5 },
            {title : 'Despacito', duration : 3.5 },
            {title : 'Rasputin', duration : 6.5 },
            {title : 'I want it that way', duration : 6.0 },
        ]
    )
}


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SELECTED_SONG'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong : selectedSongReducer
})