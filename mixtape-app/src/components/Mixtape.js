import MixtapeCard from "./MixtapeCard"
import { useState, useEffect } from "react"

const Mixtape = ({ userSongs, setUserSongs }) => {
    const [mixtapeTracks, setMixtapeTracks] = useState([])

    useEffect(() => {
        console.log(userSongs)
        setMixtapeTracks(userSongs)
        console.log("after add", mixtapeTracks)
    }, [userSongs])

    return (
        <div>
            <h1>Your Mixtape</h1>
            <div className='mixtape'>
                {mixtapeTracks.map((song) => (
                    <li key={song.id} >
                        <MixtapeCard {...song} userSongs={userSongs} setUserSongs={setUserSongs} />
                    </li>
                ))
                }
            </div>
        </div >
    )

}
export default Mixtape