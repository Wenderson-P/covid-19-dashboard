import React, { memo, useContext, useMemo } from 'react';
import { scaleLog } from 'd3-scale';
import { format } from 'date-fns';
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from 'react-simple-maps';

import AppContext from '~/util/AppContext';

import { Tip, Container, CountryStats } from './styles';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = ({ setTooltipContent }) => {
  const { countriesData } = useContext(AppContext);

  const colorScale = useMemo(() => {
    const { lowestValue = 0, biggestValue = 0 } = countriesData;
    return scaleLog()
      .domain([lowestValue, biggestValue])
      .range(['#E6A6A6', '#E60000']);
  }, [countriesData]);

  return (
    <Container>
      <ComposableMap
        data-tip=""
        width={600}
        height={215}
        projectionConfig={{
          rotate: [0, 0, 0],
          scale: 80,
        }}
      >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = countriesData[geo.properties.ISO_A3];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d.confirmed) : '#D6D6DA'}
                  onMouseEnter={() => {
                    const { NAME, ISO_A3 } = geo.properties;
                    const country = countriesData[ISO_A3];
                    const {
                      confirmed = 0,
                      deaths = 0,
                      recovered = 0,
                      lastUpdate,
                    } = country || {};
                    setTooltipContent(
                      <CountryStats>
                        <h5>{NAME}</h5>
                        <p>Confirmed: {confirmed}</p>
                        <p>Recovered: {recovered}</p>
                        <p>Deaths: {deaths}</p>
                        <p>
                          Last update:{' '}
                          {lastUpdate !== undefined
                            ? format(new Date(lastUpdate), 'dd/MM/yyyy')
                            : '-'}
                        </p>
                      </CountryStats>
                    );
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    hover: {
                      stroke: '#737373',
                      strokeWidth: 0.7,
                      outline: 'none',
                    },
                    pressed: {
                      stroke: '#737373',
                      strokeWidth: 1,
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <Tip>Hover for country stats</Tip>
    </Container>
  );
};

export default memo(MapChart);
