import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
        return ( < section > {
                list.map((items) => ( <
                    Cards key = { items.id }
                    item = { items }
                    handleClick = { handleClick }
                    />
                ))
            } < /section>);
        };

        export default Amazon;