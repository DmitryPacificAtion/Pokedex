import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import nock from 'nock';

// import { renderHook, act } from '@testing-library/react-hooks'
// import { useParams } from "react-router-dom"

import Pokemon from '../pages/Pokemon';
import Result from '../sections/Result';
// import Message from "../sections/Message";

jest.mock('../../components/pages/Loader', () => ({
  default: props => <span>Loader</span>,
  __esModule: true
}));
// or
// jest.mock('../../components/pages/Loader', () => props => <span>Loader</span>);

// jest.mock('../../components/sections/Result', () => (props => <span>Result</span>));

describe('Test Pokemon page', () => {
  test('Loader has been shown', () => {
    nock(`https://pokeapi.co`).get('/api/v2/pokemon/bulbasaur').reply(() => new Promise(() => {}))
    render(<Pokemon />)

    // const useFetch = jest.fn();
    // const useFetchSpy = jest.spyOn(window, useFetch);
    // useFetchSpy.mockImplementation(() => []);
    // render(<Pokemon />)
    expect(screen.getByText('Loader')).toBeInTheDocument()
  });
  test('Result has been shown', () => {
    const data = nock(`https://pokeapi.co`).get('/api/v2/pokemon/bulbasaur').reply(200, {
      name: 'Bulbasaur2',
      avatar:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
      weight: 69,
      height: 7,
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        },
        {
          slot: 2,
          type: {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
        },
      ],
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/',
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      stats: [
        {
          base_stat: 48,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },
        {
          base_stat: 49,
          effort: 0,
          stat: {
            name: 'attack',
            url: 'https://pokeapi.co/api/v2/stat/2/',
          },
        },
        {
          base_stat: 50,
          effort: 0,
          stat: {
            name: 'defense',
            url: 'https://pokeapi.co/api/v2/stat/3/',
          },
        },
        {
          base_stat: 78,
          effort: 1,
          stat: {
            name: 'special-attack',
            url: 'https://pokeapi.co/api/v2/stat/4/',
          },
        },
        {
          base_stat: 79,
          effort: 0,
          stat: {
            name: 'special-defense',
            url: 'https://pokeapi.co/api/v2/stat/5/',
          },
        },
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: 'speed',
            url: 'https://pokeapi.co/api/v2/stat/6/',
          },
        },
      ],
    })
    console.log('screen', screen);
    render(<Pokemon />)

    // const useFetch = jest.fn();
    // const useFetchSpy = jest.spyOn(window, useFetch);
    // useFetchSpy.mockImplementation(() => []);
    // render(<Pokemon />)
    expect(screen.getByText('Bulbasaur2')).toBeInTheDocument()
  });
});

