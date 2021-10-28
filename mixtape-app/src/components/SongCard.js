const SongCard = ({
    artist_name,
    track_name,
    album_art,
    album_name
}) => {
    return (
        <div>
            <h3>{track_name}</h3>
            <p>{artist_name}</p>
            <p>{album_name}</p>
            <img src={album_art.url} />
        </div>
    )
}
export default SongCard