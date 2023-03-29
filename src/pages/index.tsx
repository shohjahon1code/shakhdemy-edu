import React, { useState } from 'react';
import { Button, Heading, Input, Rating, Tag, Text, TextArea } from '../components';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/layout';

const Home = () => {
  const [isClick, setIsClick] = useState<boolean>(true);
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
    </>
  );
};

export default withLayout(Home);


export const getServerSideProps: GetServerSideProps = async () => {

  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory: 1 });

  return {
    props: {
      data
    }
  };
};