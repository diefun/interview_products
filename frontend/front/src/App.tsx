import { useState, useEffect } from "react";
import "./App.css";


type Product = { id: number; name: string; price: string };

const App = () => {
    const [items, setItems] = useState<Product[]>([]);
    // const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products/")
            .then((res) => res.json())
            .then((json) => {
				console.log(json);
				setItems(json.products);
            });
    }, []); 
    // if (!dataIsLoaded) {
    //     return (
    //         <div>
    //             <h1>Please wait some time....</h1>
    //         </div>
    //     );
    // }
    return (
        <div className="App">
            <h1 className="geeks">GeeksforGeeks</h1>
            <h3>Fetch data from an API in React</h3>
            <div className="container">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <ol>
                            <div>
                                <strong>User_Name: </strong>
                                {item.name},
                            </div>
                            <div>Full_Name: {item.price}</div>
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default App;