import React from 'react';

const Person = (props) => {

return (

    <div>
        {/* <p>I am Ajinkya and i am {12*2+1} years old . {props.work}</p>
        <p>{props.children}</p> 
        */}

    <p onClick={props.click}> I am {props.name} and i am {props.age} </p>
        
        {/* <p>I am Random Person and i am {Math.floor(Math.random()*20)} years old </p> */}
    </div>
)

}

export default Person;