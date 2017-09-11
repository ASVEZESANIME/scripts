
//-- Script do site: http://asvezesanime.blogspot.com.br/
//-- Hospedado em: https://googledrive.com/host/0B18mUJDIyOMpQ3dDLVhicjJJa28

var global_site_cookie = "asvezesanime_blogspot_com_br";
var minibanner = "https://2.bp.blogspot.com/-IGVhJ0fVAZU/V6ixJCfRfLI/AAAAAAAABpk/frI-jlBrM_wC7ur6LL8i3QtUFWgdhr3CgCPcB/s1600/mini-baner.jpg";

function createCookie(name, value, days) {
if (days) {
var date = new Date();
date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
 var expires = "; expires=" + date.toGMTString();
}
else var expires = "";   
document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0) == ' ') c = c.substring(1, c.length);
  if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
return null;
}

//-- deletar cookie
function eraseCookie(name) {createCookie(name, "", -1);}

//-- criar cookie
function Set_CookieText_config(svalue,skey) {
if(readCookie(global_site_cookie )!==null){
var cookies_key = readCookie(global_site_cookie );
} else { cookies_key = ""; }
readCookie(global_site_cookie );
var keys = cookies_key.split(',');
keys[skey] = svalue;
createCookie(global_site_cookie, keys, 1)
//-- alert ( "OpÃ§Ãµes selecionadas salvas com sucesso!" );
return keys; 
}

//-- ler cookie
function Get_CookieText_config(skey) {
if(readCookie(global_site_cookie )!==null){
var cookies_key = readCookie(global_site_cookie );
var keys = cookies_key.split(',');
return keys[skey];
}}

//-- apagar cookies do blog
function reset_config() {
eraseCookie(global_site_cookie);
alert ( "Cookies salvos por este site removidos.");
}

//-- Esta funÃ§Ã£o faz com que apenas numeros sejam inseridos em caixas de texto que pedem valores numericos 
function SoNumero(e){
var tecla=(window.event)?event.keyCode:e.which;   
if((tecla>47 && tecla<58)) return true;
else{
	if (tecla===8 || tecla===0) return true;
	else  return false;
}
}

