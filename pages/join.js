import Layout from '../components/Layout';
import BannerStadium from '../components/BannerStadium';
import FeatureText from '../components/stadium/FeatureText';

export default ({ url }) => (
  <Layout url={url}>
    <BannerStadium
      text="เปิดช่องทางการขายใหม่บน LENKILA"
      subText="ร่วมเป็นพาร์ทเนอร์กับ LENKILA เพิ่มยอดขายให้กับธุรกิจคุณ"
      imageClass="join"
    />
    <div className="container">
      <div className="feature-wrapper">
        <div className="row">
          <div className="twelve columns head-line">
            <h3>สปอนเซอร์ - ร่วมสนับสนุนชุมชนการเล่นกีฬา</h3>
            <p>Sponsor และ โฆษณาผลิตภัณฑ์ของคุณให้กับสนามกีฬาต่างๆ พร้อม Feedback ที่น่าเชื่อถือ</p>
          </div>
        </div>
        <div className="row">
          <div className="one-half column">
            <FeatureText
              iconClass="fa-handshake-o"
              header="สปอนเซอร์"
              description="สปอนเซอร์ผลิตภัณฑ์ให้กับสนามกีฬาในเครือ LENKILA เพื่อเพิ่มยอดขายให้แก่บริษัท"
            />
          </div>
          <div className="one-half column">
            <FeatureText
              iconClass="fa-search"
              header="ติดตามผล"
              description="เก็บ Feedback จากลูกค้าได้โดยตรงผ่านแอพพลิเคชัน LENKILA ทันทีหลังลูกค้าออกกำลังกายเสร็จ"
            />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <FeatureText
              iconClass="fa-bullhorn"
              header="โปรโมท"
              description="ทำให้ผลิตภัณฑ์เป็นที่รู้จักในหมู่คนเล่นกีฬา ผ่านแบนเนอร์ในแอพพลิเคชัน LENKILA และป้ายประกาศรูปแบบต่างๆสำหรับ สนามในเครือ LENKILA"
            />
          </div>
        </div>
        <p className="close-line" />
        <button className="button-primary">
          ติดต่อ 083-757-9082
        </button>
      </div>
    </div>
    <style jsx>{`
      .feature-wrapper {
        box-shadow: 0px 3px 10px rgba(0,0,0,0.4);
        border-radius: 10px;
        margin: -80px 0 30px;
        padding: 30px 5% 50px;
        background-color: #fff;
      }
      .head-line {
        text-align: center;
      }
      .head-line h3 {
        color: #ff9300;
      }
      .close-line {
        margin-top: 20px;
        text-align: center;
      }
      @media (max-width: 1000px) {
        .feature-wrapper {
          margin-top: -150px;
        }
      }
      .button-primary {
        margin: 0 auto;
        display: block;
        font-size: 20px;
        height: 70px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
      }
    `}</style>
  </Layout>
);
