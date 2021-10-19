import React from "react";
import styles from './SearchResults.module.css';
import {SearchResult} from './SearchResult/SearchResult';

export function SearchResults(props) {
    console.log(props.businesses);
    if(!props.businesses || !props.businesses.length) {
        return (<div></div>);
      
    }

    const searchResults = props.businesses.map(b => <SearchResult key ={b.id} businesses={b} />);
    return(
        <div className={styles['search-results']}>
         {searchResults}

        </div>
       
    );

}