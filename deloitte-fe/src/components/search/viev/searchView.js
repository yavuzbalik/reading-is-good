/* eslint-disable */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import SearchContainer from '../container/searchContainer';
import '../style/searchStyles.scss';

const Search = () => (
  <SearchContainer>
    {({ search, onChange, searchButtonOnClick }) => (
      <div className="search-container">
        <div className="search-container-right">
          <button className="search-icon-button"><FontAwesomeIcon icon={faSearch} /></button>
          <input className="search-input" type="text" placeholder="Ürün Ara" name="search" value={search} onChange={(e) => onChange(e.target.value)}/>
        </div>
        <button disabled={search.length < 3} onClick={() => searchButtonOnClick()} className={`search-button ${search.length < 3 && "disable"}`}>Ara</button>
      </div>
    )}
  </SearchContainer>
);

export default Search;
