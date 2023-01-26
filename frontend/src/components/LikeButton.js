import React from 'react';
import { Button,} from "react-bootstrap"; 

class LikeButton extends React.Component {
    state = {
        likes: 0 
    }
    handleclick = (e) => {
    e.currentTarget.disabled = true;
    console.log('button clicked');

        this.setState({
            likes: this.state.likes + 1
        })
    }
    render() {
        return(
            
                <Button className='mx-2' onClick={this.handleclick} > ❤️ {this.state.likes} </Button>
            
        )
    }
}
export default LikeButton
