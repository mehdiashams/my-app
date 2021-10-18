import React from "react";
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary() {
    return(
 <div className={styles.container}>
          <div className={styles['search-summary']}>
          <h1 className='subtitle'> <strong> Businesses</strong> Naperville</h1> 
          <p> Showing 1 -20 out of 400 results</p>   
        </div>

        <div className={styles.filters}>
        <button className="button">
         <span className="icon"> <i className="fas fa-sliders-h"></i> </span>
          <span>All filters</span>

          <div className="buttons has-addons">
          <button className="button">$</button>
          <button className="button">$$</button>
          <button className="button">$$$</button>
          <button className="button">$$$$</button>

       </div>
       </button>

       <button className="button">
         <span className="icon"> <i className="fas fa-clock"></i> </span>
          <span>Open now</span>
       </button>
       <button className="button">
         <span className="icon"> <i className="fas fa-dollar-sign"></i> </span>
          <span>Cashback</span>
       </button>
      </div>
   </div>
        
    );
}