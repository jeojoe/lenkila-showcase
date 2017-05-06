import Layout from '../components/Layout';
import BannerStadium from '../components/BannerStadium';

export default ({ url }) => (
  <Layout url={url}>
    <BannerStadium
      text="เปิดช่องทางการขายใหม่บน LENKILA"
      subText="ร่วมเป็นพาร์ทเนอร์กับ LENKILA เพิ่มยอดขายให้กับธุรกิจคุณ"
      imageClass="join"
    />
  </Layout>
);
