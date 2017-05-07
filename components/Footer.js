import Link from 'next/link';
import { FBPage } from 'facebook-plugins';
// import FacebookProvider, { Like } from 'react-facebook';

export default () => (
  <div className="footer">
    <div className="container">
      <p>&#169; 2017 LENKILA</p>
      <div>
        <Link href="/" prefetch><a>User</a></Link>
        <Link href="/stadium" prefetch><a>Stadium</a></Link>
        <Link href="/join" prefetch><a>Work with Us</a></Link>
      </div>
      <div className="fb-wrapper">
        <FBPage
          appId="1699046323689709"
          href="https://www.facebook.com/lenkila"
          tabs={['timeline']}
        />
        {/* <FacebookProvider appId="1699046323689709">
          <Like href="http://www.facebook.com/lenkila" colorScheme="dark" showFaces share width="400" />
        </FacebookProvider> */}
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 50px 0;
        color: #fff;
      }
      .footer p {
        margin: 10px 0;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
      }
      .footer a {
        margin: 0 15px 0 0;
        text-decoration: none;
      }
      .footer a:hover {
        text-decoration: underline;
      }
      .fb-wrapper {
        maxWidth: 400px;
        overflow: hidden;
        padding-top: 20px;
      }
      @media (max-width: 1080px) {
        .footer {
          padding-top: 100px;
        }
      }
    `}</style>
  </div>
);
