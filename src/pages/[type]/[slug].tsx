import React from "react";
import { withLayout } from "../../layout/layout";
import { GetServerSideProps } from "next";
import axios from "axios";
import { MenuItem } from "../../interface/menu.interface";
import { PageModel } from "../../interface/page.interface";
import { ProductModel } from "../../interface/product.interface";
import { firstLevelMenu } from "../../helpers/constants";
import { CoursePageComponent } from "../../page-components";
import Seo from "../../layout/seo/seo";

const Index = ({ firstCategory, page, products }: PageProps) => {
  return (
    <Seo
      metaTitle={page.title}
      metaDescription={page.description}
      metaKeyword={page.tags.toString()}
    >
      <CoursePageComponent
        products={products}
        page={page}
        firstCategory={firstCategory}
      />
    </Seo>
  );
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const firstCategory = 0;
  const { slug, type } = query;

  if (!slug) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find((c) => c.route === type);

  const { data: menu } = await axios.post<MenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
    { firstCategory: firstCategoryItem.id }
  );
  const { data: page } = await axios.get<PageModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`
  );
  const { data: products } = await axios.post<ProductModel>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,
    { category: slug }
  );
  return {
    props: { menu, page, products, firstCategory: firstCategoryItem.id },
  };
};

interface PageProps extends Record<string, unknown> {
  menu: MenuItem[];
  page: PageModel;
  products: ProductModel[];
  firstCategory: number;
}
