import Link from 'next/link';
import c from 'classnames';

export default ({ url: { pathname } }) => (
  <div className="navbar">
    <div className="wrapper">
      <div className="left">
        <Link href="/" prefetch><h4>LENKILA</h4></Link>
      </div>
      <div className="right">
        <span className="no-mobile">คุณคือ :</span>
        <Link href="/" prefetch>
          <a className={c('nav-item', { active: pathname === '/' })}>
            ผู้เล่น</a>
        </Link>
        <Link href="/stadium" prefetch>
          <a className={c('nav-item', { active: pathname === '/stadium' })}>เจ้าของสนาม</a>
        </Link>
        <a className="nav-item no-hover">|</a>
        <Link href="/join" prefetch>
          <a className={c('nav-item', { active: pathname === '/join' })}>สปอนเซอร์</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .navbar h4 {
        color: #fff;
        // text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
        letter-spacing: 0.1rem;
        cursor: pointer;
      }
      .navbar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        margin: 55px 0 0;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
      }
      .wrapper {
        width: 90%;
        max-width: 1000px;
        margin: 0 auto;
      }
      .left, .right {
        display: inline-block;
        verticle-align: middle;
      }
      .right {
        float: right;
        color: #fff;
        font-size: 21px;
        font-weight: 600;
        // font-style: italic;
      }
      .nav-item {
        color: #fff;
        text-decoration: none;
        margin-left: 20px;
        background-color: rgba(255,255,255,0);
        transition: background-color 1s ease;
      }
      .nav-item.active {
        color: #ff9300;
        background-color: rgba(255,255,255,1);
        padding: 6px 12px 8px;
        border-radius: 8px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
        text-shadow: none;
      }
      .nav-item:hover {
        text-decoration: underline;
      }
      .nav-item.active:hover {
        text-decoration: none;
      }
      .nav-item.no-hover:hover {
        text-decoration: none;
      }
      @media (max-width: 750px) {
        .navbar {
          margin: 25px 0 0;
        }
        .left, .right {
          display: block;
          text-align: center;
        }
        .right {
          float: none;
          padding-bottom: 20px;
          margin: 0 auto;
          border-bottom: 1px solid #fff;
        }
        .nav-item {
          margin: 0 10px;
        }
        .nav-item.no-hover {
          display: none;
        }
        .no-mobile {
          display: none;
        }
      }
    `}</style>
  </div>
);
