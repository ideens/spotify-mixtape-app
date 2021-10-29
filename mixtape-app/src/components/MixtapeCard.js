import '../styles/MixtapeCard.css'

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
        <div className='track'>
            <img className='track-image' src={albumArt.url} alt={albumName} />
         <div className='track-text'>
            <h3 className='track-name'>{trackName}</h3>
            <p className='track-artist'>{artistName}</p>
        </div>      
        <div className='track-buttons'>
            <button onClick={removeSong}>Remove</button>
            <button onClick={handlePlay}>Play</button>
        </div>    
        </div>
    )
}
export default MixtapeCard