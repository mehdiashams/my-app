import React from "react";
import { SubNavItem } from "./SubNavItem/SubNavItem";
import styles from './SubNav.module.css';

export function SubNav() {
    return (
        
        <div className={styles['sub-nav']}>
      
          <div>
        <SubNavItem label='Restaurants' icon='fa-utensils'/>
        <SubNavItem label='Home Services' icon='fa-home'/>
        <SubNavItem label='Auto Services' icon= 'fa-car-side'/>
        <SubNavItem label='More' icon='fa-info-circle' showRightBorder/>
        </div>
        <div>
        
        <button className={`button ${styles['subnav-button']}`}>
      <span className="icon"><i className="fas fa-pen"></i></span>
      <span>Write a Review</span>
       </button>

       <button className={`button ${styles['subnav-button']}`} >
        <span className="icon"><i className="fas fa-hotel"></i></span>
      <span>For Businesses</span>
       </button>
        </div>
        </div>
        
        );
}