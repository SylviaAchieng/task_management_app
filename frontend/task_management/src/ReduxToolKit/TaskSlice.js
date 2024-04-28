import {createAsyncThunk} from '@reduxjs/toolkit'
import {api, setAuthHeader} from '../api/api'

export const fetchTasks=createAsyncThunk("task/fetchTasks",
async({status})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)

    try {
        const {data}=await api.get("/api/tasks",{
            params:{status}
        });
        console.log("fetch tasks : ", data)
        return data;
    } catch (error) {
        console.log("error", error);
        throw Error(error.response.data.error);
    }
}
);

export const fetchUsersTasks=createAsyncThunk("task/fetchUsersTasks",
async({status})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)

    try {
        const {data}=await api.get("/api/tasks/user",{
            params:{status}
        });
        console.log("fetch users tasks : ", data);
        return data;
    } catch (error) {
        console.log("error", error);
        throw Error(error.response.data.error);
    }
}
);

export const fetchTasksById=createAsyncThunk("task/fetchTasksById",
async({taskId})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)

    try {
        const {data}=await api.get(`/api/tasks/${taskId}`);
        console.log("fetch tasks by Id: ", data);
        return data;
    } catch (error) {
        console.log("error", error);
        throw Error(error.response.data.error);
    }
}
);

export const createTask=createAsyncThunk("task/createTask",
async(taskData)=>{
    setAuthHeader(localStorage.getItem("jwt"),api)

    try {
        const {data}=await api.post(`/api/tasks`,taskData);
        console.log("created task: ", data);
        return data;
    } catch (error) {
        console.log("error", error);
        throw Error(error.response.data.error);
    }
}
);

export const updateTask=createAsyncThunk("task/updateTask",
async({id,updatedTaskData})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)

    try {
        const {data}=await api.put(`/api/tasks/${id}`,updatedTaskData);
        console.log("updated task: ", data);
        return data;
    } catch (error) {
        console.log("error", error);
        throw Error(error.response.data.error);
    }
}
);

export const assignedTaskToUser=createAsyncThunk("task/assignedTaskToUser",
async({taskId, userId})=>{
    setAuthHeader(localStorage.getItem("jwt"),api)

    try {
        const {data}=await api.put(`/api/tasks/${taskId}/user/${userId}/assigned`);
        console.log("assigned task: ", data);
        return data;
    } catch (error) {
        console.log("error", error);
        throw Error(error.response.data.error);
    }
}
);