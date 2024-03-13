import React, { Component } from 'react';
import PathConstants from '../pathConstants';
import history from '../history';
import ProfileService from '../services/ProfileService';
import { toast } from "react-toastify";

class CreateProfileComponent extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId:'',
            reTypeEmailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changeReTypeEmailIdHandler = this.changeReTypeEmailIdHandler.bind(this);
    }
    changeFirstNameHandler=(event) => {
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler=(event) => {
        this.setState({lastName: event.target.value})
    }
    changeEmailIdHandler=(event) => {
        this.setState({emailId: event.target.value})
    }
    changeReTypeEmailIdHandler = (event) => {
        this.setState({ reTypeEmailId: event.target.value })
    }
    saveProfile = (e) => {
        if (this.state.emailId==null) {
            alert('Please enter ')
        }  
        else if (this.state.emailId === this.state.reTypeEmailId) {
            let profile = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                emailId: this.state.emailId
            };
            console.log('profile => ' + JSON.stringify(profile));
            ProfileService.addProfiles(profile).then(res => {
                console.log('addProfiles => ' + JSON.stringify(res));
                if (res.status === 200 && res.data != null) {
                    toast.success("Data added successfully", { position: 'top-center' });
                    history.push(PathConstants.HOME);

                }
            }).catch((error) => {
                if (error.code === 'ERR_BAD_REQUEST') {
                    toast.success('Entered data already exists, Please enter a new valid data', { position: 'top-center' });
                }
            })
        } else {
            alert('Please enter valid and correct data')
        }
    }
    cancel()    {
        history.push(PathConstants.HOME)
    }

    render() {
        return (
            <div
                class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div class="w-full">
                    <div class="text-center">
                        <h1 class="text-3xl font-semibold text-gray-900">Add profile</h1>
                        <p class="mt-2 text-gray-500">Enter a new profile data</p>
                    </div>
                    <div class="mt-5">
                        <form action="">
                            <div class="relative mt-6">
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.changeFirstNameHandler}
                                    class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Enter First Name</label>
                            </div>
                            <div class="relative mt-6">
                                <input 
                                    type="text" 
                                    name="firstName"
                                    value={this.state.lastName}
                                    onChange={this.changeLastNameHandler}
                                    class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Enter Last Name</label>
                            </div>
                            <div class="relative mt-6">
                                <input 
                                    type="text" 
                                    name="emailId"
                                    value={this.state.emailId} 
                                    onChange={this.changeEmailIdHandler}
                                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                                <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Email Address</label>
                            </div>
                            <div class="relative mt-6">
                                <input 
                                    type="text" 
                                    name="emailId"
                                    value={this.state.reTypeEmailId} 
                                    onChange={this.changeReTypeEmailIdHandler}
                                    class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                                    autocomplete="NA" />
                                <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                                    Retype Email Address</label>
                            </div>
                            <div class="my-6 w-full h-8 inline-flex me-5 cursor-pointer justify-center items-center">
                                <button
                                    type="submit"
                                    className="rounded-md bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    onClick={this.saveProfile}>
                                    Add Profile
                                </button>
                                <button
                                    type="cancel"
                                    className="rounded-md bg-white px-3 py-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    onClick={this.cancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CreateProfileComponent;