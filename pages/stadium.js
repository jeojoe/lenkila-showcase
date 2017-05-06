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
            <FeatureText />
          </div>
          <div className="one-half column">
            <FeatureText />
          </div>
        </div>
        <div className="row">
          <div className="one-half column">
            <FeatureText />
          </div>
          <div className="one-half column">
            <FeatureText />
          </div>
        </div>
        <div className="row">
          <div className="one-half column">
            <FeatureText />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .feature-wrapper {
        box-shadow: 0px 2px 4px rgba(0,0,0,0.3);
        border-radius: 10px;
        margin: -80px 0 30px;
        padding: 15px 20px;
        background-color: #fff;
      }
      @media (max-width: 1000px) {
        .feature-wrapper {
          margin-top: -150px;
        }
      }
    `}</style>
  </Layout>
);
