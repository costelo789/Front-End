/**
 * Displaying description of the application and the project description
 * @version 1.0.0
 * @author [Phat Tran Hong Dai](https://github.com/sapegin)
 * Vietnamese-German University
 * Year:2020
 */
import React from 'react';

function AboutUsDetail(){
    return(
    <div>
        < h1 style={{textAlign:"center"}}>About us</h1>
        <p>iFASTATHANU</p>
        <p>Belonging to a larger suite, iFASTATHANU application delivers:{"\n"}</p>
        <div >
            <p>{'\t \u2022 \t'}A live feed of the devices's metric {"\n"}</p>
            <p>{'\t \u2022 \t'}A history panel about the previous alarms{"\n"}</p>
            </div>
        <p>This project is a collaboration of Phat Tran and Hung Vu in term of completing University thesis program.</p>
    </div>
    )
}

export default AboutUsDetail;