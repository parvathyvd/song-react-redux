// Action creator

export const selectSong = (song) => {
    // return an action which means it has to be an object with mandatory type and the payload can be optional
    return(
        {
            type: 'SELECTED_SONG',
            payload: song
        }
    )
}

