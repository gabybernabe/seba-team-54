"use strict";

import HttpService from './HttpService';

export default class BlogService {

    static baseURL() {return "http://localhost:3000/posts" }

    static getBlogs(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getBlog(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${BlogService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving article');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteBlog(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${BlogService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateBlog(article) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${article._id}`, event, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createBlog(article) {
        article.id = Math.floor((Math.random() * 100000000) + 1).toString();
        return new Promise((resolve, reject) => {
            HttpService.post(BlogService.baseURL(), article, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}
