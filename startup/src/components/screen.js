import React from 'react'
import './../styles/screen.css'


function UpdateState(a, b, c, d, e){
    this.setState({
        author: b,
        location: a,
        title: c,
        view: d,
        price: e
})
}


class Screen extends React.Component{
    constructor (props){
        super(props);

        this.state={
            author: '',
            location: '',
            title: '',
            view: '',
            price: ''
        }
        UpdateState = UpdateState.bind(this);
    }
    render(){

        return <div>
            <div className= 'screenHead'>
                <p style={{color:"#F5E8E8", fontSize: '17px'}}>Book Check</p>
            </div>

            { !this.state.location ? 
                <div className='screenContent'>
                    <div className='book'>
                    <p className='content z'>Click on a book to see its details </p>
                        
                    </div>
                    
                    <div className='details'>

                    </div>
                </div>
              : 
                <div className='screenContent'>
                    <div className='book'>
                        <img src={this.state.location} alt='book' height="100%" width="50%" />
                    </div>

                    
                    <div className='details'>
                        <p className='content a'>Title: {this.state.title} </p>
                        <p className='content b'>Author: {this.state.author} </p>
                        <p className='content c'>No of Views: {this.state.view} </p>
                        <p className='content d'>Price: {this.state.price}</p>
                    </div>
                </div>}
            
        </div>
    }

}

export { Screen, UpdateState};