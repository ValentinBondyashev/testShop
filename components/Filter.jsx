import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Filter = ( { setFilter, filterBy, setSearchQuery ,searchQuery } ) => {
    return (
      <Menu secondary>
        <Menu.Item name='Все' active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')} /> 
        <Menu.Item name='Цена(дорогие)' active={filterBy === 'price_high'} onClick={setFilter.bind(this, 'price_high')} />
        <Menu.Item name='Цена(дешевые)' active={filterBy === 'price_low'} onClick={setFilter.bind(this, 'price_low')} />
        <Menu.Item name='По автору' active={filterBy === 'author'} onClick={setFilter.bind(this, 'author')} />
        <Menu.Item>
          <Input 
            icon="search" 
            onChange={e => setSearchQuery(e.target.value) } 
            value={searchQuery} 
            placeholder="Поиск...."/>
        </Menu.Item>   
      </Menu>
    )
}

export default  Filter;
  
