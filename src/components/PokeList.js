import React from 'react';
import { ListGroup, ListItem, Col } from 'react-bootstrap/lib/';

const PokeList = ({listOfPokemon}) => {
    let pokemon = listOfPokemon.map((creature) => {
        return(
            <Col sm={6} md={4} key={creature.name}>
                <ListGroup className="PokeList-item">{creature.name}</ListGroup>
            </Col>
        )
    });

    return(
        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
            <ListGroup>
                {pokemon}
            </ListGroup>
        </Col>
    )
};

export default PokeList;