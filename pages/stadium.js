import Layout from '../components/Layout';
import BannerStadium from '../components/BannerStadium';
import FeatureText from '../components/stadium/FeatureText';

export default ({ url }) => (
  <Layout url={url}>
    <BannerStadium
      text="สะดวกยิ่งขึ้น คนเล่นมากขึ้น"
      subText="ลดปัญหาช่องว่าง เพิ่มยอดการจอง เก็บสถิติ แอพเราที่เดียว"
      imageClass="browser"
    />
    <div className="container">
      <div className="feature-wrapper">
        <div className="row">
          <div className="one-half column">
            <FeatureText
              iconClass="fa-bookmark"
              header="ระบบการจองสนาม"
              description="สามารถบันทึกข้อมูลการจองและข้อมูลลูกค้าได้ทันทีเมื่อลูกค้าใช้แอพพลิเคชัน LENKILA ในการจอง และสนามสามารถบันทึกการจองด้วยตัวเองได้ด้วย"
            />
          </div>
          <div className="one-half column">
            <FeatureText
              iconClass="fa-rocket"
              header="ระบบบูสท์ (Boosts)"
              description="โปรโมทสนาม และโปรโมชันของคุณ ให้ลูกค้าประจำและขาจรเห็น จนโน้มน้าวลูกค้าให้จองสนามได้ในที่สุด"
            />
          </div>
        </div>
        <div className="row">
          <div className="one-half column">
            <FeatureText
              iconClass="fa-line-chart"
              secondIcon
              header="ระบบข้อมูลลูกค้า และผลประกอบการ"
              description="บันทึกข้อมูลของลูกค้าต่างๆ และวิเคราะห์วันเวลาที่จองบ่อยของลูกค้า วิเคราะห์รายได้ของสนามและอัตรากาจองสนามในรูปแบบรายวัน เดือน ปี เพื่อให้สนามนำไปประกอบปรับแผนธุรกิจให้ผลประกอบการมีกำไรที่มากขึ้น"
            />
          </div>
          <div className="one-half column">
            <FeatureText
              iconClass="fa-retweet"
              header="อุดตารางฟันหลอ"
              description="ระบบนำเสนอเวลาการจองให้ลูกค้า เพื่อสามารถใช้ตารางสนามให้แน่นไปด้วยการจองของลูกค้าอย่างมีประสิทธิภาพสูงสุด"
            />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            <FeatureText
              iconClass="fa-money"
              header="ระบบเก็บเงิน"
              description="ลูกค้าสามารถเติมเงินเพื่อจ่ายค่ามัดจำการจอง ค่าสนาม และค่าใช้จ่ายอื่นๆเช่น ขนมและน้ำ  ผ่านแอพลิเคชัน LENKILA"
            />
          </div>
        </div>
        <p className="close-line">และ Benefit อื่นๆอีกมากมาย ที่เราสร้างมาเพื่อคุณ</p>
        <a href="https://goo.gl/forms/UZMmB43cIdz0kAnw2" target="__blank" style={{textDecoration: 'none'}}>
          <button className="button-primary">
            สมัครใช้งาน <span className="font-fix">LENKILA</span> ฟรี!
          </button>
        </a>
        <p className="close-line">หรือติดต่อ 083-757-9082</p>
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
