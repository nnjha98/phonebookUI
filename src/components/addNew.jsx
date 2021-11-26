import React, { PureComponent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
                EnteredCity: ""
            }

    render() 
    { 
        return (
        <div>
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
            <Button variant="outlined" style={{width:500, alignSelf:"center"}}>Go for it</Button>
            <div>{this.state.EnteredName}</div>
            </Box>
        </div>);
    }
}
 
export default AddNew;
 
// export default AddNew;