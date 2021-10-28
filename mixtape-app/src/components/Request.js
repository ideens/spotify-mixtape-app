import { useState } from "react"
import axios from 'axios'
import SongCard from "./SongCard"

const Request = ({ userSongs, setUserSongs }) => {
    const musicEndpoint = `https://api.spotify.com/v1/search?q=`
    const [trackData, setTrackData] = useState([])
    const [search, setSearch] = useState('')

    const handleGetMusic = (event) => {
        event.preventDefault()
        axios.get(`${musicEndpoint}${search}&type=track`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
            .then((response) => {
                console.log("response track list", response.data.tracks.items)
                const listOfTracks = response.data.tracks.items.map((track) => {
                    return {
                        track_id: track.id,
                        artist_name: track.artists[0].name,
                        track_name: track.name,
                        album_art: track.album.images[2],
                        album_name: track.album.name
                    }
                })
                console.log("got the response?", response)
                setTrackData(listOfTracks)
                console.log("an array full of trucks", listOfTracks)
            })
            .catch((err) => {
                console.error('error fetching music', err)
            })
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <section className='search_section'>
                {(localStorage.getItem('accessToken')) ? (
                    <form onSubmit={handleGetMusic}>
                        <input type='text' onChange={handleSearchChange}></input>
                    </form>) : (<></>)}
                <ul>
                    {trackData.map((song) => (
                        <li key={song.track_id}>
                            <SongCard {...song} userSongs={userSongs} setUserSongs={setUserSongs} />
                        </li>
                    ))
                    }
                </ul>
            </section>
        </>
    )

}
export default Request