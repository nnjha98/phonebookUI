import React, { PureComponent } from 'react';
import Contact from './contact';
class Contacts extends React.Component {

    state =
    {
        contacts:[]
    }

    async componentDidMount()
    {
      // this.use(cors());
      var axios = require('axios');
  
      var config = {
        method: 'get',
        url: 'https://apple-inc--explr-sap-java-apps-poc-phonebookv5-srv.cfapps.us10.hana.ondemand.com/api/contact/Contacts?$expand=place',
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
            <div style={{display:"flex", height:"90%",width:"94%", margin:"3%", flexDirection:"column", justifyContent:"space-evenly",alignItems:"center", backgroundColor:"orange", flexWrap:"wrap", overflow:"auto"}}>
                {this.state.contacts.map((contact)=><div style={{backgroundColor:"pink", width:"40%", border:"10px solid orange"}}><Contact key={contact.ID} contactInfo={contact}/></div>)}
            </div>
            
        </div>);
    }
}
 
export default Contacts;