function customTag(tagName,fn){

  var tagInstances = document.getElementsByTagName(tagName);

        for ( var i = 0; i < tagInstances.length; i++) {
        if(tagInstances[i]){
            fn(tagInstances[i]);
            }
        }
}

function removeTag(tagName){

  var tagInstances = document.getElementsByTagName(tagName);

        for ( var i = 0; i < tagInstances.length; i++) {
        if(tagInstances[i]){
            tagInstances[i].remove();
            }
        }
}

        function include(a, e, t){
        window.addEventListener("DOMContentLoaded",() => {eval(includeFile(a, e, t))});
        }


function includeFileTag(element){
            if (element.attributes.src){
            file = element.attributes.src.value;
            }else{
                var file = element.innerHTML;
            }
            var type = element.attributes.type.value;
            var head = document.getElementsByTagName("head").item(0);
            var body = document.getElementsByTagName("body").item(0);
            if(type == "html" || type == "php"){
            var files = file_get_contents(file).replace(/<title(.*)>/g,  '').replace(/<\/title>/g,  '').replace(/<html(.*)>/g,  '').replace(/<\/html>/g,  '').replace(/<body(.*)>/g,  '').replace(/<\/body>/g,  '').replace(/<head(.*)>/g,  '').replace(/<\/head>/g,  '').replace(/<script(.*)src=(.*)>(.*)<\/script>/g,  '<scripts $1 src=$2 type="js">$3</scripts>').replace(/<script(.*)>/g,  '<scripts style="display:none;" type="js" $1>').replace(/<\/script>/g,  '</scripts>').replace(/<link(.*)href=(.*)>/g,  '<links $1 src=$2 type="css"></links>').replace(/<\/link>/gi, "</links>");
            element.innerHTML = files;
            customTag('scripts',includeFileTag);
            customTag('links',includeFileTag);
            removeTag('scripts');
            removeTag('links');
            }
            
            if(type == "js"){
            var script = document.createElement("script");
            var ty = getFileExtension(file);
            script.type = "text/javascript";
            script.defer = "defer";
            if(ty == "js"){
            script.innerHTML = file_get_contents(file);
            head.appendChild(script);
            }else{
            script.innerHTML = file
            body.appendChild(script);
            }
            }
            
            if(type == "css"){
            var css = document.createElement("link");
            css.rel = "stylesheet";
            css.href = file;
            css.type = "text/css";
            css.defer = "defer";
            head.appendChild(css);
            }
}
function includeFile(element, file, type){
            var head = document.getElementsByTagName("head").item(0);
            var body = document.getElementsByTagName("body").item(0);
            if(type == "html" || type == "php"){
            var files = file_get_contents(file).replace(/<title(.*)>/g,  '').replace(/<\/title>/g,  '').replace(/<html(.*)>/g,  '').replace(/<\/html>/g,  '').replace(/<body(.*)>/g,  '').replace(/<\/body>/g,  '').replace(/<head(.*)>/g,  '').replace(/<\/head>/g,  '').replace(/<script(.*)src=(.*)>(.*)<\/script>/g,  '<scripts $1 src=$2 type="js">$3</scripts>').replace(/<script(.*)>/g,  '<scripts style="display:none;" type="js" $1>').replace(/<\/script>/g,  '</scripts>').replace(/<link(.*)href=(.*)>/g,  '<links $1 src=$2 type="css"></links>').replace(/<\/link>/gi, "</links>");
            element.innerHTML = files;
            customTag('scripts',includeFileTag);
            customTag('links',includeFileTag);
            removeTag('scripts');
            removeTag('links');
            }
            if(type == "js"){
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.defer = "defer";
            script.innerHTML = file_get_contents(file);
            head.appendChild(script);
           }
           if(type == "css"){
            var css = document.createElement("link");
            css.rel = "stylesheet";
            css.href = file;
            css.type = "text/css";
            css.defer = "defer";
            head.appendChild(css);
            }
}

