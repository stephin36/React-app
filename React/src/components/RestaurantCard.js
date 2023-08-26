import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.info;

    const { loggedInUser} = useContext(UserContext);
  
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
        <img
          className="rounded-lg"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{loggedInUser}</h4>
      </div>
    );
  };

  export const withPromtedLabel = (RestaurantCard) => {
    return(props) => {
       return(
         <div>
           <h1 className="absolute bg-gray-950 text-white p-4 m-2 rounded-lg">Opened</h1>
           <RestaurantCard {...props} />
         </div>
       )
    }
  }

  export default RestaurantCard;