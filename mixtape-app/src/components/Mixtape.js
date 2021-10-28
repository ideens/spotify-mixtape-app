import MixtapeCard from "./MixtapeCard"
import { useEffect } from "react"

const Mixtape = ({ userSongs }) => {
    let mixtapeTracks = []
    useEffect(() => {
        console.log(userSongs)
        // mixtapeTracks = userSongs
        // console.log("after add", mixtapeTracks)
    }, [userSongs])

    return (
        <div>
            <h1>Your Mixtape</h1>
            <div className='mixtape'>
                {mixtapeTracks.map((song) => (
                    <li>
                        <MixtapeCard {...song} />
                    </li>
                ))
                }
            </div>
        </div>
    )

}
export default Mixtape