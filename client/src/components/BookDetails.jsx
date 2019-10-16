import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getBookQuery} from '../querys/querys';


class BookDetails extends Component {
    render(){ 
        console.log(this.props);
        return(
            <div id ="book-details">
                <p>Output book details here </p>
            </div>
            
        );
    }
}

export default graphql(getBookQuery,{
    options: (props) =>{
        return {
            variables:{
                id: props.bookId
            }
        }
    }
})(BookDetails);
