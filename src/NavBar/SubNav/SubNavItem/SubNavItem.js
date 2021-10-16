import React from "react";
import styles from './SubNavItem.module.css';

export function SubNavItem(props) {
    const borderClass = props.showRightBorder ? styles[`right-border`] : '';
    return(
        <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">

          <div className={`${styles['sub-nav-item']} ${borderClass}`} aria-haspopup="true" aria-controls="dropdown-menu4">
          <span className="icon is-small"><i className={`fas ${props.icon}`}></i></span>
            <span>{props.label}</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </div>
      </div>
         <div class="dropdown-menu" id="dropdown-menu4" role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
            </div>
          </div>
        </div>
      </div>
    );
}