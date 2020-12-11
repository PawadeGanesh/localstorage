import React, {Component} from 'react';
import { useHistory } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


class Edit extends Component {
  
  // counter = 0;
  state = {
   data: []
  };

  handleUpdate = () => {
    // e.preventDefault();
    console.log("a");

this.componentDidUpdate()
//   }
    //this.props.history.push('/');
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.data.length !== this.state.data.length){
          const json = JSON.stringify(this.state.data);
          console.log(json)
          localStorage.setItem("documents", json);
      }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  
  componentDidMount(){
    const Data =  JSON.parse(localStorage.getItem('document'));
    console.log("Data123", Data);
    this.setState({ data: Data})
  }

  render() {
      const {data} = this.state;
    return(
      <React.Fragment>
           <h1>Edit Notification</h1>
           {
               data && data.map(n => {
                   return (
                       <div>
                        <form className="row mt-5" onSubmit={this.handleUpdate}>
               <div className="col-md-4">
                 <FormControl className="mb-5" fullWidth>
                   <InputLabel htmlFor="name-simple">EventId</InputLabel>
                   <Input type="text" name="eventId" id="nameSimple" defaultValue={n.eventId} onChange={this.handleChange}/>
                 </FormControl>
               </div>
               <div className="col-md-4">
                 <FormControl className="mb-5" fullWidth>
                   <InputLabel htmlFor="name-helper">EventName</InputLabel>
                   <Input type="text" name="eventName" id="nameHelper" defaultValue={n.eventName} onChange={this.handleChange}/>    
                 </FormControl>
               </div>
              
               
               <div>
               <Button variant="contained"  type="submit"  color="primary" className="jr-btn text-white mt-5"style={{marginLeft: "520px"}}>Add</Button>
               </div>
                 </form>
                       </div>
                   )
               })
           }
       
               
      </React.Fragment>
    )
  }
}

export default Edit;

