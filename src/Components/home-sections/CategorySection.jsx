import React from 'react';
import { categories } from '../../data/categories';
import SectionTitle from '../ui/SectionTitle';

export default function CategorySection(){
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Shop by Category" subtitle="Handpicked categories" />
        <div className="grid">
          {categories.map(c=> (
            <div key={c.id} className="card">
              <h4>{c.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
