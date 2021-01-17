import React from 'react';

import { List } from 'antd';

import { Name } from '../api';
import { WordCloud } from '@ant-design/charts';


interface ResultProps {
  names: Name[];
}

const Result: React.FC<ResultProps> = ({ names }) => {
  // if (names.length === 0) return <Empty description="No matches" />;
  // if (names.length >= 5)  return <Typography>Too many matches</Typography>;
  // if (names.length === 1) return <Typography>Solita has {names[0].amount} employees named {names[0].name}</Typography>;

  return (
    <WordCloud
      data={names}
      wordField="name"
      weightField="amount"
      color="#122c6a"
      wordStyle={{
        fontFamily: 'Verdana',
        fontSize: [24, 80]
      }} />
  );

  return (
    <List style={{ width: '100%' }}>
      {names.map(({ name }) => <List.Item key={name}>{name}</List.Item>)}
    </List>
  );
};


export default Result;
