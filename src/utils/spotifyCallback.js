import { useHistory } from 'react-router-dom';

export default () => {
    const history = useHistory();
    const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function(initial, item) {
        if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
    }, {});
    window.location.hash = "";

    let token = hash.access_token
    if (token) {
        window.localStorage.setItem('spotifyToken', token);
        if(window.localStorage.getItem('adminToken')){
            history.push('/admin/dashboard');
        }else{
            history.push('/');
        }
    }
}