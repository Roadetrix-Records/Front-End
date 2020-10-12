// Define max-width screen sizes
const LG_DESKTOP = 1300;
const DESKTOP = 1070;
const TABLET = 880;
const SM_TABLET = 690;
const PHONE = 500;

// Export theme object
export default {
    colors: {
        primary: {
            spotifyGreen: '#2AB052',
            lightGreen: '#28bf55'
        },
        secondar: {
            errorRed: '#FF7C7C'
        },
        neutral: {
            black: '#1D1D1D',
            white: '#FFFFFF',
            grey: '#EBEBEB',
            darkGrey: '#848484',
            blackLight: '#262626'
        },
        gradient: {
            darkGradient: 'background: linear-gradient(0deg, rgba(29,29,29,1) 0%, rgba(0,0,0,1) 100%)'
        }
    },
    font: {
        family: 'Ubuntu, sans-serif',
        sizing: {
            h1: '',
            h2: '',
            h3: '',
            text: '18px',
            smText: ''
        }
    },
    breakpoints: {
        lgDesktop: `@media (max-width: ${LG_DESKTOP}px)`,
        desktop: `@media (max-width: ${DESKTOP}px)`,
        tablet: `@media (max-width: ${TABLET}px)`,
        smTablet: `@media (max-width: ${SM_TABLET}px)`,
        phone: `@media (max-width: ${PHONE}px)`,
        minTablet: `@media (min-width: ${TABLET + 1}px)`
    },
    spacing: {
        maxWidth: '1400px',
        wrapper: '80%'
    }
}