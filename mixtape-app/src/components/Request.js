import { useState, useEffect } from "react"
import axios from 'axios'
import SongCard from "./SongCard"

const Request = () => {
    const musicEndpoint = `https://api.spotify.com/v1/search?q=`
    const [token, setToken] = useState('')
    const [trackData, setTrackData] = useState([])
    // let truckData = []

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem('accessToken'))
        }
    }, [])

    useEffect(() => {
        console.log("use effect token", token)
        if (token) {
            handleGetMusic()
        }
    }, [token])

    const handleGetMusic = () => {
        console.log("token in handlemusic function", token)
        axios.get(`${musicEndpoint}dayglow&type=track`, {
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
                setTrackData(listOfTracks)
                console.log("an array full of trucks", listOfTracks)
            })
            .catch((err) => {
                console.error('error fetching music', err)
            })
    }

    return (
        <>
            <form>
                <input type='text'></input>
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