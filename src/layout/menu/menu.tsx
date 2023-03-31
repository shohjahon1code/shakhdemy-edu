import React, { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import classes from './menu.module.css';
import { firstLevelMenu } from '../../helpers/constants';
import Link from 'next/link';
import cn from 'classnames';
import { IFirstLevelMenu, PageItem } from '../../interface/menu.interface';
import { useRouter } from 'next/router';

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext)
  const router = useRouter()

  const openSecondBlock = (category: string) => {

    setMenu && setMenu(
      menu.map(c => {
        if (c._id.secondCategory === category) {
          c.isOpened = !c.isOpened
        }
        return c
      })
    )
  }

  const buildFisrtLevel = () => {
    return (
      <>
        {firstLevelMenu.map(item => (
          <div key={item.route}>
            <>
              <Link href={`/${item.route}`}>
                <div className={cn(classes.firstLevel, {
                  [classes.firstLevelActive]: item.id === firstCategory
                })}>
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </Link>
              {item.id === firstCategory && buildSecondLevel(item)}
            </>
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
    return (
      <div className={classes.secondBlock}>
        {menu.map(c => {
          if (c.pages.map(p => p._id).includes(router.asPath.split('/')[2])) {
            c.isOpened = true
          }

          return (
            <div key={c._id.secondCategory} onClick={() => openSecondBlock(c._id.secondCategory)}>
              <div className={classes.secondLevel}>{c._id.secondCategory}</div>
              <div className={cn(classes.secondLevelBlock, {
                [classes.secondLevelBlockActive]: c.isOpened
              })}>{buildThirdLevel(c.pages, menuItem.route)}</div>
            </div>
          )
        })}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map(p => (
      <Link key={p._id} href={`/${route}/${p.alias}`} className={cn(classes.thirdLevel, {
        [classes.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
      })}>{p.title}</Link>
    ))
  }

  return (
    <div className={classes.menu}>
      {buildFisrtLevel()}
    </div>
  )
}

export default Menu
