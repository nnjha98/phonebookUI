import React, { PureComponent } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';

class Contact extends React.Component {
    state={
        contact:{},
        isLoaded:false,
        open: false
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
            <div onClick={this.handleToggle}>
                <h3>{this.state.contact.name}</h3>
                <h2>{this.state.contact.phone}</h2>
                <h1>{this.state.contact.place.title}</h1>
                <div>
                {/* <Button onClick={this.handleToggle}>Show backdrop</Button> */}
                <Backdrop
                    sx={{ color: "black", zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "white" }}
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