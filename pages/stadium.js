import Layout from '../components/Layout';
import BannerStadium from '../components/BannerStadium';

export default ({ url }) => (
  <Layout url={url}>
    <BannerStadium
      text="สะดวกยิ่งขึ้น คนเล่นมากขึ้น"
      subText="ลดปัญหาช่องว่าง เพิ่มยอดการจอง เก็บสถิติ แอพเราที่เดียว"
      imageClass="browser"
    />
  </Layout>
);
