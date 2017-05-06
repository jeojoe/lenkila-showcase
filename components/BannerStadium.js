import React, { Component } from 'react';

export default class BannerStadium extends Component {
  componentDidMount() {
    window.sr = ScrollReveal();
    sr.reveal('.text-reveal');
    sr.reveal('.iphone', { delay: 500 });
    sr.reveal('.browser', { delay: 500 });
  }
  render() {
    const { text, subText, imageClass } = this.props;
    return (
      <div className="banner">
        <div className="banner-gradient" />
        <div className="container">
          <div className="row">
            <div className="text-reveal">
              <h1>{text}</h1>
              <h5>{subText}</h5>
              <button className="button-primary">
                {imageClass === 'stadium' ? 'ลงทะเบียนใช้งาน' : 'ติดต่อทีมงาน'}</button>
            </div>
          </div>
          <div className="row" style={{ paddingTop: '50px' }}>
            {imageClass === 'stadium' ?
              <img src="/static/browser.png" alt="Stadium UI Preview" className="browser" />
              :
              <img src="/static/browser.png" alt="Stadium UI Preview" className="browser" />
            }
          </div>
        </div>
        <style jsx>{`
          .banner {
            background-image: url('/static/bg-1.jpg');
            padding-top: 140px;
            text-align: center;
            background-size: cover;
            background-position: center;
            position: relative;
            height: 930px;
            width: 100%;
            color: #fff;
            text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
          }
          .banner h1 {
            font-size: 56px;
          }
          .banner h5 {
            letter-spacing: 0.1rem;
          }
          .banner .button {
            margin: 20px 15px 0 0;
          }
          @keyframes cf3FadeInOut {
            0% {
              background-image: url('/static/bg-1.jpg');
            }
            45% {
              background-image: url('/static/bg-2.jpg');
            }
            55% {
              background-image: url('/static/bg-2.jpg');
            }
            100% {
              background-image: url('/static/bg-1.jpg');
            }
          }
          @media (max-width: 550px) {
            .banner {
              padding-top: 190px;
            }
          }
          @media (min-width: 1000px) {
            .banner {
              -webkit-transition: background-image 1s ease-in-out;
              -moz-transition: background-image 1s ease-in-out;
              -o-transition: background-image 1s ease-in-out;
              transition: background-image 1s ease-in-out;
              animation-name: cf3FadeInOut;
              animation-timing-function: ease-in-out;
              animation-iteration-count: infinite;
              animation-duration: 10s;
              animation-direction: alternate;
            }
          }
        `}</style>
        <style jsx global>{`
          .browser {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
