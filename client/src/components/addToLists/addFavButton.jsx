import React, { useState } from "react";
import axios from "axios";
import "./addBtn.css";

const AddFavButton = ({ userId, bookId, favRank }) => {
    const [isFav, setIsFav] = useState(false);

    const unFavorite = async () => {
        await axios.delete(`http://localhost:8000/user/${userId}/top-5-fav-books`, {
            bookId: bookId,
        });
        favRank = 0;
        setIsFav(false);
    };

    const getRank = async () => {
        setIsFav(true);
    }

    const setFavorite = async () => {
        
        const response = await axios.post(`http://localhost:8000/user/${userId}/top-5-fav-books`, {
            bookId: bookId,
            rank: favRank,
        });
        favRank = response.data[0];
        console.log(favRank);
    }

    return (
        <div className="button">
            {favRank != 0 ?
                (<button className="UnFav" onClick={unFavorite}><i class="fa-solid fa-heart"> {favRank}</i></button>)
                :
                (
                    <>
                        <button className="Fav" onClick={getRank}> <i class="fa-regular fa-heart"></i> </button>
                        {isFav ?
                            (<input type="integer" className="Fav Rank" value={"0"} onChange={setFavorite} />)
                            :
                            (<label></label>)
                        }
                    </>
                )}
        </div>

    );
};

export default AddFavButton;