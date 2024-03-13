import React, { useState, useEffect } from 'react';
import ProfileService from '../services/ProfileService';
import PathConstants from '../pathConstants';
import { useNavigate } from 'react-router-dom';
import { CircleX, Pencil  } from "lucide-react";
import { toast } from "react-toastify";

function ListProfileComponent() {
    const [profiles, setProfiles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ProfileService.getAllProfiles().then((res) => {
            setProfiles(res.data);
        });
    }, []);

    const addProfile = () => {
        navigate(PathConstants.EMP_ADD);
    };

    const editProfile = (id) => {
        navigate(PathConstants.EMP_UPDATE.replace(':id', id));
    };

    const deleteProfile = (id) => {
        ProfileService.deleteProfiles(id).then(res => {
            if (res.status === 200 && res.data != null) {
                toast.success("Data deleted successfully", { position: 'top-center' });
                //alert("Data deleted successfully");
            }
        }).catch((error) => {
            if (error.code !== 200) {
                toast.success('Invalid selection !', { position: 'top-center' });
            }
        })
    };

    const forceDelete = (id) => {
        navigate(PathConstants.EMP_DELETE);
    };

    return (
        <div className="space-y-12"><p/>
            <label class="w-full h-8 inline-flex me-5 cursor-pointer justify-end items-center">
                <label class="w-2/5">Profile List</label>
                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={addProfile}>
                    Add Profile
                </button>
                <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={forceDelete}>
                    Delete Selected
                </button>
            </label>
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>EmailId</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profiles.map(
                                profile =>
                                    <tr key={profile.id}>
                                        <td>{profile.id}</td>
                                        <td>{profile.firstName}</td>
                                        <td>{profile.lastName}</td>
                                        <td>{profile.emailId}</td>
                                        <td >
                                            <button className="p-2 sm:p-2 md:p-2" onClick={() => editProfile(profile.id)}><Pencil /></button><l />
                                            <button className="p-2 sm:p-2 md:p-2" onClick={() => deleteProfile(profile.id)}><CircleX /></button><l />
                                            <label class="inline-flex items-center me-5 cursor-pointer">
                                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-red-200">Mark for delete</span>
                                                <input type="checkbox" value={profile.id} class="sr-only peer" />
                                                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                                            </label>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    );
}

export default ListProfileComponent;
