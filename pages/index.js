import Layout from '../components/Layout';
import Banner from '../components/Banner';

export default ({ url }) => (
  <Layout url={url}>
    <Banner
      text="THAI COMMUNITY FOR SPORT LOVER"
      subText="หาเพื่อนเล่นกีฬา จองสนาม ส่วนลด จบที่เดียว พบกันเร็วๆนี้ที่.."
      imageClass="iphone"
    />
  </Layout>
);
