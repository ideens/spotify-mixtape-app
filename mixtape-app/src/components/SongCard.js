import { useEffect } from "react"

const SongCard = ({
    artist_name,
    track_name,
    album_art,
    album_name,
    userSongs,
    setUserSongs
}) => {

    function takeSong() {
        console.log("before add", userSongs)
        setUserSongs([...userSongs, {
            trackName: track_name,
            artistName: artist_name,
            albumArt: album_art,
            albumName: album_name
        }])
    }


    return (
        <div>
            <h3>{track_name}</h3>
            <p>{artist_name}</p>
            <p>{album_name}</p>
            <img src={album_art.url} alt={album_name} />
            <button onClick={takeSong}>Add</button>
        </div>
    )
}
export default SongCard