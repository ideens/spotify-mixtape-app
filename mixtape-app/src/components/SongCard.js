import { useState } from "react"
const SongCard = ({
    artist_name,
    track_name,
    album_art,
    album_name,
    track_id,
    userSongs,
    setUserSongs,
    setPlayID
}) => {
    function takeSong() {
        setUserSongs([...userSongs, {
            trackName: track_name,
            artistName: artist_name,
            albumArt: album_art,
            albumName: album_name,
            id: track_id
        }])
    }

    function handlePlay() {
        console.log(track_id)
        setPlayID([`spotify:track:${track_id}`])
    }

    return (
        <div className='song-card'>
            <div className='track-text'></div>
            <h3>{track_name}</h3>
            <p>{artist_name}</p>
            <p>{album_name}</p>
            <div />
            <img src={album_art.url} alt={album_name} />
            {
                (userSongs.some((track) => { return track.id === track_id })) ? (<p>Added!</p>) :
                    (<button onClick={takeSong}>Add</button>)
            }
            <button onClick={handlePlay}>Play</button>


        </div>
    )
}
export default SongCard