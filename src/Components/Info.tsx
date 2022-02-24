import * as React from 'react';
import './styles/info.css';
import image from '../Assets/Ellipse.png';
interface IInfoProps {
}

const Info: React.FunctionComponent<IInfoProps> = (props) => {
  return (
      <div className="info">
          <div className="info-header">
            <div className="b1">
              <img className='logo' src={image} alt="" />
              Avalanche
              <svg className='down' preserveAspectRatio='true' viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.82277 0.0812988L4.52778 3.72408L1.2328 0.0812988L0.220612 1.20276L4.52778 5.97496L8.83495 1.20276L7.82277 0.0812988Z" fill="white"/>
              </svg>

            </div>
            <div className="b2">
              <svg className='logo' preserveAspectRatio='true' viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1565 10.1226H16.1044C14.6166 10.1219 13.4107 9.15813 13.4098 7.96819C13.4098 6.77825 14.6166 5.81448 16.1044 5.81375H20.1565" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.5628 7.91889H16.2508" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25249 1H14.9039C17.8047 1 20.1564 2.88085 20.1564 5.2009V10.9463C20.1564 13.2664 17.8047 15.1472 14.9039 15.1472H6.25249C3.35167 15.1472 1 13.2664 1 10.9463V5.2009C1 2.88085 3.35167 1 6.25249 1Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              0xf6...1353
              <svg className='down' preserveAspectRatio='true' viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2969 0.236542L6.026 3.92013L1.75509 0.236542L0.443115 1.37057L6.026 6.19624L11.6089 1.37057L10.2969 0.236542Z" fill="white"/>
              </svg>
            </div>
          </div>
          <div className="link">
            <div className="top">
            <svg preserveAspectRatio='true' viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.159832 6.55645L4.36365 2.35263L5.13492 3.1239L1.8622 6.39663H11.4546C11.7562 6.39663 12 6.64099 12 6.94209C12 7.24318 11.7562 7.48754 11.4546 7.48754H1.8622L5.13492 10.7603L4.36365 11.5315L0.159832 7.32772C-0.0534402 7.11445 -0.0534402 6.76972 0.159832 6.55645Z" fill="white"/>
            </svg>

              Custom Link
            </div>
            https://testnet.xyz.xyz/trade?ref=
            <div className="custom-link">
              ENTER
            </div>
            <div className="buttons">
              <div className="b1">
              <svg preserveAspectRatio='true' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2405 16.629H6.24048V14.6728H14.2405V2.93558H4.24048V8.8042H2.24048V1.95747C2.24048 1.41756 2.68848 0.97937 3.24048 0.97937H15.2405C15.7925 0.97937 16.2405 1.41756 16.2405 1.95747V15.6509C16.2405 16.1908 15.7925 16.629 15.2405 16.629Z" fill="white"/>
                <path d="M12.2404 4.89178H6.24042L8.53342 7.13458L0.826416 14.6728L2.24042 16.0559L9.94742 8.51761L12.2404 10.7604V4.89178Z" fill="white"/>
              </svg>

                Custom Link
              </div>
              <div className="b2">
              <svg preserveAspectRatio='true' viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.05151 7.8042H0.0515137V9.8042H6.05151V12.8042L10.0515 8.8042L6.05151 4.8042V7.8042Z" fill="white"/>
                <path d="M15.0515 16.8042H1.05151C0.499514 16.8042 0.0515137 16.3562 0.0515137 15.8042V11.8042H2.05151V14.8042H14.0515V2.8042H2.05151V5.8042H0.0515137V1.8042C0.0515137 1.2522 0.499514 0.804199 1.05151 0.804199H15.0515C15.6035 0.804199 16.0515 1.2522 16.0515 1.8042V15.8042C16.0515 16.3562 15.6035 16.8042 15.0515 16.8042Z" fill="white"/>
              </svg>

                Cancel
              </div>
            </div>
          </div>
      </div>
  );
};

export default Info;
