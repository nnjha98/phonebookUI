import React, { PureComponent } from 'react';
import Contact from './contact';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


class Contacts extends React.Component {

    state =
    {
        contacts:[],
        open:false,
        openAddNew:false
    }

    handleClose = () => {
            this.setState({open:false});
        };
    handleToggle = () => {
            this.setState({open:!this.state.open});
        };

    async componentDidMount()
    {
      // this.use(cors());
      var axios = require('axios');
  
      var config = {
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://apple-inc--explr-sap-java-apps-poc-phonebookv5-srv.cfapps.us10.hana.ondemand.com/api/contact/Contacts?$expand=place',
        headers: { 
        },
        crossdomain : true
      };

    try
    {
        var response = await axios(config);
        console.log(response.data.value);
        this.setState({contacts:response.data.value});
    }
    catch(err)
    {
        console.log(err);
    }
   
  
    }

    render() { 
        return (
        <div>
            <Backdrop
                    sx={{ color: "black", zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "white" }}
                    open={this.state.openAddNew}
                    onClick={()=>{this.setState({openAddNew:!this.state.openAddNew})}}
                >
                    <div style={{display: "flex", flexDirection: "column"}}>
                    {/* <h3>{this.state.contact.name}</h3>
                    <h2>{this.state.contact.phone}</h2> */}
                    <h1>Will load AddContacts</h1>
                    {/* <h3>{this.state.contact.address}</h3> */}
                    </div>
            </Backdrop>

            <Fab onClick={()=>{this.setState({openAddNew:!this.state.openAddNew})}} style={{
                margin: 0,
                top: 'auto',
                right: "10vw",
                bottom: "10vh",
                left: 'auto',
                height: "7vmin",
                width: "7vmin",
                position: 'fixed',
            }}><AddIcon/></Fab>
            <div style={{display:"flex", height:"80%",width:"94%", margin:"3%", flexDirection:"row", justifyContent:"space-evenly",alignItems:"center", backgroundColor:"transparent", flexWrap:"wrap", overflow:"auto"}}>
                <h1>All My Friends</h1>
            </div>
            <div style={{display:"flex", height:"10%",width:"94%", margin:"3%", flexDirection:"row", justifyContent:"space-evenly",alignItems:"center", backgroundColor:"transparent", flexWrap:"wrap", overflow:"auto"}}>
                {this.state.contacts.map((contact)=><div style={{backgroundColor:"pink", width:"30%", border:"10px solid blue"}}><Contact key={contact.ID} contactInfo={contact}/></div>)}
            </div> 
        </div>);
    }
}
 
export default Contacts;




class SimpleBackdrop extends React.Component
{
    state={open:false}
    handleClose = () => {
            this.setState({open:false});
        };
    handleToggle = () => {
            this.setState({open:!this.state.open});
        };
    render()
    {
        return (
            <div>
            <Button onClick={this.handleToggle}>Show backdrop</Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={this.state.open}
                onClick={this.handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            </div>
        );
    }
}
