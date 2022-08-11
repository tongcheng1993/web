// import Vue from 'vue'
// import axios from 'axios'

import store from '../store/index.js'

axios.defaults.timeout = 150000;

axios.interceptors.request.use(config => {
        return config;
    }, error => {
        return Promise.reject(error)
    }
);
axios.interceptors.response.use(response => {
    if (response.data.code === 200) {
        if (response.data.success) {
            return response.data.result;
        } else {
            alert(response.data.message);
            return Promise.reject(response.data.message)
        }
    } else if (response.data.code === 400) {
        console.log(response.data.message)
        alert("登陆时间超时，重新登陆");
        
        store.commit("del_token");
        window.location.reload();
    } else if (response.data.code === 500) {
        alert("网络问题");
        console.log(response.data.message)
        return Promise.reject(response.data.message)
    } else {
        return response
    }
}, error => {
    console.log(error);
    return Promise.reject(error)
});


export const get = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axios({
            url: url,
            method: 'get',
            params: parameter,
            headers: {
                'Tc-Token': token
            }
        })
    } else {
        return axios({
            url: url,
            method: 'get',
            params: parameter,
            headers: {}
        })
    }
};
export const postJson = (url, parameter) => {
    let token = store.state.token;
    if (token) {
        return axios({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type':'application/json',
                'Tc-Token': token
            }
        })
    } else {
        return axios({
            url: url,
            method: 'post',
            data: parameter,
            headers: {
                'Content-Type':'application/json',
            }
        })
    }
};