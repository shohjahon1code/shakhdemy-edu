import React, { useState } from 'react';
import { Button, Heading, Input, Tag, Text, TextArea } from '../components';

const Home = () => {
  const [isClick, setIsClick] = useState<boolean>(true);
  return (
    <div>
      <Heading tag='h4'>heading</Heading>
      <Text size='s'>text</Text>
      <Tag color='green' size='m'>nimadir</Tag>
      <Tag color='red' size='s'>Ok</Tag>
      <Button appearance='ghost'>Button</Button>
      <Button appearance='primary'>Button</Button>
      <Button appearance='primary' onClick={() => setIsClick(prev => !prev)} arrow={isClick ? 'down' : 'right'}>Arrow</Button>
      <Button appearance='ghost' arrow='right'>Arrow</Button>
      <br />
      <Input placeholder='Enter' /><br />
      <br />
      <TextArea placeholder='Enter value' />
    </div>
  );
};

export default Home;
