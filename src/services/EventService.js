"use strict";

import HttpService from './HttpService';

export default class EventService {

    static baseURL() {return "http://localhost:3000/events" }

    static getEvents(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getEvent(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${EventService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving event');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteEvent(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${EventService.baseURL()}/${id}`, function(data) {
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

    static updateEvent(event) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${event._id}`, event, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createEvent(event) {
        event.id = Math.floor((Math.random() * 100000000) + 1).toString();
        return new Promise((resolve, reject) => {
            HttpService.post(EventService.baseURL(), event, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}