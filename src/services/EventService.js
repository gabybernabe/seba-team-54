"use strict";

import HttpService from './HttpService';

export default class EventService {

    static baseURL() {return "http://localhost:3000/events" }

    static getEvents(level, date){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL() +
                '?level=' + level +
                '&date=' + date
                , function(data) {
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
        const imageArray = [
            'https://www.gapa.de/website/var/tmp/image-thumbnails/0/4284/thumb__gapaWysiwygImageRight/Wandern@2x.jpeg',
            'https://i.pinimg.com/originals/3c/d5/ff/3cd5ff662865c91f8753fc5224e02b44.jpg',
            'http://1.bp.blogspot.com/-xP2EdSZuo94/VB_cegS6LAI/AAAAAAAAkbg/UphZdGzJ8aQ/s1600/P1040301.jpg',
            'https://media0.trover.com/T/54fad7a3e9ae42087a003955/fixedw_large_4x.jpg',
            'https://assets.cicerone.co.uk/filestore/productImages/sampleroutephotos/_w1200_h1200/804_SP0.jpg',
            'http://www.student.kuleuven.be/~r0576762/data/tum/seba/hohemunde.jpg',
            'http://www.student.kuleuven.be/~r0576762/data/tum/seba/pleisenspitze.jpg',
            'http://www.student.kuleuven.be/~r0576762/data/tum/seba/stones.jpg',
            'http://www.student.kuleuven.be/~r0576762/data/tum/seba/zugspitze.jpg',
            'http://www.student.kuleuven.be/~r0576762/data/tum/seba/hutte.jpg',
            'http://www.student.kuleuven.be/~r0576762/data/tum/seba/knappenhutte.jpg',
            'http://www.student.kuleuven.be/~r0576762/data/tum/seba/benediktenwand.jpg'
        ];

        event.id = Math.floor((Math.random() * 100000000) + 1).toString();
        if (event.imgUrls == "") {
            var arr = [imageArray[Math.floor((Math.random() * 12) + 1) - 1]];
            event.imgUrls = arr;
        }
        return new Promise((resolve, reject) => {
            HttpService.post(EventService.baseURL(), event, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static participateEvent(eventid,username){
        var oldEvent;
        EventService.getEvent(eventid).then((data) => {
            oldEvent = data;
            if (oldEvent.participantList.indexOf(username) > -1){
                // do nothing, already participant
                oldEvent.participantList.remove(username);
            } else {
                oldEvent.participantList.push(username);
            }
            EventService.updateEvent(oldEvent).then(() => {
                console.log("Participant added");
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    static isParticipating(participantList,username) {
        if (participantList.indexOf(username) > -1){
            return true;
        } else {
            return false;
        }
    }
}