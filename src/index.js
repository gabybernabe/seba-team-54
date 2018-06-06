import React from 'react';
import ReactDOM from 'react-dom';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const contentStyle = {
    background: "rgb(13, 71, 161)",
    width: "10%",
    height: "120px",
    border: "10px",
    textAlign: "left",
    marginLeft: "7px",
    marginTop: "76px"
};



const App = () => (

    <div >
        <h1>Hello World</h1>
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));





