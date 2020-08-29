import React from "react";

class Form extends React.Component {

    state = {
        name: '',
        email: '',
        message: ''
    }

    render() {
        return(
        <div className ="container h-50 bg-dark">
        <div className = "row mt-3">
            <div className = "col-md-8">
            <div className = "page-header">
                <h1 className= "mt-4 text-white">Contact</h1>
            </div>
            </div>
        </div>
    

        <div className="App">
        <form id="contact-form"  >
            <div className="form-group">
                <label htmlFor="name" className="text-white">Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-white">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message" className="text-white">Message</label>
                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button onClick={this.resetForm} type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>

        );
    }
       
         onNameChange(event) {
           this.setState({name: event.target.value})
         }
       
         onEmailChange(event) {
           this.setState({email: event.target.value})
         }
       
         onMessageChange(event) {
           this.setState({message: event.target.value})
         }

        resetForm(){
            this.setState({name:"", email: "", message: ""})
        }
       
        // handleSubmit(event) {
            
        //     event.preventDefault();
            
        //     this.setState({name: ""})
        //     this.setState({email: ""})
        //     this.setState({message: ""})
        // }
       }
       
       

export default Form;