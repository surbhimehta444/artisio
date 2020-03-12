import React ,{Component} from 'react';
import './Interests.css';

class Interests extends Component{
    check=() =>{
                this.props.history.push('/dashboard')
            }
    render(){
        return(
            <div className="back-container">
                <div className="title-head">
                    <div className="name">
                        <div className="logo-name">Artiso</div>
                        <div className="choose">Choose Your Interests</div>
                    </div>
                </div>
            <div className="middle-part">
                 <div className="checkbox">
                     <div className="tik" onClick={this.check}>  

                     </div>
                   
                 </div>
                </div>   
            </div>
        );
    }
}
export default Interests;