# Roadetrix Records
Production: [roadetrix.com](https://roadetrix.com/)  
Staging: [roadetrix.com](https://roadetrix.com/)  

## Developers
[Josiah Roa](https://github.com/josiahroa18)

## About
Roadetrix Records is an emerging independent record label focusing on releasing chill music ranging from lofi, chillhop, soul, and R&B. Our purpose is to provide a platform for artists, via the Roadetrix brand, to get their music heard, build meaningful relationships, and impact the community in a meaningful way.

## Key Features
- Demo Submissions page for users to submit their sound.
- Updatable spotify data from [Roadetrix](https://open.spotify.com/artist/7Md5xGlvby3sPI2NLkbYlv).
- Spotify release data and details displayed in an organized manner for users.
- Admin panel to view demo submissions, contact information, and update spotify data.

## Tech Stack
- React.js
- Node.js
- Express
- PostgreSQL

## Dependencies
| Dependency | URL       |
|------------|-----------|
| axios             | [npm](https://www.npmjs.com/package/axios) |
| styled-components | [docs](https://styled-components.com/) |
| styled-icons      | [docs](https://styled-icons.js.org/) |
| react-router-dom  | [npm](https://www.npmjs.com/package/react-router-dom) |
| dotenv            | [npm](https://www.npmjs.com/package/dotenv) |
| react-sortable-hoc | [npm](https://www.npmjs.com/package/react-sortable-hoc) |
| array-move | [npm](https://www.npmjs.com/package/array-move) | 
| moment | [dovs](https://momentjs.com/) |

## Back-End Documentation
[Back-End Github Repo](https://github.com/Roadetrix-Records/Back-End)

## External API Documentation
### **Spotify**
This application heavily relies on the spotify API to feed latest spotify data to the user and include spotify functionality directly on [roadetrix.com](https://roadetrix.com/).  

**Key authentication scopes include**: 
- streaming
- user-library-read
- user-library-modify
- user-read-email
- user-read-private
- playlist-modify-public
- playlist-modify-private

Client ID (public): `c7499dcc8400439d8db3799a33de0f08`  

[Spotify authentication documentation](https://developer.spotify.com/documentation/general/guides/authorization-guide/) - Look for _Implicit Grant Flow_  

[Interacting with the spotify API](https://developer.spotify.com/documentation/web-api/reference/)



## Content License
| File Name | Artist | License |
|-----------|--------|---------|
| [logo-black.png](./src/assets/logo-black.png) | Josiah Roa & Jonah Tuska | N/A |
| [logo-grey.png](./src/assets/logo-grey.png) | Josiah Roa & Jonah Tuska | N/A |
| [arrow.svg](./src/assets/arrow.svg)                 | Josiah Roa | N/A |
| [squiggle.svg](./src/assets/squiggle.svg)           | Josiah Roa | N/A |
| [playlist-bg-1.svg](./src/assets/playlist-bg-1.svg) | Josiah Roa | N/A |
| [playlist-bg-2.svg](./src/assets/playlist-bg-2.svg) | Josiah Roa | N/A |
| [about-bg-wave.svg](./src/assets/about-bg-wave.svg) | Josiah Roa | N/A |
| [bg-blurred.png](./src/assets/bg-blurred.png) | Jonah Tuska & Josiah Roa | N/A |

## Environments
Different enviornments set up different urls for endpoints to connect to production,
staging, or development servers and APIs.
- The **development** environment is ran by running `npm run dev` in the terminal
- The **production** enviornment is ran by running `npm start` in the terminal

## Getting started
To get the site running locally:
- Clone this repo
- npm install to install all required dependencies
- npm run dev to run the development environment on your system

Note: Data and some functionality will be missing if [roadetrixBackend](https://github.com/Roadetrix-Records/Back-End) is not also running locally on your system.

## Scripts
- `npm run dev` - Runs the development environment on your system
- `npm start` - Runs the production environment on your system

## Testing Documentation
There is currently no testing on this application.

## Making Contributions
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

### Issue/Bug Request
If you are having an issue with the existing project code, please submit a bug report under the following guidelines:

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests
We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

**Pull Request Guidelines**
- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Ensure that your code conforms to our existing code conventions and **test** coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.