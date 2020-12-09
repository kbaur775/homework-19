import React from "react";

function FilterBar(props) {
  return (
    <div>
        <em>Filter:</em> <input id="filter" onChange={props.edit} />
    </div>
  );
}

export default FilterBar;
