import Link from 'next/link';

export default () => (
  <div className="footer">
    <div className="container">
      <p>&#169; 2017 LENKILA</p>
      <div>
        <Link href="/" prefetch><a>User</a></Link>
        <Link href="/stadium" prefetch><a>Stadium</a></Link>
        <Link href="/join" prefetch><a>Work with Us</a></Link>
      </div>
    </div>
    <style jsx>{`
      .footer {
        padding: 50px 0;
        color: #999;
      }
      .footer p {
        margin: 10px 0;
      }
      .footer a {
        margin: 0 15px 0 0;
        text-decoration: none;
      }
      .footer a:hover {
        text-decoration: underline;
      }
      @media (max-width: 1080px) {
        .footer {
          padding-top: 100px;
        }
      }
    `}</style>
  </div>
);
