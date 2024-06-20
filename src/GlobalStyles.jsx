import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    :root {
        --primary-purple: #ce93d8;
        --secondary-purple: #5c3e61;
        --light-secondary-purple: #e6c9ec;
        --dark-secondary-purple: #705275;
        --scrollbar-background: #f1f1f1;
        --box-blur-background: rgba(255, 255, 255, 0.5);

        --date-button-width: 140px;
        --date-button-height: 60px;
        --list-width: 180px;
        --list-height: 276px;
        --film-img-width: 200px;
        --film-img-height: 325px;
        
        --session-popup-card-width: 1184px;
        --session-popup-card-height: 500px;
        
        --global-margin-bottom: 24px;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media(max-width: 820px) {
        :root {
            --session-popup-card-height: 700px;
        }
    }

    @media(max-width: 400px) {

        :root {
            --film-img-width: 185px;
            --film-img-height: 270px;

            --session-popup-card-height: 650px;
        }
    }
`;

export default GlobalStyles;
