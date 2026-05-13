import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <Link to={item.link}>{item.label}</Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}