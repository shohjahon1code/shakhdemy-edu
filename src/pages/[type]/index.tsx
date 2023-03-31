import { GetServerSideProps } from 'next'
import React, { useEffect } from 'react'
import { firstLevelMenu } from '../../helpers/constants'
import axios from 'axios'
import { MenuItem } from '../../interface/menu.interface'
import { withLayout } from '../../layout/layout'

const Type = ({ firstCategory, menu }: TypeProps) => {

  return (
    <div>
      div
    </div>
  )
}

export default withLayout(Type)

export const getServerSideProps: GetServerSideProps<TypeProps> = async ({ query }) => {
  const { type } = query

  if (!type) return { notFound: true }

  const firstCategoryItem = firstLevelMenu.find(c => c.route === type)
  if (!firstCategoryItem) {
    return { notFound: true }
  }

  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory: firstCategoryItem.id });

  return {
    props: {
      menu, firstCategory: firstCategoryItem.id
    }
  }
}


interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}