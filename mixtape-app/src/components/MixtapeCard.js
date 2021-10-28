const MixtapeCard = ({ artistName,
    trackName,
    albumArt,
    albumName,
    id,
    userSongs,
    setUserSongs
}) => {

    function removeSong() {
        const findTrackIndex = (track) => track.id === id
        const newSongList = userSongs.filter((track) => {
            return track.id !== id
        })
        // let trackIndex = userSongs.findIndex(findTrackIndex)
        // let songList = userSongs
        // songList.splice(trackIndex, 1)
        console.log("new song list after filter ", newSongList)
        setUserSongs(newSongList)
    }

    return (
        <div>
            <h3>{trackName}</h3>
            <p>{artistName}</p>
            <img src={albumArt.url} alt={albumName} />
            <button onClick={removeSong}>Remove</button>
        </div>
    )
}

export default MixtapeCard