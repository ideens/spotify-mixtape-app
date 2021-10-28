const MixtapeCard = ({ artist_name,
    track_name,
    album_art,
    album_name
}) => {
    return (
        <div>
            <h3>{track_name}</h3>
            <p>{artist_name}</p>
            <img src={album_art.url} alt={album_name} />
        </div>
    )
}

export default MixtapeCard