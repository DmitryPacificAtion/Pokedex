import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Result from '../sections/Result';

const initState = {
  name: 'bulbasaur',
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
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 46,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 47,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 48,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
};

describe('Test Result page', () => {
  beforeEach(() => {
    render(<Result {...initState} />);
  });

  test('Check name', () => {
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  });

  test('Check types', () => {
    expect(screen.queryByText('Grass')).toBeInTheDocument();
    expect(screen.queryByText('Poison')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).not.toBeInTheDocument();
  });

  test('Check abilities', () => {
    expect(screen.queryByText('Overgrow')).toBeInTheDocument();
    expect(screen.queryByText('Chlorophyll')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).not.toBeInTheDocument();
  });

  test('Check stats', () => {
    expect(screen.queryByText('Overgrow')).toBeInTheDocument();
    expect(screen.queryByText('Chlorophyll')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).not.toBeInTheDocument();
  });
});

describe('Test default props on Result page', () => {
  test('Check default type', () => {
    const newState = Object.assign(initState, {
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        },
      ],
    });

    render(<Result {...newState} />);

    expect(screen.queryByText('Grass')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).toBeInTheDocument()
  });

  test('Check default hability', () => {
    const newState = Object.assign(initState, {
      abilities: [
        {
          ability: {
            name: 'overgrow',
            url: 'https://pokeapi.co/api/v2/ability/65/',
          },
          is_hidden: false,
          slot: 1,
        },
      ],
    });

    render(<Result {...newState} />);
    expect(screen.queryByText('Overgrow')).toBeInTheDocument();
    expect(screen.queryAllByText('Nada')[1]).toBeInTheDocument();
  });
});
