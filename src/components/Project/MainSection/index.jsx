import React from "react";

import {Body} from "./Body";
import {Head} from "./Head";
import "./styles.css";


export const MainSection = ({setFilterField}) => {

    return (
        <div className="main">
            <Head setFilterField={setFilterField} />
            <Body />
        </div>
    );
};
