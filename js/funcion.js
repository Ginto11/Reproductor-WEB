document.addEventListener("DOMContentLoaded", ()=>{

    fetch("./assets/data.json")
        .then(res => res.json())
        .then(res => {
            console.log(res);
            crearTarjetaVideo(res);
        })

})


function crearTarjetaVideo(res){
    res.videos.forEach(element => {
        //CREACION DE LOS ELEMENTOS HTML
        const $contenedorVideo = document.createElement("div");
        const $h3 = document.createElement("h3");
        const $video = document.createElement("video");
        const $source = document.createElement("source");

        //ESTILOS DEL CONTENEDOR DE VIDEO
        $contenedorVideo.style.display = "flex";
        $contenedorVideo.style.flexDirection = "column";
        $contenedorVideo.style.gap = "15px";
        $contenedorVideo.style.padding = "10px";
        $contenedorVideo.style.backgroundColor = "#000";
        $contenedorVideo.style.borderRadius = "15px";

        //ESTILOS DEL TITULO
        $h3.innerHTML = `<img src="./icons/estrella.png"/>` + element.nombre;
        $h3.style.display = "flex";
        $h3.style.alignItems = "center";
        $h3.style.gap = "5px";

        //ESTILOS DEL VIDEO
        $video.setAttribute("controls", "");
        $video.style.borderRadius = "10px";
        $video.style.width = "100%";
        $video.style.outline = "none";


        //ESTILOS DEL RECURSO
        $source.setAttribute("src", element.ruta + element.nombre + ".mp4");

        //AGREGANDO ELEMENTOS
        $video.appendChild($source);
        $contenedorVideo.appendChild($h3);
        $contenedorVideo.appendChild($video);

        //AGREGANDO EL CONTENEDOR AL DOM
        document.querySelector("section").appendChild($contenedorVideo);

    });
}