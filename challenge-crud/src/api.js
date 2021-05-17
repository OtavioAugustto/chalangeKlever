import axios from 'axios';

const mockStudents = axios.create({

    baseURL:'http://localhost:5000/students'

});

export default mockStudents;