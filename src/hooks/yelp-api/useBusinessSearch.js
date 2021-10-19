import { useState } from "react";
import { useEffect } from "react";
import * as api from './api';

export function useBusinessSearch(term,location) {
    const [business, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {
        setBusinesses([]);
        const fetchData= async () => {
            try {
                const rawData = await api.get('/business/search', searchParams);
            const resp = await rawData.json();
            setBusinesses(resp.business);
            setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();

    }, [searchParams]);
    return [business, amountResults, searchParams, setSearchParams];
}