import React, { Component } from 'react';

import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

import BookCart from '../containers/BookCart';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends Component {

  componentWillMount(){
    const { setBooks } = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data);
    });
   
  }

  render() {
   const { books, isReady, setFilter } = this.props
    return (
      <Container>
        <Menu/>
        <Filter setFilter={setFilter} />
        <Card.Group itemsPerRow={4}>
          {!isReady ? "Loading....." :
            books.map( (book, i) =>  <BookCart key={i} {...book}/>)
          }
        </Card.Group>
      </Container>
    );
  }
}

export default App;
