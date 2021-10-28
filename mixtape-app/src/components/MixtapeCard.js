const MixtapeCard = ({ artistName,
    trackName,
    albumArt,
    albumName,
    id,
    userSongs,
    setUserSongs
}) => {

    function removeSong() {
        setUserSongs(userSongs.filter((track) => {
            return track.id !== id
        }))
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