const API_KEY =
"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDM3ZDIzMjgwYTMwN2U0M2U0NmU2NjA4ZDU3MzIwOCIsInN1YiI6IjY2NWI2YWEzNzRjZmMyMDkxZTQzNzZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ETJop48nboPO4uj2Q4kVP1CwML2PSihT46WO4Y1s78";



const API_URL ="https://api.themoviedb.org/3";

let currentPage = 1;

function llamarAPI (page){
    fetch(`${API_URL}/movie/popular?page= ${page}` , {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    })
    .then(response => response.json())
    .then(data => dibujarDatos(data));
}



function dibujarDatos(json){
    const filas = json.results.map(obj=>Pelicula(obj));
    document.querySelector(".peliculasTendencia .peliculas").innerHTML = filas.join("");
};

    function Pelicula(obj) {
        return `
        <a href="./detalle.html" data-aos="zoom-in"  >
            <div class="pelicula" >
                <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}" loading="lazy" >
                <div class="tituloPelicula">
                    <h4>${obj.title}</h4>
                </div>
            </div>
        </a>`;
    };
    
function cargarPaginaSiguiente(){
    currentPage ++;
    llamarAPI(currentPage);
};

function cargarPaginaAnterior() {
    if (currentPage >1) {
        currentPage --;
        llamarAPI(currentPage)
    }
};

document.querySelector(".anterior").addEventListener("click",
    cargarPaginaAnterior);


document.querySelector(".siguiente").addEventListener("click",
    cargarPaginaSiguiente);

llamarAPI(currentPage);