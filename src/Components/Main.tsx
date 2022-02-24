import * as React from 'react';
import image from '../Assets/11.png';
import List from './List';
import './styles/main.css'
interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  
  return (
      <div className="main">
          <div className="main-header">
            <div className="text">
              Section
            </div>
            <div className="button">
              <svg className='logo' preserveAspectRatio='true' viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1565 10.1226H16.1044C14.6166 10.1219 13.4107 9.15813 13.4098 7.96819C13.4098 6.77825 14.6166 5.81448 16.1044 5.81375H20.1565" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5628 7.91889H16.2508" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25249 1H14.9039C17.8047 1 20.1564 2.88085 20.1564 5.2009V10.9463C20.1564 13.2664 17.8047 15.1472 14.9039 15.1472H6.25249C3.35167 15.1472 1 13.2664 1 10.9463V5.2009C1 2.88085 3.35167 1 6.25249 1Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              0.2 $XYZ
              <div className="tier">
                Tier 1
              </div>
            </div>
          </div>

          <div className="main-popup">
            <svg className='close' preserveAspectRatio='true' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.3738" cy="12.6436" r="12" fill="white"/>
              <path d="M15.8738 9.14355L8.87378 16.1436" stroke="#191B20" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.87378 9.14355L15.8738 16.1436" stroke="#191B20" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div className="text">

              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <div className="button">
                Tutorial
              </div>
            </div>
            <img src={image} alt="" />
          </div>

          <div className="rewards">
            Your Rewards
            <div className="balance">
              $ 0.26231428 
              <div className="button">
                <svg preserveAspectRatio='true' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2405 16.629H6.24048V14.6728H14.2405V2.93558H4.24048V8.8042H2.24048V1.95747C2.24048 1.41756 2.68848 0.97937 3.24048 0.97937H15.2405C15.7925 0.97937 16.2405 1.41756 16.2405 1.95747V15.6509C16.2405 16.1908 15.7925 16.629 15.2405 16.629Z" fill="white"/>
                  <path d="M12.2404 4.89178H6.24042L8.53342 7.13458L0.826416 14.6728L2.24042 16.0559L9.94742 8.51761L12.2404 10.7604V4.89178Z" fill="white"/>
                </svg>
                Custom Link
              </div>
            </div>
            <div className="indicators">
              <div className="i">$40 AVAX</div>
              <div className="i">$10 BNB</div>
              <div className="i">$210 BTC</div>
            </div>
          </div>

          <div className="refferals">
            <div className="box b1">
              <div className="text">
                <svg preserveAspectRatio='true' viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.9747" cy="12.3044" r="12.0673" fill="url(#paint0_linear_2_534)"/>
                  <path d="M15.3193 10.2586H11.0659C10.2514 11.1896 8.79163 13.0769 8.79163 14.6595C8.79163 15.3742 9.10917 17.7064 13.1926 17.7064C17.276 17.7064 17.5935 15.3742 17.5935 14.6595C17.5935 13.0769 16.1338 11.1896 15.3193 10.2586Z" fill="white"/>
                  <path d="M12.8543 9.58404V8.2299H13.5314V9.58404H15.0947L16.4489 6.87576H9.9368L11.2909 9.58404H12.8543V9.58404Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_2_534" x1="-11.1598" y1="12.3044" x2="12.9747" y2="36.4389" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#BBB5E2"/>
                  <stop offset="1" stop-color="#9C92DF"/>
                  </linearGradient>
                  </defs>
                </svg>

                <span>12.5%</span> of fee
              </div>
              Your Refferal Link for xyz    
              <div className="link">
                https://unityexchange.design 
                <svg preserveAspectRatio='true' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white"/>
                  <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white"/>
                </svg>

              </div>
            </div>

            <div className="box">
              <div className="text">
                <svg preserveAspectRatio='true' viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12.9747" cy="12.3044" r="12.0673" fill="url(#paint0_linear_2_534)"/>
                  <path d="M15.3193 10.2586H11.0659C10.2514 11.1896 8.79163 13.0769 8.79163 14.6595C8.79163 15.3742 9.10917 17.7064 13.1926 17.7064C17.276 17.7064 17.5935 15.3742 17.5935 14.6595C17.5935 13.0769 16.1338 11.1896 15.3193 10.2586Z" fill="white"/>
                  <path d="M12.8543 9.58404V8.2299H13.5314V9.58404H15.0947L16.4489 6.87576H9.9368L11.2909 9.58404H12.8543V9.58404Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_2_534" x1="-11.1598" y1="12.3044" x2="12.9747" y2="36.4389" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#BBB5E2"/>
                  <stop offset="1" stop-color="#9C92DF"/>
                  </linearGradient>
                  </defs>
                </svg>
                <span>12.5%</span> of fee
              </div>
              Your Refferal Link for xyz    
              <div className="link">
                https://unityexchange.design 
                <svg preserveAspectRatio='true' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white"/>
                  <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          <List />
      </div>
  );
};

export default Main;
