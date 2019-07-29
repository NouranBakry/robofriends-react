import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='tc'>
        <input
         type='search'
          placeholder ='search robofriends'
          onChange={searchChange}/>
        </div>
        
    );

}
export default SearchBox;