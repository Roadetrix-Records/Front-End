const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = 'c7499dcc8400439d8db3799a33de0f08';

const scopes = [
    "streaming",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-library-read",
    "user-library-modify",
    "user-modify-playback-state",
    "user-read-email",
    "user-read-private",
    "playlist-modify-public",
    "playlist-modify-private"
]

// Returns a query string to be sent to if user is not authenticated with spotify
export default (admin = false) => {
    let redirectUri;
    if(admin){
        redirectUri = process.env.ADMIN_URL || 'http://localhost:3000%2Fadmin%2Fdashboard%2F';
    }else{
        redirectUri = process.env.PUBLIC_URL || 'http://localhost:3000/callback/';
    }
    console.log(redirectUri);
    return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`
}