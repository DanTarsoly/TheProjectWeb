import Link from 'next/link';
import Layout from '../../components/Layout';
import LoginComp from '../../components/account/Login';

const Login: React.FC = () => (
  <Layout>
    <h1>Log in</h1>
    <LoginComp/>
  </Layout>
);

export default Login;