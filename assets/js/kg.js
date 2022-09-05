// Mes réseaux sociaux
let ws_list = [{
    ws: 'Twitter',
    l: 'https://twitter.com/Kidpaddleetcie',
    fa: 'fab fa-twitter'
}, {
    ws: 'Github',
    l: 'https://github.com/Kidpaddleetcie',
    fa: 'fab fa-github'
}, {
    ws: 'Pinterest',
    l: 'https://www.pinterest.fr/Kidpaddleetcie/',
    fa: 'fab fa-pinterest'
}, {
    ws: 'DeviantArt',
    l: 'https://www.deviantart.com/kidpaddleetcie/gallery/',
    fa: 'fab fa-deviantart'
}, {
    ws: 'Sketchfab',
    l: 'https://sketchfab.com/KidpaddleetcieGlin/models',
    fa: 'fas fa-cube'
}, {
    ws: 'YouTube',
    l: 'https://www.youtube.com/channel/UCLCizq_irSximVxMTpx9-zA/videos',
    fa: 'fab fa-youtube'
}, {
    ws: 'Soundcloud',
    l: 'https://soundcloud.com/kidpaddleetcie-glin',
    fa: 'fab fa-soundcloud'
}, {
    ws: 'Wattpad',
    l: 'https://www.wattpad.com/user/KidpaddleetcieGlin',
    fa: 'fab fa-weebly'
}, {
    ws: 'Skyrock',
    l: 'https://kidpaddleetcieglin.skyrock.com/',
    fa: 'fas fa-splotch'
}];

let ws = " ";
for (let i = 0; i < ws_list.length; i++) {
    let web = ws_list[i];
    ws += '<a type="button" target="_blank" href="' + web.l + '" class="p-2 btn btn-outline-primary d-flex flex-wrap " >';
    ws += '<i class="' + web.fa + '"><span> ' + web.ws + '</span></i>';
    ws += '</a>';
}

document.getElementById("ws").innerHTML = '<iframe>' + ws + '</iframe>';