import React from 'react';
import NameForm from "../NameForm";
import BasicList from "../BasicList";

function Home() {
    return (
        <div className="mainarea">
            <BasicList/>
            <NameForm/>
        </div>
    )
}

export default Home