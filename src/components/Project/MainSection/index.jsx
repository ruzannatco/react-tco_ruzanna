import React from "react";
import {Body} from "./Body";
import {Head} from "./Head";
import "./styles.css";
import {DeleteTaskContextProvider} from "../../../context/providers/delete-task-context-provider";


export const MainSection = ({setFilterField}) => {

    return (
        <div className="main">
            <Head setFilterField={setFilterField} />
            <DeleteTaskContextProvider>
                <Body />
            </DeleteTaskContextProvider>
        </div>
    );
};
