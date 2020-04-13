import styled from 'styled-components';
import Background from '../../assets/flower-bg.png';
import theme from '../../theme';

// Styles for parent components on home page
export const Releases = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
`;

export const Instagram = styled.section`
    width: 100%;
    height: 80vh;
    position: relative;
    .top{
        position: absolute;
        top: -1px;
        left: -1px;
        width: 40%;
        max-width: 500px;
        min-width: 300px;
        z-index: 1;
    }
    .bottom{
        position: absolute;
        bottom: -1px;
        right: 0;
        width: 40%;
        max-width: 500px;
        min-width: 300px;
        z-index: 1;
    }
    h2{
        padding-top: 40px;
        color: ${theme.colors.white};
        font-size: 5rem;
        font-family: ${theme.fonts.anton};
        letter-spacing: 1px;
        z-index: 2;
    }
`;

// Styles for Submission component
export const Submissions = styled.section`
    width: 100%;
    height: 90vh;
    background-color: ${theme.colors.lightPink};
`;

export const CTAContainer = styled.div`
    width: 80%;
    height: 100%;
`;

// Styles for Feed component
export const InstaFeed = styled.div`
    width: 80%;
    margin: 0 auto;
`;

// Styles for Recent component
export const Recent = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    h2{
        font-family: ${theme.fonts.anton};
        font-size: 4rem;
        color: ${theme.colors.white};
        margin: 50px 0;
        letter-spacing: 2px;
    }
    .recent-releases{
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 100px;
        .see-all{
            font-family: ${theme.fonts.roboto};
            color: ${theme.colors.white};
            font-size: 2rem;
            img{
                width: 30px;
                height: 30px;
                margin-top: 10px;
                cursor: pointer;
                &:hover{
                    animation: growAnimation 1s ease;
                    animation-iteration-count: 1;
                    width: 40px;
                }
            }
        }
    }
    @keyframes growAnimation{
        0% { 
            width: 30px; 
        } 
        100% { 
            width: 40px; 
         } 
    }
`;

// Styles for Card component
export const FeaturedCard = styled.div`
    display: flex;
    margin-top: 50px;
    .img-container{
        width: 250px;
        height: 250px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .img-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${theme.colors.darkGrey};
            opacity: 0;
            &:hover {
                opacity: 0.2;
                transition: opacity 0.5s ease;
            }
        }
    }
    .text-container{
        margin-left: 50px;
        h3{
            color: ${theme.colors.white};
            font-family: ${theme.fonts.anton};
            font-size: 4rem;
            letter-spacing: 2px;
        }
        p{
            font-family: ${theme.fonts.roboto};
        }
        .album{
            margin-top: 10px;
            color: ${theme.colors.lightPink};
            font-size: 2rem;
        }
    }
`;

export const RecentCard = styled.div`
    margin-right: 50px;
    h3{
        font-family: ${theme.fonts.anton};
        color: ${theme.colors.white};
        text-align: center;
        font-size: 2rem;
        margin-top: 20px;
        letter-spacing: 1px;
    }
    .img-container{
        width: 250px;
        height: 250px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        .img-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: ${theme.colors.darkGrey};
            opacity: 0;
            &:hover {
                opacity: 0.2;
                transition: opacity 0.5s ease;
            }
        }
    }
    p{
        margin-top: 10px;
        font-family: ${theme.fonts.roboto};
        color: ${theme.colors.lightPink};
        text-align: center;
        font-size: 1.8rem;
    }
`;

