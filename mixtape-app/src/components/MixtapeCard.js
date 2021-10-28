const MixtapeCard = ({ 
    artistName,
    trackName,
    albumArt,
    albumName,
    id,
    userSongs,
    setUserSongs,
    setPlayID
}) => {

    function removeSong() {
        setUserSongs(userSongs.filter((track) => {
            return track.id !== id
        }))
    }

    function handlePlay() {
        console.log(id)
        setPlayID([`spotify:track:${id}`])
    }

    return (
        <div>
            <h3>{trackName}</h3>
            <p>{artistName}</p>
            <img src={albumArt.url} alt={albumName} />
            <button onClick={removeSong}>Remove</button>
            <button onClick={handlePlay}>Play</button>
        </div>
    )
}
export default MixtapeCard