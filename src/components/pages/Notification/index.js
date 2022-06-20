import { Outlet } from 'react-router-dom';
import { Heading1, TabNavigation } from '../../atoms';
import Layout from '../includes/Layout';

export default function Index() {
  return (
    <Layout showMenu={false}>
      <Heading1
        showBackPage={true}
        title={'Pemberitahuan'}
        addClass="text-xl md:text-2xl font-medium"
      />
      <div className="relative my-4 grid">
        <TabNavigation />
      </div>

      <Outlet />
    </Layout>
  );
}
