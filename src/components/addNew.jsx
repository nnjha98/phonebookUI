import React, { PureComponent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import { Visibility } from '@mui/icons-material';

// class AddNew extends React.Component 
// {
    // state={
    //     VisibiltyOfOne:false
    // }

        
//     }

//     render() 
//     {
//         return (
//         <div>
//             <h1>Add contact here!</h1>
//             <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': {display:"flex", flexDirection:"column", m: 1, width: '25ch',  backgroundColor: "white"  },
//             }}
//             noValidate
//             autoComplete="off"
//             >
//             <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:500, alignSelf:"center"}}/>
//             <TextField id="filled-basic" label="Phone" variant="filled" style={{width:500, alignSelf:"center"}}/>
//             <TextField id="standard-basic" label="City" variant="standard" style={{width:500, alignSelf:"center"}}/>
//             <div onClick={()=>this.setState({VisibiltyOfOne:!this.state.VisibiltyOfOne})} style={{width:500, alignSelf:"center"}}>1</div>
//             <Button variant="outlined" style={{width:500, alignSelf:"center"}}>Go for it</Button>
//             </Box>
//         </div>);
//     }
// };

class AddNew extends React.Component {
    state={
                VisibiltyOfOne:0,
                EnteredName: "",
                EnteredPhone: "",
                EnteredCity: "",
                sb:{open:false,vertical:'bottom', horizontal:'center',msg:'successfully inserted in',status:'success'}
            }

    insertNewContact=async ()=>
    {   
        console.log("button clicked");
        var axios = require('axios');
        var data = JSON.stringify({
        "place": "4a519e61-3c3a-4bd9-ab12-d7e0c5329933",
        "phone": this.state.EnteredPhone,
        "name": this.state.EnteredName
        });

        var config = {
        method: 'post',
        url: 'https://cors-anywhere.herokuapp.com/https://apple-inc--explr-sap-java-apps-poc-phonebookv6-srv.cfapps.us10.hana.ondemand.com/api/contact/insertContacts',
        headers: { 
        'Content-Type': 'application/json'
        },
        data : data
        };

        var response;
        try
        {
            response = await axios(config);
            console.log(response.status);
            console.log(response);
            if (response.status>=200 && response.status<300)
            {
                console.log("successfully inserted in");
                this.setState({sb:{open:true,vertical:'bottom',horizontal:'center',msg:"successfully inserted in",status:"success"}});
                this.props.onRefresh();
            }
        }
        catch(err)
        {
            console.log("Error while inserting :( ");
            if (err.response.status===405)
            {
                console.log(err.response.data.error.message + " is the error in " + err.response.data.error.target );
                this.setState({sb:{open:true,vertical:'bottom',horizontal:'center',msg:"There seems to have been an error",status:"error"}});
            }
        }
        
    }

    render() 
    { 
        return (
        <div>
            <Snackbar
                anchorOrigin={ {vertical:this.state.sb.vertical, horizontal:this.state.sb.horizontal} }
                open={this.state.sb.open}
                message={this.state.sb.msg}
                key={this.state.sb.vertical + this.state.sb.horizontal}
            >
                <Alert severity={this.state.sb.status} sx={{ width: '100%' }}>
                {this.state.sb.msg}
                </Alert>
            </Snackbar>
            <h1>Add contact here!</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': {display:"flex", flexDirection:"column", m: 1, width: '25ch',  backgroundColor: "white"  },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(e)=>this.setState({EnteredName: e.target.value})} id="outlined-basic" label="Name" variant="outlined" style={{width:500, alignSelf:"center"}}/>
            <TextField onChange={(e)=>this.setState({EnteredPhone: e.target.value})} id="filled-basic" label="Phone" variant="filled" style={{width:500, alignSelf:"center"}}/>
            <TextField onChange={(e)=>this.setState({EnteredCity: e.target.value})} id="standard-basic" label="City" variant="standard" style={{width:500, alignSelf:"center"}}/>
            <div onClick={()=>this.setState({VisibiltyOfOne: 1-this.state.VisibiltyOfOne})} style={{width:500, alignSelf:"center",backgroundColor:"red" ,opacity:this.state.VisibiltyOfOne}}>1</div>
            <Button onClick={()=>this.insertNewContact()} variant="outlined" style={{width:500, alignSelf:"center"}}>Go for it</Button>
            {/* <div>{this.state.EnteredName}</div> */}
            </Box>
        </div>);
    }
}
 
export default AddNew;
 
// export default AddNew;