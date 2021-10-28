import { useState, useEffect } from "react"
import axios from 'axios'

const Request = () => {
    const musicEndpoint = `https://api.spotify.com/v1/search?q=`
    const [token, setToken] = useState('')
    const [data, setData] = useState({})

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
                console.log(response.data)
                setData(response.data)
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
                {
                    <li>
                        {data.tracks.items.map((song) => (
                            <SongCard  {...song} />
                        ))}
                    </li>
                }
            </ul>
        </>
    )

}
export default Request