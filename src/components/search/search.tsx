import { SearchProps } from "./search.props";
import cn from "classnames";
import classes from "./search.module.css";
import Input from "../input/input";
import Button from "../button/button";
import SearchIcon from "./search.svg";
import { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../../context/app.context";
import { PageItem } from "../../interface/menu.interface";
import Text from "../text/text";
import Link from "next/link";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const { menu } = useContext(AppContext);
  const [search, setSearch] = useState<string>("");
  const [response, setResponse] = useState<PageItem[]>([]);
  const router = useRouter();

  const searchHandler = (id: string) => {
    router.push(`/${router.query?.type || 'courses'}/${id}`);
    setResponse([]);
    setSearch("");
    // if (!search.length) return;
    // router.push({ pathname: "/search", query: { q: search } });
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const allPages = menu.map((c) => c.pages).flat();
    const { value } = e.target;
    setSearch(value);
    const response = allPages.filter(
      (c) => c.title.toLowerCase().indexOf(value.toLowerCase()) != -1
    );
    setResponse(response);

    if (value.length === 0) {
      setResponse([]);
    }
  };

  return (
    <div className={cn(className, classes.search)} {...props}>
      <Input
        placeholder="Search..."
        className={classes.input}
        value={search}
        onChange={changeHandler}
      />
      <Button
        appearance="primary"
        className={classes.button}
        onClick={() => searchHandler}
      >
        <SearchIcon />
      </Button>
      {response.length ? (
        <div className={classes.searchResponse}>
          {response.map((c) => (
            <div onClick={() => searchHandler(c._id)} key={c._id}>
              {c.title}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
