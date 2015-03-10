/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        function onSuccess(heading) {
           // alert('Heading: ' + heading.magneticHeading);
            document.getElementsByClassName("received")[0].innerText = "OK Heading: " + heading.magneticHeading;


			// change to inclue "-" so the needle corrcts direction. e.g. "rotate(-12.212deg)"

			document.querySelector("#needle").style.WebkitTransform = "rotate(-" + heading.magneticHeading + "deg)"

// document.querySelector("#needle").style.WebkitTransform = "rotate(60deg)"

        };
        
        function onError(error) {
           // alert('CompassError: ' + error.code);
            
            document.getElementsByClassName("received")[0].innerText = "CompassError: " + error.code;
            
        };
        
        var options = {
        frequency: 1000
//        filter: 1
        }; // Update every 3 degrees change

        
//        navigator.compass.getCurrentHeading(onSuccess, onError);

        var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
        
        console.log('Received Event: ' + id);
    }
};
