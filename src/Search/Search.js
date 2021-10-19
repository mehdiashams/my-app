import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { SubNav } from "../NavBar/SubNav/SubNav";
import { SearchResults } from "./SearchResults/SearchResults";
import { SearchResultsSummary } from "./SearchResultsSummary/SearchResultsSummary";
import useReactRouter from 'use-react-router';
import { useBusinessSearch } from "../hooks/yelp-api/useBusinessSearch";

export function Search() {
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [business, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);


    return (
        <div>
            <NavBar term={term} location={locationParam}/>
            <SubNav/>
            <SearchResultsSummary term={term} location={locationParam}/>
            <SearchResults business={business} location={locationParam}/>
        </div>
    );
}