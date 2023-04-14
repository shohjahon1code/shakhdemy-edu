import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import classes from "./menu.module.css";
import { firstLevelMenu } from "../../helpers/constants";
import Link from "next/link";
import cn from "classnames";
import { IFirstLevelMenu, PageItem } from "../../interface/menu.interface";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 30,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const openSecondBlock = (category: string) => {
    setMenu &&
      setMenu(
        menu.map((c) => {
          if (c._id.secondCategory === category) {
            c.isOpened = !c.isOpened;
          }
          return c;
        })
      );
  };

  const buildFisrtLevel = () => {
    return (
      <>
        {firstLevelMenu.map((item) => {
          return (
            <div key={item.route}>
              <>
                <Link href={`/${item.route}/${menu[0].pages[0]._id}`}>
                  <div
                    className={cn(classes.firstLevel, {
                      [classes.firstLevelActive]: item.id === firstCategory,
                    })}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </Link>
                {item.id === firstCategory && buildSecondLevel(item)}
              </>
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenu) => {
    return (
      <div className={classes.secondBlock}>
        {menu.map((c) => {
          if (c.pages.map((p) => p._id).includes(router.asPath.split("/")[2])) {
            c.isOpened = true;
          }

          return (
            <div
              key={c._id.secondCategory}
              onClick={() => openSecondBlock(c._id.secondCategory)}
            >
              <div className={classes.secondLevel}>{c._id.secondCategory}</div>
              <motion.div
                variants={variants}
                layout
                initial={c.isOpened ? "visible" : "hidden"}
                animate={c.isOpened ? "visible" : "hidden"}
                className={cn(classes.secondLevelBlock)}
              >
                {buildThirdLevel(c.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
        <Link
          href={`/${route}/${p._id}`}
          className={cn(classes.thirdLevel, {
            [classes.thirdLevelActive]: `/${route}/${p._id}` === router.asPath,
          })}
        >
          {p.title}
        </Link>
      </motion.div>
    ));
  };

  return <div className={classes.menu}>{buildFisrtLevel()}</div>;
};

export default Menu;
