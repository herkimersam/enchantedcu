import React from 'react';
import styled from 'styled-components';
import { ContentContainer, Gutter } from '../../styled_components';
import { NavBar, Footer } from '../../components';
import { colors } from '../../config';

const DataPage = styled.div`
    background:white;

// const TableStyle  = styled.div`

const Enchanted = styled.div`
    width:100%;
    max-width:1140px;
    text-align:center;
    color: ${colors.lightgray};
    margin:0 auto;
    padding:50px 10px 0 10px;
        a {
        font-family: 'Lora', sans-serif;
        font-size: 13px;
        font-stretch: normal;
        text-align:left;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        padding:2rem 0;
    }
    p, .license-description a {
        
        font-family: 'Lora', sans-serif;
        font-size: 1.25rem;
        font-stretch: normal;
        text-align:left;
        font-style: normal;
        line-height: 1.6;
        letter-spacing: normal;
        padding:2rem 0;
        &.license-description {
            text-align: center;
        }
    }
    #button-search{
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1.75px;
        line-height:5;
        text-align: center;
        background-color: ${colors.forest};
        color: #FFFFFF;
        padding: 1rem 1.5rem;
        margin:1rem;
        // border-radius: .3rem;
        text-decoration:none;
    }
`

export default function Data() {
    return (
        <DataPage>
            <NavBar />
            <ContentContainer>
                <h1>Data</h1> <hr/>
                <Gutter h={10} />
                <p>
                    <i>Enchanted CU</i> uses custom crafted data.
                    Read more on our <a href="/About">About</a> page.
                    <br /><br />

                    Download the latest version of our data here:
                    <br />
                </p>

                <Enchanted>
                    <h2> Current Data Release (TBD)</h2>
                    <p>Not yet available.</p>
                </Enchanted>

                <Gutter h={20} />
                <h2>Data Dictionary</h2>
                <p> Not yet available.</p>
                <Gutter h={40} />
                <h2>Map Variables and Data Sources</h2>
                <h3>
                    This table highlights the map variables and contributors,
                    as well as the data methodology documentation and sources.
                    All map data are harmonized to the census tract scale.
                </h3>
                    <Gutter h={20} />
                    <p>Not yet available.</p>
                    <Gutter h={40} />
                <h2>Basemap Layers and Data</h2>
                <h3>The variables below are represented in the map as base layers.</h3>
                <Gutter h={20} />
                <p>Not yet availble.</p>
            </ContentContainer>
            <Footer />
        </DataPage >
    );
}