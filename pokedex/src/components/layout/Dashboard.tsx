import React, { PureComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { loadDashboard } from '../../redux/actions/dashboard-actions';
import { RootState } from "../../redux/types";
import Loading from "./Loading";
import { PokemonService } from "../../services/PokemonService";
import PokemonDetailsComponent from "../pokemon/PokemonDetailsComponent";

const mapStateToProps = (state: RootState) => ({
    pokemonData: state.pokemon.pokemon,
    isLoaded: state.pokemon.isLoaded
});

const mapDispatchToProps = {
    loadDashboard
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type dashboardProps = ConnectedProps<typeof connector>;

class Dashboard extends PureComponent<dashboardProps> {
    componentDidMount() {
        this.props.loadDashboard(new PokemonService());
    }

    render() {
        const { pokemonData, isLoaded } = this.props;

        if (!isLoaded) {
            return <Loading />;
        } else {
            return (
                <div className={"row"}>
                    <div className={"col"}>
                        <PokemonDetailsComponent pokemon={pokemonData}/>
                    </div>
                </div>
            );
        }
    }
}

export default connector(Dashboard);
