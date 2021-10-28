import { useState, useEffect } from "react"
import axios from 'axios'
import SongCard from "./SongCard"

const Request = () => {
    const musicEndpoint = `https://api.spotify.com/v1/search?q=`
    const [token, setToken] = useState('')
    const [trackData, setTrackData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem('accessToken'))
        }
    }, [])

    // useEffect(() => {
    //     console.log("use effect token", token)
    //     if (token) {
    //         handleGetMusic()
    //     }
    // }, [token])

    const handleGetMusic = (event) => {
        event.preventDefault()
        console.log("token in handlemusic function", token)
        axios.get(`${musicEndpoint}${search}&type=track`, {
            headers: {
                Authorization: `Bearer ${token}`,
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
            <form onSubmit={handleGetMusic}>
                <input type='text' onChange={handleSearchChange}></input>
            </form>
            <ul>
                {trackData.map((song) => (
                    <li key={song.track_id}>
                        <SongCard {...song} />
                    </li>
                ))
                }
            </ul>
        </>
    )

}
export default Request