import React from 'react';

class EachBook extends React.Component{


    render (){
        return (
            <div className='eachbook' onClick={this.props.handle}>
                <img src={this.props.location} alt='book' height="100%" width="100%" />
                <p className='below'>{this.props.title} <br/>by {this.props.author}</p>
            </div>
        )
    }
}

/*
function EachBook(props) {
    return (
        <div className='eachbook' onClick={props.handle}>
            <img src={props.location} alt='book' height="100%" width="100%" />
            <p className='below'>{props.title} <br/>by {props.author}</p>
        </div>
    )
}
*/

export default EachBook;