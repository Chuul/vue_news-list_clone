import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);        
}

function fetchUserInfo(name) {
    return axios.get(`${config.baseUrl}user/${name}.json`);    
}

function fetchItemInfo(itemname) {
    return axios.get(`${config.baseUrl}item/${itemname}.json`);    
}

// 3. 정의한 API들 꺼내기 -> 다른 곳에서 쓸 수 있도록!
export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}
