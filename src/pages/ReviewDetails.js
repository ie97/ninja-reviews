// export default function ReviewDetails() {
//   return (
//     <div>
//       Review Details
//     </div>
//   )
// }

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ReviewDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useFetch('http://localhost:1337/reviews/' + id)
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  
    console.log(data);
  
  return (  
    <div>
      <div className="review-card">
        <div className="rating">{ data.rating }</div>
        <h2>{ data.title }</h2>

        <small>category list</small>
        <p>{ data.body }</p>
      </div>
    </div>
  );
}
 
export default ReviewDetails