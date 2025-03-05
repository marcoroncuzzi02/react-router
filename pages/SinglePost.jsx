import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
    const [singlePost, setSinglePost] = useState({
        id : '',
        title : '',
        content : '',
        image : '',
        tags : []  
    })
    const { id } = useParams();

    const url = import.meta.env.VITE_ENDPOINT_URL;

     useEffect(() => {
        fetch(url + '/' + id)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSinglePost(data);
                })
            .catch((error) => console.error(error));
        }, [id]);
    
    return (
        <div>
        <h2>Titolo: {singlePost.title}</h2>
        </div>
    );
}

export default SinglePost

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function SinglePost() {
//     const [singlePost, setSinglePost] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`http://localhost:3000/api/posts/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log("Dati ricevuti:", data);
//                 setSinglePost(data);
//             })
//             .catch((error) => console.error("Errore nel fetch:", error));
//     }, [id]);

//     if (!singlePost || Object.keys(singlePost).length === 0) {
//         return <p>Caricamento o nessun dato disponibile...</p>;
//     }

//     return (
//         <div>
//             <h2>Titolo: {singlePost.title}</h2>
//             <p>Contenuto: {singlePost.content}</p>
//         </div>
//     );
// }

// export default SinglePost;
