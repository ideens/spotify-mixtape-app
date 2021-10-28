
const Login = ({ loggedIn, setLoggedIn }) => {
    const authorizeEndpoint = 'https://accounts.spotify.com/authorize'
    const redirectUri = 'http://localhost:3000/callback/'
    const clientID = '3491bd99fc3d48a695f0ef714ca56d4e'
    const spaceDelimiter = '%20'
    const scopes = [
        'user-library-read',
        'user-library-modify'
    ]
    const scopesUrlParam = scopes.join(spaceDelimiter)
    // const history = useHistory()

    // function getSpotifyParams(hash) {
    //     const urlString = hash.substring(1)
    //     const relevantParams = urlString.split('&')
    //     const splitParams = relevantParams.reduce((accumulate, currentValue) => {
    //         console.log(currentValue)
    //         const [key, value] = currentValue.split('=')
    //         return accumulate[key] = value
    //     }, {})

    //     console.log("splitparams", splitParams)
    //     return splitParams
    // }

    // useEffect(() => {
    //     console.log("useEffect running")
    //     // console.log("second window.location", window.location)
    //     // console.log("third window.location", window.location)
    //     console.log(window.location.hash)
    //     if (window.location.hash) {
    //         console.log("use effect if statement reached")
    //         const { access_token, expires_in, token_type } = getSpotifyParams(window.location.hash)
    //         localStorage.clear()

    //         setAccessToken(access_token)
    //         setTokenType(token_type)
    //         setExpiry(expires_in)
    //         console.log(access_token, expires_in, token_type)
    //         history.push('/')
    //     }
    // })

    function handleLogin() {
        // console.log("sacrificial console.log")
        // console.log("first window.location", String(window.location)) 
        // console.log("first", loggedIn)
        setLoggedIn(true)
        // console.log("second", loggedIn)
        window.location = `${authorizeEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopesUrlParam}&response_type=token&show_dialog=true`
    }

    return (
        <div className='login_container'>
            <button className='login_button' onClick={handleLogin}>SPOTIFY LOGIN</button>
        </div>
    )
}
export default Login