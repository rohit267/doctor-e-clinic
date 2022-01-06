import React from 'react'
import { Container } from 'reactstrap'

function Layout(props) {
    return (
        <Container fluid={true}>
            {props.children}
        </Container>
    )
}

export default Layout
