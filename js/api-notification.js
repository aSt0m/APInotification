// if( !window.Notification){
//     alert( 'Tu navegador no soporta las funcionalidades de esta pagina' );

// }

// window.addEventListener( 'load', init );
// function init(){
//     document.querySelector( '#activar-notificacion' ).addEventListener( 'click', function(){
//         if(window.Notification.checkPermission == 0 ) createNotification();
//         else window.Notification.requestPermission(); 
        
//     },false);
// }

// function createNotification(){
//     var notificacion = window.Notification.createNotification( "","Uso de NotificationAPI","!Felicidades Ya has configurado las notificaciones :)");
//     notificacion.show();
//     notificacion.addEventListener('display',function(){
//         document.querySelector('#aviso').innerHTML = "Estamos mostrando la notificacion"
//     },false);
//     notificacion.addEventListener('close',function(){
//         document.querySelector('#aviso').innerHTML = "Se ha cerrado la notificacion";
//     },false);
// }
let button = document.querySelector('button');
let div = document.querySelector('.div');


button.addEventListener('click', () => {
    if(!window.Notification) return;
   
    Notification
    .requestPermission()
    .then(showNotification)
});
function showNotification(permission){
    if(permission !== 'granted') return;
    let notification = new Notification('My Title', {
        body:"Hola, es mi primera notificacion",
        icon:'img/moonCrater.jpg'        
    })
    notification.onclick = () => {
        window.open('https://google.com');
        div.styl

        // window.location.href= "https://www.google.com"
    }
}