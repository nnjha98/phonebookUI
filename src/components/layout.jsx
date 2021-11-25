import React, { PureComponent } from 'react';
import Contacts from './contacts';
class Layout extends React.Component {
    render() { 
        return (
        <div style={{width:"90%",height:"90vh",display:"flex", margin:"5vh", alignSelf:"center"}}>
            <div style={{ margin:"5vh",height:"82vh", width:"95%", overflow:"auto"}}>
                <Contacts/>
            </div>

        </div>);
    }
}
 
export default Layout;