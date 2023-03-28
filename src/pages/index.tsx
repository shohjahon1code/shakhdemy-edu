import React, { useState } from 'react';
import { Button, Heading, Input, Rating, Tag, Text, TextArea } from '../components';

const Home = () => {
  const [isClick, setIsClick] = useState<boolean>(true);
  const [rating, setRating] = useState<number>(4);


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
      <TextArea placeholder='Enter value' /><br />
      <Rating rating={rating} setRating={setRating} isEditable={true} />
    </div>
  );
};

export default Home;
