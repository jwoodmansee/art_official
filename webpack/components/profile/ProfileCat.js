import React, { Component } from 'react';


let cat = this.state.selectedCategories;
let categories = Object.keys(cat).map( key => {
  let category = cat[key]

  return (
    <div>
    { category.length ?
      <dd key={key} className="text-capitalize">
        <span><strong>{key}:{' '}</strong>{cat[key].join(", ")}</span>
      </dd> : null
    }
    </div>
  )
});
