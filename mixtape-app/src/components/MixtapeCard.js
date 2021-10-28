const MixtapeCard = ({ artistName,
    trackName,
    albumArt,
    albumName,
    userSongs,
    setUserSongs
}) => {

    function removeSong() {
        let songList = userSongs.splice(userSongs.indexOf(), 1)
        setUserSongs(songList)
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