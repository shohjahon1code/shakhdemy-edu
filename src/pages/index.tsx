import React, { useState } from 'react';
import { Button, Heading, Input, Rating, Tag, Text, TextArea } from '../components';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/layout';
import { MenuItem } from '../interface/menu.interface';

const Home = ({ firstCategory, menu }: HomeProps) => {
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
      <ul>
        {menu.map(c=> (
          <li key={c._id.secondCategory}>{c._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
};

export default withLayout(Home);


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory });

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  firstCategory: number
  menu: MenuItem[]
}