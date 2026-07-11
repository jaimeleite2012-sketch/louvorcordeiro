importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:"AIzaSyCIb6A3wbmhEMY_g1MpGmXax_7dSQH9thw",
  authDomain:"escalas-ibc.firebaseapp.com",
  projectId:"escalas-ibc",
  storageBucket:"escalas-ibc.firebasestorage.app",
  messagingSenderId:"799738915159",
  appId:"1:799738915159:web:3f656c00e8344954c73612"
});

const messaging=firebase.messaging();

messaging.onBackgroundMessage(payload=>{
  const title=payload.notification?.title||payload.data?.title||"Louvor Cordeiro";
  const options={
    body:payload.notification?.body||payload.data?.body||"Há uma atualização no aplicativo.",
    icon:"./logo-cordeiro.webp",
    badge:"./logo-cordeiro.webp",
    data:{url:payload.data?.url||"https://jaimeleite2012-sketch.github.io/louvorcordeiro/"}
  };
  self.registration.showNotification(title,options);
});

self.addEventListener("notificationclick",event=>{
  event.notification.close();
  const url=event.notification.data?.url||"https://jaimeleite2012-sketch.github.io/louvorcordeiro/";
  event.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(list=>{
    for(const client of list){
      if("focus" in client){client.navigate(url);return client.focus();}
    }
    return clients.openWindow?clients.openWindow(url):null;
  }));
});