//-- retora um texto selecionado
function selectText() {
var seleccionado = (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
	if(seleccionado!="") {
		return seleccionado;
	} else {
		//-- alert ( "nenhum texto selecionado" );
		return "";
	}
}

function tweetText(texto) {
if(selectText()!=""){
var origen = window.location.href;
var direccion = "https://twitter.com/home?status=" + selectText() + " " + origen;
window.open(direccion);
} else {
var origen = window.location.href;
var direccion = "https://twitter.com/home?status=" + texto + " ? " + origen;
window.open(direccion);
}
}
 
//-- CRIADO POR ADRIANO S.A - 25 set 2015
//-- type: 0 => retorna imagem com miniatura
//-- type: 1 => retorna codigo
//-- type: 2 => retorna codigo de incorporaÃ§Ã£o
function vidPicture(urlDoVideo,type) {
var ContentUrlVideo = urlDoVideo;
var vCODE = ContentUrlVideo.split('=');
var sCODE = ContentUrlVideo.split('/embed/');
var iSrc = "<img title='https://www.youtube.com/embed/" + vCODE[1] + "' onclick='yt_player_frame.src=title' class='miniatura_yube' src='https://i.ytimg.com/vi/" + vCODE[1] + "/0.jpg'/>";
if(type==0){return iSrc};
if(type==1){return vCODE[1]};
if(type==2){return "https://www.youtube.com/embed/" + vCODE[1]};
if(type==3){return "https://i.ytimg.com/vi/"+vCODE[1]+"/0.jpg"};
if(type==4){return "https://i.ytimg.com/vi/"+vCODE[2]+"/0.jpg"};
if(type==5){return "<iframe width='500px' height='300px' style='border: 1px solid #808080' border='0' frameborder='0' src='https://www.youtube.com/embed/" + vCODE[1] + "'></iframe>"};
}

//-- Faz com que o banner do blog se torna um player do youtube e o mesmo carrega o video atual clicado
//-- recebe um video do youtube e retorna embed para um iframe
var NavbarinnerHTML = "";
function vidEmbed(urlDoVideo) {
NavbarinnerHTML = navbar.innerHTML;
var ContentUrlVideo = urlDoVideo;
var vCODE = ContentUrlVideo.split('=');
var vSRC =  "https://www.youtube.com/embed/" + vCODE[1] ;
var iframeHTML = "<button class='myButton'  onclick='playerClose()' style='position:absolute;right:10px;top:40px;'>Fechar</button>";
CriarPlayer_suport(vSRC);
}

function CriarPlayer_suport(lvideo){
playerHTML(lvideo); 
}

function YoutubeGallery(plList){
var playlist = "https://www.youtube.com/embed/videoseries?list="+plList;
playerHTML(playlist); 
}

function playerHTML(enter_url){
var banPlayer = "" // "<img width='100%' height='55px' src='"+minibanner+"'><br/>";
var URLBG = vidPicture(enter_url,4);
banPlayer += "<center><div id='divplayer' onclick='playerClose()'>";
banPlayer += "<iframe style='border: 0px solid #000000;border-radius:3px;' class='.bannerEspecial' id='ytPlayer' width='720px' height='480px' src='";
banPlayer += enter_url+"'></iframe><br/>";
banPlayer += "<p class='close_player' style='color:white'>Clique em qualquer canto para sair</p></br></div></center>";
var blogPlayer = $("#YTPLAYER");
    //blogPlayer.css("background", "none");
    //blogPlayer.css("background", "black");
    blogPlayer.html (banPlayer);
    //blogPlayer.css("height", "525px"); 	
return banPlayer;
}

function playerClose(){
$("#YTPLAYER").html("");
}

function ThisPictureIsVideo(idImg){
	if(idImg.alt==="video"){vidEmbed(idImg.title)};
	if(idImg.alt==="list"){playerHTML(idImg.title)};
}

function blackframe(titulo,pagina){
var sban = "";
sban += "<center>";
sban += "<div id='divplayer' onclick='playerClose()'>";
sban += "<h2 style='color:red;'>"+titulo+"</h2><br/>";
sban += "<iframe class='ttslide' src='"+pagina+"' class='snapwidget-widget' allowTransparency='true' frameborder='0' scrolling='no' style='border:none; overflow:hidden; width:785px;height:480px' ></iframe>";
sban += "<p class='close_player' style='color:white'>Clique em qualquer canto para sair</p></br></div></center>";
var isframe = $("#YTPLAYER");
isframe.html (sban);; 	
};

//-- Este fragmento Jquery faz com que a pagina execute funÃ§Ãµes salvas ao abrir
var bgSize_global = 0;

function Get_Loading(){
var color_tabs = $('.main-inner, .footer-inner, .fauxcolumn-right-outer, .post-footer, .date-header span');
var getConfig_0 = Get_CookieText_config(0);
if (getConfig_0!==null){ 
variavel_Global_MyColor = getConfig_0;
color_tabs.css('background', '#' + getConfig_0)
$('.column-center-inner').css('border-color', '#' + getConfig_0);
$('#color_selected').css('background-color', '#' + getConfig_0);
};
var color_tabs2 = $('#sidebar-right-1, .footer-inner, .fauxcolumn-right-outer, .post-footer, .date-header span');
var getConfig_1 = Get_CookieText_config(1);
if (getConfig_1!==null){
variavel_Global_MyColor2 = getConfig_1;
color_tabs2.css('color', '#' + getConfig_1); //-- cor para a cor
$('#color_selected2').css('background-color', "#" + getConfig_1);
};
}

//==============================================================================
//-- Ir para uma DIV
//==============================================================================

function ir_para(id_caminho) {
    var id_caminho = $("#" + id_caminho);
    $('html, body').animate({scrollTop: $(id_caminho).offset().top}, 1500);
}

//==============================================================================
//-- COMENTARIOS
//==============================================================================

function via_gmais(){
    $("#coment_gmais").css("display","inherit");
    $("#coment_diqus").css("display","none");
}

function via_diqus(){
    $("#coment_gmais").css("display","none");
    $("#coment_diqus").css("display","inherit");  
}

//==============================================================================
//-- APARENCIA
//==============================================================================

function mudar_mascara() {
var DATA = new Date();
var HORA = DATA.getHours();
var HORA_EXTRA = 19;
    if(HORA==20||HORA==21||HORA==22||HORA==23||HORA==0||HORA==1||HORA==2||HORA==3||HORA==HORA_EXTRA){
        $("#Header1_headerimg").attr("src","https://4.bp.blogspot.com/-PGnq9mSSl8I/V7cvXEgGi2I/AAAAAAAAB5Q/0FDKYZbilHwDE98eXWangPLEvLy6u4KQACLcB/s1600/kuroka.png");
        $(".main-inner, .fauxcolumn-right-oute, .tabs-inner .widget ul").css("background-color","rgba(0, 0, 0, 0.8)");
        //-- $(".date-outer .date-header span").css("background-color","rgb(100, 0, 0, 0.9)");
    }
}

//-- widget FeaturedPost

function widgetFeaturedPost(){
    var imagem_1 = $("#FeaturedPost1 img").attr("src");
    //$("#FeaturedPost1").css("background-image", "url('" + imagem_1 + "')");
    //$("#FeaturedPost1").css("background-color", "rgb(255, 255, 255, 0.9)");
}

//==============================================================================
//-- JANELA DE RADIO
//==============================================================================

function control_radio(){
    var controles = "";
    var nav_links = $(".tabs-inner .widget ul").html();
    controles = "<li style='padding: 5px 5px'><img id='nav_play_pause' height='50px' src='https://www.vectorcast.com/sites/default/themes/vectorsoftware/images/transparent-play-button.png' onclick='title = play_pause(this)' class='nav_radio'/>";
    $(".tabs-inner .widget ul").html(controles + nav_links )
}

var global_play_pause = 0

function play_pause(comando_){
    var _play_button_img_2 = "https://www.vision.ee.ethz.ch/~gyglim/judging_summaries_amt/play_pause.png";
    var _play_button_img = "https://www.vectorcast.com/sites/default/themes/vectorsoftware/images/transparent-play-button.png";
    //-- $(comando_).rotate(0, -5, 90);
    if(global_play_pause == 0) {
        global_play_pause = 1
        document.getElementById('radio').play();
        comando_.style.background = "rgba(255,0,0,0.5)";
        return 'PAUSE [' + document.getElementById('radio').src; + ']';
    } else {
         global_play_pause = 0
        document.getElementById('radio').pause();
        comando_.style.background = "transparent";
        return 'PLAY [' + document.getElementById('radio').src; + ']';
    }
}

function iniciar_radio(){
var aRadio = Get_CookieText_config(1);
	if(aRadio != null ){
		document.getElementById('radio').src = aRadio + '/stream?type=.mp3';
	}
var aPlay = Get_CookieText_config(0);
	if(aPlay == "true" ){
		slideThree.checked = aPlay;
		nav_play_pause.src = play_pause(this);
	}
}

function pLoad(sradio){
document.getElementById('radio').src = sradio + '/stream?type=.mp3';
document.getElementById('radio').play();
global_play_pause = 1
}

//==============================================================================
//-- PLUGUIN FACEBOOK
//==============================================================================

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//==============================================================================
//-- AÃ‡Ã•ES
//==============================================================================

$(document).ready(function() {
//-- Get_Loading();  //-- funÃ§Ã£o carregar principal
//-- if($("img").attr("alt")==="video"){alert("pass!");$("this").addClass("IsVid")};
//-- $("body").scroll(function(){bodyScroll()});
$(".post-header, img").click(function(){ThisPictureIsVideo(this)}); //-- funÃ§Ã£o ThisPictureIsVideo
//-- $(".post-header, img").load(function(){picVideo(this)}); //-- funÃ§Ã£o ThisPictureIsVideo
//-- $(".play-vid").click(function(){f_play_btt(this)});
//-- $(".post-body").find("a").attr("target", "_blank"); //-- links dentro do post abrira em nova aba
//-- $(".bg-gallery img").click(function() {return gravarbackground (this.src)}); //-- torna imagens na galeria selecionaveis
//-- var isrc = readCookie("plano-de-fundo-asvzesanime"); //-- aplicar plano de fundo
//-- Aplicar ConfiguraÃ§Ãµes.
//-- if ( isrc !== null ) { $("#navbar").css("background-image","url('" + isrc + "')");$("#navbar").css("height", "480px");bgSize_global = 1;};
//-- iniciarVejaMais();
//-- $(".title").click(function(){ir_para("Header1_headerimg")});
//-- mudar_mascara();
personalizar_pessoal();
widgetFeaturedPost();
control_radio();
iniciar_radio();
});

$(window).bind("scroll", function() {
if ($(this).scrollTop() >= 500) {
 $("#Navbar1, #GO_TOP").fadeIn();
 $(".tabs-inner .widget ul, #CustomSearch1").stop().fadeOut();
} else {
 $("#Navbar1, #GO_TOP").stop().fadeOut();
 $(".tabs-inner .widget ul, #CustomSearch1").fadeIn();
}
/*
if ($(this).scrollTop() >= 2000) {
$("#veja_tambem").fadeIn();
} else {
 $("#veja_tambem").fadeOut();
}*/
});


var newicon = "<sub><i><font color='#FF6600'>&nbsp;Novo</font></i></sub>"
var newicon2 = "<sub><i><font color='#FF0000'>&nbsp;Playlist</font></i></sub>"
var newicon3 = "<sub><img src='http://www.privileges.hsbcpremier.com/1/PA_ES_Content_Mgmt/content/HNA2/theme/images/en/icon-hot.gif'></sub>";
$(document).ready(function(){
$('#PageList1 li').find( ":contains('Sugoi Mania')" ).html('Sugoi Mania'+newicon2);
$('#PageList1 li').find( ":contains('Wallpapers')" ).html('Wallpapers'+newicon);
//$('#PageList1 li').find( ":contains('Contato')" ).attr("target", "_blank");
});

//==============================================================================
//-- PERSONALIZAR PESSOAL
//==============================================================================

function personalizar_pessoal() {
var getConfig_0 = Get_CookieText_config(0);
if (getConfig_0!==null){ 
var color_tabs = $('.main-inner, .footer-inner, .fauxcolumn-right-outer, .tabs-inner .widget ul');
color_tabs.css('background', '#' + getConfig_0); //-- muda a cor para a cor escolhida
};
var getConfig_1 = Get_CookieText_config(1);
if (getConfig_1!==null){
var color_tabs2 = $('#sidebar-right-1, .footer-inner, .fauxcolumn-right-outer, .tabs-inner .widget li a');
color_tabs2.css('color', '#' + getConfig_1); //-- muda a cor para a cor
};
//var getConfig_3 = Get_CookieText_config(3);
//if (getConfig_3!=='undefined'){
//Header1_headerimg.src = getConfig_3;
//};
}