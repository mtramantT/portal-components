import React from "react";
import { Grid, Row, Col } from '../flex';

export interface WebProps {
    navbar?: React.ReactNode;
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    body: React.ReactNode;
}

//Optional Sidebar button
//Body should add route name to class
export const Web: React.FC<WebProps> = (props: WebProps) => {
    return (
        <Grid>
            {props.navbar && <Row>{props.navbar}</Row>}
            {props.header && <Row>{props.header}</Row>}
            <Row>
                {props.sidebar && <Col collapse="sm" size={1}>{props.sidebar}</Col>}
                <Col>{props.body}</Col>
            </Row>
            {props.footer && <Row>{props.footer}</Row>}
        </Grid>
    );
}
