import React, { FC } from 'react';
import { Pokemon } from '../../models/Pokemon';
import styled from 'styled-components';

interface IProps {
    pokemon: Pokemon | null;
}

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const PokemonDetailsComponent: FC<IProps> = ({ pokemon }) => {
    if (!pokemon) {
        return <div>Failed To Load Data.</div>
    }

    const height = Math.round((pokemon.height * 0.328084 + 0.00001) * 100) / 100;

    const name = pokemon.name;

    return (
        <div className="col-md-3 col-sm-6 mb-5">
                <Card className="card">
                <h5 className="card-header">{name}</h5>
                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                            {height}
                        </h6>
                    </div>
                </Card>
        </div>
    );
}

export default PokemonDetailsComponent;