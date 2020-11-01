import React from "react";
import Header from "../header/header";
import './style.css'
import {Button, ButtonGroup, TextField} from '@material-ui/core';
import {floorPlans} from "../../data/data";
import FloorPlanCard from "../floorPlanCard/floorPlanCard";


export default function Home(props){
    return (
        <div className='home'>
            <div className='home-nav-bar'>
                <div className='header'>
                    <Header />
                </div>
                <div className='nav-bar-container'>
                    <div className='left-nav-container'>
                        <div className='input-area'>
                            <TextField
                                id="outlined-search"
                                label="Enter your Floorplan Name to Get Started"
                                type="search"
                                variant="outlined"
                                fullWidth
                                color={'inherit'}

                                defaultValue={'Prestige 4BHK'}
                            />
                        </div>
                        <ButtonGroup variant="contained" color={'secondary'}>
                            <Button size="large">
                                {'Search Floorplan'}
                            </Button>

                        </ButtonGroup>
                    </div>

                    <div className='right-nav-container'>
                        <div className={'sug-text'}> {'Floorplan Not Listed? Try below option Instead'}</div>
                         <div className={'right-nav-buttons'}>
                                 <button size="large" variant={'outlined'} textPrimary>
                                     {'Upload Floorplan'}
                                 </button>
                                 <button size="large" variant={'outlined'}>
                                     {'Create a Room using Dimensions'}
                                 </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='home-body'>
                <div className={'filter'}>
                    <div className={'filter-result'}>{'Found 4 Floorplans'}</div>
                    <div className={'filter-buttons'}>
                        <button className={'filter-button'}>
                            {'BHK'}
                        </button>
                        <button className={'filter-button'}>
                            {'City'}
                        </button>
                        <button className={'filter-button'}>
                            {'Builder'}
                        </button>
                        <button className={'filter-button selected'}>
                            {'Property Type'}
                        </button>

                    </div>
                </div>
                <div className={'floorplan-list'}>{floorPlans.map((plan, index)=>
                    <FloorPlanCard  key={index} plan={plan} /> )}
                </div>
            </div>
        </div>

    );
}
