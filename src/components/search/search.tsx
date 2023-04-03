import { SearchProps } from "./search.props";
import cn from 'classnames';
import classes from './search.module.css';
import Input from "../input/input";
import Button from "../button/button";
import SearchIcon from './search.svg';
import { useState } from "react";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter()

  const searchHandler = () => {
    if (!search.length) return;
    router.push({ pathname: '/search', query: {q:search} })
  }

  return (
    <div className={cn(className, classes.search)} {...props}>
      <Input placeholder="Search..." className={classes.input} value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button appearance="primary" className={classes.button} onClick={searchHandler}>
        <SearchIcon />
      </Button>
    </div>
  )
}

export default Search
