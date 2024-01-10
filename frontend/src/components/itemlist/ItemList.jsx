import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom';


const ItemList = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const getItems = async () => {
            try {
                const res = await fetch("http://localhost:3001/nutrition", {credentials: 'include'}) 
                console.log(res)
                if(!res.ok) {
                    navigate("/login")
                    return
                }
                const data = await res.json()
                setItems(data)
            }
            catch (err) {
                console.error('Error fetching data:', err);
            }        
            
        }
        getItems()
    }, [])
    return(
        <div className="item-list-contianer">
            {items.map((i) => {
                return <p>{i.name}</p>
            })}
        </div>
    );
};

export default ItemList;