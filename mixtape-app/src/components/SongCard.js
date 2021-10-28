const SongCard = ({
    artist_name,
    track_name,
    album_art,
    album_name,
    track_id,
    userSongs,
    setUserSongs
}) => {
    function takeSong() {
        console.log("before add", userSongs)
        setUserSongs([...userSongs, {
            trackName: track_name,
            artistName: artist_name,
            albumArt: album_art,
            albumName: album_name,
            id: track_id
        }])
    }


    return (
        <div>
            <h3>{track_name}</h3>
            <p>{artist_name}</p>
            <p>{album_name}</p>
            <img src={album_art.url} alt={album_name} />
            {
                (userSongs.some((track) => { return track.id === track_id })) ? (<></>) :
                    (<button onClick={takeSong}>Add</button>)
            }

        </div>
    )
}
export default SongCard