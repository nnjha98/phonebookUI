import React, { PureComponent } from "react";
import Contact from "./contact";
import AddNew from "./addNew";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

class Contacts extends React.Component {
  state = {
    contacts: [],
    open: false,
    openAddNew: false,
    
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  async componentDidMount() {
    // this.use(cors());
    var axios = require("axios");

    //   var axios = require('axios');

    // var config = {
    // method: 'get',
    // url: 'https://cors-anywhere.herokuapp.com/http://localhost:8080/contacts',
    // headers: {
    //     'Authorization': 'Basic YWRtaW46YWRtaW4='
    //     }
    // };

    // axios(config)

    var config = {
      method: "get",
      url:
        "https://apple-inc--explr-sap-java-apps-poc-phonebookv6-srv.cfapps.us10.hana.ondemand.com/api/contact/Contacts?$expand=place",
      // url:
      headers: {},
      crossdomain: true
    };

    try {
      var response = await axios(config);
      response.data.value.sort((a,b)=>{
        return(a.name.localeCompare(b.name));
      });
      console.log("After sort: ",response.data);
      this.setState({ contacts: response.data.value });
    } catch (err) {
      console.log(err);
    }
  }

  refreshState = async () => {
    console.log("Refreshing contact list");
    var axios = require("axios");
    var config = {
      method: "get",
      url:
        "https://apple-inc--explr-sap-java-apps-poc-phonebookv6-srv.cfapps.us10.hana.ondemand.com/api/contact/Contacts?$expand=place",
      // url:
      headers: {},
      crossdomain: true
    };

    try {
      var response = await axios(config);
      response.data.value.sort((a,b)=>{
        return(a.name.localeCompare(b.name));
      });
      console.log("After sort: ",response.data);
      this.setState({ contacts: response.data.value });
      
    } catch (err) {
      console.log(err);
    }
  };

  getcolors = () => {
    var colors= [
      ["yellow","orange"],
      ["yellow","orange"],
      ["orange","red"],
      ["green","blue"],
      ["green","blue"],
      ["red","pink"],
      ["red","pink"],
      ["blue","indigo"],
      ["purple","pink"],
      // "yellow",
      // "orange",
      // "blue",
      // "gray",
      // "red",
      // "green",
      // "indigo",
      // "purple",
      // "pink"
    ]
      // console.log("in get colors");
      var rn = Math.floor((Math.random() * 9));
      var i =  0;//Math.floor((Math.random() * 10))%2;
      var rs = colors[rn%9];
      // console.log("rs is : ", rs, `and i is ${i}`);
      return (`bg-gradient-to-br from-${rs[i]}-400 to-${rs[1-i]}-700 hover:bg-gradient-to-br hover:from-${rs[i]}-100 hover:to-${rs[1-i]}-300 `);
  }

  render() {
    return (
      <div className="AnimatedBody min-h-screen" style={{width:"100%",  margin: "0px"}}>
        <Backdrop
          sx={{
            color: "black",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "white"
          }}
          open={this.state.openAddNew}
          onClick={(e) => {
            console.log(e.target);
            console.log(e.currentTarget);
            if (e.target === e.currentTarget)
              this.setState({ openAddNew: !this.state.openAddNew });
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* <h3>{this.state.contact.name}</h3>
                    <h2>{this.state.contact.phone}</h2> */}
            <AddNew onRefresh={this.refreshState} />
            {/* <h3>{this.state.contact.address}</h3> */}
          </div>
        </Backdrop>

        <Fab
          onClick={() => {
            this.setState({ openAddNew: !this.state.openAddNew });
          }}
          style={{
            margin: 0,
            top: "auto",
            right: "10vw",
            bottom: "10vw",
            left: "auto",
            height: "min(100px,10vw)",
            width: "min(100px,10vw)",
            position: "fixed",
            // inset: "auto 10vw 10vw auto"
          }}
        >
          <AddIcon style={{
            // margin: 0,
            // top: "auto",
            // right: "10vw",
            // bottom: "10vh",
            // left: "auto",
            // height: "7vw",
            // width: "7vw",
            position: "fixed"
          }}/>
        </Fab>
        <div
          style={{
            zIndex: -1,
          //   display: "inline-block",
          //   height: "min(10vw,9rem)",
          //   width: "100%",
          //   margin: "0%",
          //   // padding: "5%",
          //   flexDirection: "row",
          //   justifyContent: "space-evenly",
          //   alignItems: "stretch",
          //   backgroundColor: "transparent",
          //   flexWrap: "wrap",
          //   overflow: "auto"
          }}
        >
          <h1 style={{fontFamily: "Josefin Sans", fontSize: "min(15vw,8rem)"}}>All My Friends</h1>
        </div>
        <div
          style={{
            display: "grid",
            // margin: "10px",
            padding: "10px",
            gridTemplateColumns: "repeat(auto-fill,minmax(min(70vw,300px),1fr))",
            gridGap: "10px",
            // gridColumnGap: "10px", 
            // columnGap: "10px",
            justifyContent: "start",
            // grid-template-columns: "1fr",
            backgroundColor: "transparent",
            // filter: "blur(0px)",
            overflow: "auto",
          }}
        >
          {this.state.contacts.map((contact) => (
            <div
              className={`${this.getcolors()}`}
              key={contact.ID}
              variant="outlined"
              overflow="scroll"
              style={{
                flexGrow: 1,
                width: "100%",
                height: "100%",
                border: "3px solid white",
                borderRadius: "20px",
                // margin: "20px",
                position: "static",
                overflow: "auto",
                overflowY: "hidden",
                // filter: "blur(20px)",
              }}
            >
              <Contact key={contact.ID} contactInfo={contact} onRefresh={this.refreshState}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Contacts;

class SimpleBackdrop extends React.Component {
  state = { open: false };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleToggle}>Show backdrop</Button>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={this.state.open}
          onClick={this.handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
}
