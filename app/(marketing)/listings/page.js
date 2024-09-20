'use client';

import React, { useEffect, useState } from 'react';
import { Autocomplete, Grid, CircularProgress, Typography, Box, TextField } from '@/app/_ui/mui';
import { WorkspaceCard } from '@/app/_components/workspaceCard';
import axios from 'axios';
import { baseUrl } from '@/app/_ui/utils';


const SearchWorkspace = () => {
  const [loading, setLoading] = useState(true);
  const [workspaces, setWorkspaces] = useState([]);
  const [locations, setLocations] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchArea, setSearchArea] = useState('');

  useEffect(() => {
    axios.get(`${baseUrl}space/get-locations/`)
      .then(res => {
        if (res.status == 200) {
          setLocations(res.data.locations);
        }
      })
      .catch(err => console.log(err, err.response))
  }, []);

  useEffect(() => {
    let searchString = '?'
    if (searchCountry) {
      searchString += `country=${searchCountry}&`;
    }
    if (searchCity) {
      searchString += `city=${searchCity}&`;
    }
    if (searchArea) {
      searchString += `area=${searchArea}`;
    }

    axios.get(`${baseUrl}space/search-workspaces/${searchString}`)
      .then(res => {
        if (res.status == 200) {
          console.log(res.data);
          setWorkspaces(res.data);
          setLoading(false);
        }
      })
      .catch(err => console.log(err, err.response))
  }, [searchCountry, searchCity, searchArea]);

  const countries = Array.from(new Set(locations.map(loc => loc[0])));
  let cities = Array.from(new Set(locations.map(loc => loc[1])));
  let areas = Array.from(new Set(locations.map(loc => loc[2])));
  if (searchCountry) {
    cities = locations.filter(loc => loc[0] === searchCountry);
    areas = Array.from(new Set(cities.map(loc => loc[2])));
    cities = Array.from(new Set(cities.map(loc => loc[1])));
  }
  if (searchCity) {
    areas = Array.from(new Set(locations.filter(loc => loc[1] === searchCity).map(loc => loc[2])));
  }


  let filteredWorkspaces = [...workspaces];

  return (
    <Box>
      <Box my={4}>
        <Typography component="h2" variant="h4" gutterBottom>
          Search Workspace
        </Typography>

        {/* Search Input */}
        <Box display='flex' alignItems='center' mt={1} mb={6}>
          <Autocomplete
            value={searchCountry}
            onChange={(e, value) => setSearchCountry(value)}
            disablePortal
            options={countries}
            sx={{ width: 300, mr: 2 }}
            renderInput={(params) => <TextField placeholder='Search by Country' variant="outlined" {...params} />}
          />

          <Autocomplete
            value={searchCity}
            onChange={(e, value) => setSearchCity(value)}
            disablePortal
            options={cities}
            sx={{ width: 300, mr: 2 }}
            renderInput={(params) => <TextField placeholder='Search by City' variant="outlined" {...params} />}
          />

          <Autocomplete
            value={searchArea}
            onChange={(e, value) => setSearchArea(value)}
            disablePortal
            options={areas}
            sx={{ width: 300, mr: 2 }}
            renderInput={(params) => <TextField placeholder='Search by Area' variant="outlined" {...params} />}
          />
        </Box>

        {
          loading && <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}><CircularProgress /></Box>
        }

        {/* Workspace Cards */}
        <Grid container spacing={3}>
          {(filteredWorkspaces.length > 0 && !loading) ? (
            filteredWorkspaces.map((workspace) => (
              <Grid item size={3} key={workspace.id}>
                <WorkspaceCard workspace={workspace} />
              </Grid>
            ))
          ) : (
            <Typography variant="body1" sx={{ padding: 2 }}>
              No workspaces found.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box >
  );
};

export default SearchWorkspace;
