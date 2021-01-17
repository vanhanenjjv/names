import React from 'react';

import { Layout } from 'antd';

import { Names } from './pages';


const App: React.FC = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Content style={{ display: 'grid', maxWidth: 960, margin: 16, justifyContent: 'center' }}>
        <Names />
      </Layout.Content>
    </Layout>
  );
};


export default App;
