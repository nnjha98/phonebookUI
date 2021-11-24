import React, { PureComponent } from 'react';
class Contact extends React.Component {
    state={
        contact:{},
        isLoaded:false
    }

    constructor(props)
    {
        super(props);
        this.setState({isLoaded:false})
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
            <div>
                <h3>{this.state.contact.name}</h3>
                <h2>{this.state.contact.phone}</h2>
                <h1>{this.state.contact.place.title}</h1>
            </div>);
    }
}
 
export default Contact;