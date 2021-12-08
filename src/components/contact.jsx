import React, { PureComponent } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
// import Stack from '@mui/material/Stack';
// import DeleteIcon from '@mui/icons-material/Delete';



class Contact extends React.Component {
    state={
        contact:{},
        isLoaded:false,
        open: false,
        color: "bg-gradient-to-br from-blue-400 to-orange-500",
    }

    constructor(props)
    {
        super(props);
        this.setState({isLoaded:false})
    }

    handleClose = () => {
        this.setState({open:false});
    };

    handleToggle = () => {
        this.setState({open:!this.state.open});
    };

    onDelete = async () => {
        console.log("Trying to delete : ", this.state.contact.ID);
        var ID = this.state.contact.ID;
        var axios = require('axios');
        var data = JSON.stringify({
        "ID": String(ID)
        });

        var config = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://apple-inc--explr-sap-java-apps-poc-phonebookv6-srv.cfapps.us10.hana.ondemand.com/api/contact/deleteContacts',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        var response =  await axios(config);
        this.props.onRefresh();
    }

    componentDidMount()
    {
        console.log("1 contact card mounted with props: ", this.props);
        this.setState({contact:this.props.contactInfo, isLoaded: true});
    }
    render() { 
        if (!this.state.isLoaded || this.state.contact==={})
        return (
        <div>
            <h1>A contact is loading</h1>
        </div>);
        else
        return ( 
            <div style={{
                display: "grid",
                // margin: "10px",
                // padding: "10px",
                width: "100%",
                gridTemplateRows: "repeat(8,min(10vw,40px))",
                // gridTemplateColumns: "1fr 1fr",
                gridGap: "1px",
                // gridColumnGap: "10px", 
                // columnGap: "10px",
                // justifyContent: "stretch",
                // grid-template-columns: "1fr",
                backgroundColor: "transparent",
                overflow: "auto",
                overflowY: "hidden",
                // filter: "blur(5px)",
            }} onClick={this.handleToggle}>
                {/* <div style={{width: "100%", height: "100%", filter:"blur(20px)"}}></div> */}
                <Typography variant="h4" style={{fontSize:"min(10vw,130%)", alignSelf: "center", gridRow: "2/4", fontFamily: "Corinthia, cursive"}}>{this.state.contact.name}</Typography>
                <Typography variant="h3" style={{fontSize:"130%", alignSelf: "center", gridRow: "5/6", fontFamily: "Corinthia, cursive"}}>{this.state.contact.phone}</Typography>
                <Typography variant="h4" style={{fontSize:"130%", alignSelf: "center", gridRow: "7/8", fontFamily: "Corinthia, cursive"}}>{this.state.contact.place.title}</Typography>
                <div style={{fontSize:"130%", alignSelf: "center", gridRow: "8/9", display: "grid", gridTemplateColumns: "1fr 1fr"}}>
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    {/* <Button
                        // onClick={() => this.insertNewContact()}
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        style={{ width: "100%", padding: "0px", alignSelf: "center",  gridColumn: "2/3" }}
                    >
                        Delete
                    </Button> */}
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={this.onDelete}  />
                    </IconButton>
                </div> 
                <div>
                {/* <Button onClick={this.handleToggle}>Show backdrop</Button> */}
                <Backdrop
                    className={this.state.color}
                    sx={{ color: "black", zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "white",  }}
                    open={this.state.open}
                    onClick={this.handleClose}
                >
                    <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>{this.state.contact.name}</h3>
                    <h2>{this.state.contact.phone}</h2>
                    <h1>{this.state.contact.place.title}</h1>
                    <h3>{this.state.contact.address}</h3>
                    </div>
                </Backdrop>
                </div>
            </div>);
    }
}
 
export default Contact;