function getFileExtension(filename) {
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}
function file_get_contents(e,t,s,a,n){var r,i=[],o=[],l=0,p=0,h="",c=-1,u=0,_=null,d=!1;this.php_js=this.php_js||{},this.php_js.ini=this.php_js.ini||{};var f=this.php_js.ini;s=s||this.php_js.default_streams_context||null,t||(t=0);var v={FILE_USE_INCLUDE_PATH:1,FILE_TEXT:32,FILE_BINARY:64};if("number"==typeof t)u=t;else for(t=[].concat(t),p=0;p<t.length;p++)v[t[p]]&&(u|=v[t[p]]);if(u&v.FILE_BINARY&&u&v.FILE_TEXT)throw"No puede pasar FILE_BINARY y FILE_TEXT a file_get_contents()";if(u&v.FILE_USE_INCLUDE_PATH&&f.include_path&&f.include_path.local_value){var T=-1!==f.include_path.local_value.indexOf("/")?"/":"\\";e=f.include_path.local_value+T+e}else/^(https?|file):/.test(e)||(h=this.window.location.href,c=0===e.indexOf("/")?h.indexOf("/",8)-1:h.lastIndexOf("/"),e=h.slice(0,c+1)+e);if(s){var g=s.stream_options&&s.stream_options.http;d=!!g}if(!s||d){var m=this.window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;if(!m)throw new Error("XMLHttpRequest no supportada");var E=d?g.method:"GET",x=!!(s&&s.stream_params&&s.stream_params["phpjs.async"]);if(f["phpjs.ajaxBypassCache"]&&f["phpjs.ajaxBypassCache"].local_value&&(e+=(null==e.match(/\?/)?"?":"&")+(new Date).getTime()),m.open(E,e,x),x){var I=s.stream_params.notification;"function"==typeof I&&(m.onreadystatechange=function(e){var t,s={responseText:m.responseText,responseXML:m.responseXML,status:m.status,statusText:m.statusText,readyState:m.readyState,evt:e};switch(m.readyState){case 0:case 1:case 2:I.call(s,0,0,"",0,0,0);break;case 3:t=2*m.responseText.length,I.call(s,7,0,"",0,t,0);break;case 4:m.status>=200&&m.status<400?(t=2*m.responseText.length,I.call(s,8,0,"",m.status,t,0)):403===m.status?I.call(s,10,2,"",m.status,0,0):I.call(s,9,2,"",m.status,0,0);break;default:throw"Estado listo no reconocido para file_get_contents()"}})}if(d){var L=g.header&&g.header.split(/\r?\n/),j=!1;for(p=0;p<L.length;p++){var y=L[p],A=y.search(/:\s*/),b=y.substring(0,A);m.setRequestHeader(b,y.substring(A+1)),"User-Agent"===b&&(j=!0)}if(!j){var w=g.user_agent||f.user_agent&&f.user_agent.local_value;w&&m.setRequestHeader("User-Agent",w)}_=g.content||null}if(u&v.FILE_TEXT){var F="text/html";if(g&&g["phpjs.override"])F=g["phpjs.override"];else{var X=f["unicode.stream_encoding"]&&f["unicode.stream_encoding"].local_value||"UTF-8";g&&g.header&&/^content-type:/im.test(g.header)&&(F=g.header.match(/^content-type:\s*(.*)$/im)[1]),/;\s*charset=/.test(F)||(F+="; charset="+X)}m.overrideMimeType(F)}else u&v.FILE_BINARY&&m.overrideMimeType("text/plain; charset=x-user-defined");if(g&&g["phpjs.sendAsBinary"]?m.sendAsBinary(_):m.send(_),r=m.getAllResponseHeaders()){for(r=r.split("\n"),l=0;l<r.length;l++)""!==r[l].substring(1)&&o.push(r[l]);for(r=o,p=0;p<r.length;p++)i[p]=r[p];this.$http_response_header=i}return a||n?n?m.responseText.substr(a||0,n):m.responseText.substr(a):m.responseText}return!1}
