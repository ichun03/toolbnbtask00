import React from 'react';
import Card from './viewpoint/card.js';



export class viewPoint extends Component {

    constructor(props){
    super(props);
    this.state ={info:[]};

    }




    componentDidMount(){
        fetch('http://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json')
        .then(res => res.json())
        .then((data) => {
          this.setState({ info: data })
        })
        .catch(console.log)
      }


    }
    
    
    render(){
        return(
        <div>
        
        <Card viewpoint={this.state.info}/> 
        
        
        </div>
        
        )
    
    }


}

