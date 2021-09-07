
import React from 'react';

import"./form.style.css";



const Form = props =>{
    return(
        <div className="container">
            <div>{props.error? error():null}</div>

            <form onSubmit={props.loadweather}>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-3">
                     <div class="custom-search">
                     <input type="text" name="city" class="custom-search-input" placeholder="Enter your City Name" />
                    <button class="custom-search-botton" type="submit">Get Weather</button>  
                </div>
            </div>       
            </div>
            </form>   
        </div>
    );
};

function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">
        
        Please Enter City and Country Name First


        </div>

    );
}

export default Form;