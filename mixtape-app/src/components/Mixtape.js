import MixtapeCard from "./MixtapeCard"
import { useState, useEffect } from "react"

const Mixtape = ({ userSongs, setUserSongs, setPlayID }) => {
    const [mixtapeTracks, setMixtapeTracks] = useState([])

    useEffect(() => {
        setMixtapeTracks(userSongs)
    }, [userSongs])

    return (
        <div>
            <h1>Your Mixtape</h1>
            <div className='mixtape'>
                {mixtapeTracks.map((song) => (
                    <li key={song.id} >
                        <MixtapeCard {...song} userSongs={userSongs} setUserSongs={setUserSongs} setPlayID={setPlayID}/>
                    </li>
                ))
                }
            </div>
        </div >
    )

}
export default Mixtape