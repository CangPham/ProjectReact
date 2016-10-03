import * as types from '../constants/actionTypes';
import $ from 'jquery';
export function loginRequest (data) {
    return function (dispatch) {
        return $.post("https://cloudorder.vn/api/users/login.json",
            {
                "UserPhoneNumber" : data.UserPhoneNumber,
                "Password": data.Password
            },
            function(data,status){
                console.log(data)
                console.log(status)
            }).done(function (data) {
            console.log(data)
        });
    }
}