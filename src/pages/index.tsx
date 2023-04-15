import React from "react";
import { HomePageComponent } from "../page-components";
import { GetServerSideProps } from "next";
import axios from "axios";
import { MenuItem } from "../interface/menu.interface";
import { withLayout } from "../layout/layout";

const Home = (): JSX.Element => {
  return <HomePageComponent />;
};

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    { firstCategory: 0 }
  );

  return {
    props: {
      menu,
    },
  };
};

interface HomeProps {
  menu: MenuItem[];
}
