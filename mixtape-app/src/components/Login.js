import { useEffect } from "react"
import { setAccessToken } from "../helpers/localStores.js"
import { setTokenType } from "../helpers/localStores.js"
import { setExpiry } from "../helpers/localStores.js"
import { useHistory } from "react-router"

const Login = () => {
    const authorizeEndpoint = 'https://accounts.spotify.com/authorize'
    const redirectUri = 'http://localhost:3001/callback'
    const clientID = '3491bd99fc3d48a695f0ef714ca56d4e'
    const spaceDelimiter = '%20'
    const scopes = [
        'user-library-read',
        'user-library-modify'
    ]
    const scopesUrlParam = scopes.join(spaceDelimiter)
    const history = useHistory()

    function getSpotifyParams(hash) {
        const urlString = hash.substring(1)
        const relevantParams = urlString.split('&')
        const splitParams = relevantParams.reduce((accumulate, currentValue) => {
            console.log(currentValue)
            const [key, value] = currentValue.split('=')
            accumulate[key] = value
        }, {})

        console.log(splitParams)
        return splitParams
    }

    useEffect(() => {
        if (window.location.hash) {
            const { access_token, expires_in, token_type } = getSpotifyParams(window.location.hash)
            localStorage.clear()

            setAccessToken(access_token)
            setTokenType(token_type)
            setExpiry(expires_in)
            console.log(access_token, expires_in, token_type)
        }
    })

    function handleLogin() {
        window.location = `${authorizeEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopesUrlParam}&response_type=token&show_dialog=true`
    }

    return (
        <div className='login_container'>
            <button className='login_button' onClick={handleLogin}>SPOTIFY LOGIN</button>
        </div>
    )
}
export default Login