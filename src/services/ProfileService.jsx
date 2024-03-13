import axios from 'axios';
import PathConstants from '../pathConstants';

class ProfileService {
    
    getAllProfiles()   {
        return axios.get(PathConstants.BASE_URL + "/employees");
    }
    getProfileById(id)   {
        return axios.get(PathConstants.BASE_URL + '/employee/' + id);
    }
    addProfiles(profile)   {
        return axios.post(PathConstants.BASE_URL + "/employee", profile);
    }
    updateProfiles(profile)   {
        return axios.put(PathConstants.BASE_URL + "/employee/" + profile.id, profile);
    }
    deleteProfiles(id)   {
        return axios.delete(PathConstants.BASE_URL + "/employee/" + id);
    }
}

export default new ProfileService();