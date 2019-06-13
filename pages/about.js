import Link from 'next/link';
import Layout from '../components/Layout';

function About() {
  return (
    <Layout title='About'>
      <p>Full Stack JavaScript programmer</p>
      <img
        src='/static/javascript-logo.png'
        alt='JavaScript logo'
        height='200px'
      />
    </Layout>
  );
}

export default About;
