import { useState, useEffect } from "react"
import SpotifyWebPlayer from "react-spotify-web-playback/lib"
const Player = ({ playID }) => {
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        setPlaying(true)
    }, [playID])


    return (
        <div>
            <SpotifyWebPlayer
                token={localStorage.getItem('accessToken')}
                uris={playID ? [playID] : []}
                showSaveIcon
                callback={state => {
                    if (!state.isPlaying) {
                        setPlaying(false)
                    }
                }}
                play={playing}
            />
        </div>
    )
}
export default Player