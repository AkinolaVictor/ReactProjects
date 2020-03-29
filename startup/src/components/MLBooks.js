import React from 'react';
import './../styles/shared.css';
import EachBook from './eachbook';
import BookDetails from './data';
import {UpdateState} from "./screen";

class MLBooks extends React.Component{

    constructor(props){
        super(props);

        let title = [], location = [], author = [], view=[], price = [];
        for (let i=1; i<BookDetails.length; i++){

            if (BookDetails[i].category=='Machine Learning'){
                location.push(BookDetails[i].location);
                title.push(BookDetails[i].title);
                author.push(BookDetails[i].author);
                view.push(BookDetails[i].views);
                price.push(BookDetails[i].price);
            }
            
        }

        this.state={
            author: author,
            location: location,
            title: title,
            view: view,
            price: price
        }

        //this.handleClick= this.handleClick.bind(this);

    }
  

    handleClick (location,author,title,n,a,b){
        a = this.state.view[n];
        b = this.state.price[n];
        UpdateState(location, author, title,  a, b);
    }



    style1 = {
        color:'white',
        paddingLeft: '25px'
    }



    render(){
        return <div className='pybooks'>
            <div id='header'>
                <p style = {this.style1}>Machine Learning Books</p>
            </div>

            <div className = 'books'>
                            
               <EachBook 
                    location={this.state.location[0]}
                    author={this.state.author[0]}
                    title={this.state.title[0]}
                    handle= { () => this.handleClick(
                        this.state.location[0],
                        this.state.author[0],
                        this.state.title[0],
                        0
                    )}
                />
                
                <EachBook 
                    location={this.state.location[1]}
                    author={this.state.author[1]}
                    title={this.state.title[1]}
                    handle= { () => this.handleClick(
                        this.state.location[1],
                        this.state.author[1],
                        this.state.title[1],
                        1
                    )}
                />

                <EachBook 
                    location={this.state.location[2]}
                    author={this.state.author[2]}
                    title={this.state.title[2]}
                    handle= { () => this.handleClick(
                        this.state.location[2],
                        this.state.author[2],
                        this.state.title[2],
                        2
                    )}
               />
                
            </div>

 
 
        </div>
    }
}

export default MLBooks;