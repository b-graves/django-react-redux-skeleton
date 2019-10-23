import React, { Fragment } from 'react';
import Form from "./Form";
import Interviews from "./Interviews"

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Interviews />
        </Fragment>
    )
}
