import Greeting from "./Greeting";
import Profile from "./Profile";
function Gallery(){
    return(
       <>
       <img src={"https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_1280.jpg"}></img>
       <Greeting/>
       <Profile/>
       </>
    );
}
export default Gallery;
