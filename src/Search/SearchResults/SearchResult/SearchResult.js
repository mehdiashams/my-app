import React from "react";
import { BusinessRating } from "../../../BusinessRating/BusinessRating";
import styles from './SearchResult.module.css';

export function SearchResult() {
    return(
        <div className={styles['search-result']}>
          <img src='https://via.placeholder.com/210/' alt='business' className={styles['business-image']}/>
          <div className={styles['business-info']}>
          <h2 className="subtitle">Burger Place</h2>    
          <BusinessRating/>
          <p>$$ <span class="tag">Burgers</span> <span class="tag">Fast Food</span>   </p>
          </div>
          <div>
          <div className={styles['contact-info']}> </div>    
          <p> +6301234578</p>
          <p> Example Street 5</p>
          <p> 12345 Naperville</p>
          </div>
          
        </div>

    );
}