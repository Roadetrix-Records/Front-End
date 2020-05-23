let BASE_URL='https://roadetrix-staging.herokuapp.com'
let CLIENT_URL='https://roadetrix.com'


if(process.env.REACT_APP_ENV === 'development'){
    BASE_URL='http://localhost:5000'
    CLIENT_URL='http://localhost:3000'
}

export {
    BASE_URL,
    CLIENT_URL
};