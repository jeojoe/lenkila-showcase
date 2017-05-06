import React, { Component } from 'react';

export default class Banner extends Component {
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
          <div className="six columns">
            <div className="text-reveal">
              <h1>{text}</h1>
              <h5>{subText}</h5>
              <div className="download">
                <img src="/static/ios.png" alt="LENKILA on Apple Store" width="190" />
                <img src="/static/android.png" alt="LENKILA on Google Play" width="190" />
              </div>
            </div>
          </div>
          <div className="six columns" style={{ position: 'relative' }}>
            <div className={imageClass} />
          </div>
        </div>
        <style jsx>{`
          .banner {
            background-image: url('/static/bg-2.jpg');
            padding-top: 200px;
            background-size: cover;
            background-position: center;
            position: relative;
            height: 670px;
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
          .download img {
            margin: 20px 15px 0 0;
            width: 190px;
          }
          @keyframes cf3FadeInOut {
            0% {
              background-image: url('/static/bg-2.jpg');
            }
            45% {
              background-image: url('/static/bg-1.jpg');
            }
            55% {
              background-image: url('/static/bg-1.jpg');
            }
            100% {
              background-image: url('/static/bg-2.jpg');
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
          @media (max-width: 550px) {
            .banner {
              padding-top: 165px;
              height: 900px;
            }
          }
        `}</style>
        <style jsx global>{`
          .iphone {
            position: absolute;
            top: -80px;
            left: 70px;
            width: 340px;
            height: 685px;
            // background-color: red;
            background-image: url('/static/iphone-black.png');
            background-size: cover;
            background-position: center;
          }
          @media (max-width: 750px) {
            .iphone {
              margin: 30px 0;
              position: static;
              background-size: contain;
              background-repeat: no-repeat;
              top: 0; left: 0;
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}
