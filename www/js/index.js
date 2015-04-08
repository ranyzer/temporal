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

$(document).ready(function(){

    domLoaded();
    obtenerHabilidad();

    $(".actionbar .elemento").click(function(){
        var tipo = $(this).attr("id");
        var data = $(this).attr("data");
        actualizarCombo(tipo, data);
    });

    $(".actionbar .invocar").click(function(){
        invocar();
    });

    $(".head .help").click(function(){
        $(".ayuda").toggle();
    });

});

function invocar()
{
    var v1 = $("#uno").attr("data");
    var v2 = $("#dos").attr("data");
    var v3 = $("#tres").attr("data");

    var total = v1*v2*v3;
    var numhabilidad = $("#skill div").attr("data");

    if (total == numhabilidad)
    {
        $("#skill").removeClass().addClass("ok");
        obtenerHabilidad();
    }
        
    else
        $("#skill").removeClass().addClass("error");
}

function actualizarCombo(tipo,data)
{
     $("#skill").removeClass();
    var aux3 = $("#tres").attr("class");
    var aux2 = $("#dos").attr("class");

    var data3 = $("#tres").attr("data");
    var data2 = $("#dos").attr("data");

    $("#uno").removeClass().addClass(aux2);
    $("#uno").attr("data",data2);

    $("#dos").removeClass().addClass(aux3);
    $("#dos").attr("data",data3);

    $("#tres").removeClass().addClass(tipo);
    $("#tres").attr("data",data);
}

function obtenerHabilidad()
{
    var num = Math.floor((Math.random() * 10) + 1); 
    var habilidad = "";
    var data = 0;

    switch(num)
    {

        //QQQ
        case 1: habilidad = "congelacion"; 
                data = 1;
                break;
        //QWE
        case 2: habilidad = "explosion_ensordecedora"; 
                data = 6;
                break;
        //EEQ
        case 3: habilidad = "forjar_espiritu"; 
                data = 9;
                break;
        //EEE
        case 4: habilidad = "impacto_solar"; 
                data = 27;
                break;
        //EEW
        case 5: habilidad = "meteorito"; 
                data = 18;
                break;
        //QQE
        case 6: habilidad = "muro"; 
                data = 3;
                break;
        //WWW
        case 7: habilidad = "pem"; 
                data = 8;
                break;
        //WWE
        case 8: habilidad = "presteza"; 
                data = 12;
                break;
        //WWQ
        case 9: habilidad = "tornado"; 
                data = 4;
                break;

        //QQW
        case 10: habilidad = "movimiento_fantasmal"; 
                data = 2;
                break;
    }

    $("#skill div").removeClass().addClass(habilidad);
    $("#skill div").attr("data",data);
}

/*var app = {
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

        console.log('Received Event: ' + id);
    }
};*/
