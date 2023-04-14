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
};

describe('Result component renders:', () => {
  test('name', () => {
    render(<Result {...initState} />)
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
  });

  test('types', () => {
    render(<Result {...initState} />)
    expect(screen.queryByText('Grass')).toBeInTheDocument();
    expect(screen.queryByText('Poison')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).not.toBeInTheDocument();
  });

  test('abilities', () => {
    render(<Result {...initState} />)
    expect(screen.queryByText('Overgrow')).toBeInTheDocument();
    expect(screen.queryByText('Chlorophyll')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).not.toBeInTheDocument();
  });

  test('stats', () => {
    render(<Result {...initState} />)
    expect(screen.queryByText('48')).toBeInTheDocument();
    expect(screen.queryByText('49')).toBeInTheDocument();
    expect(screen.queryByText('50')).toBeInTheDocument();
    expect(screen.queryByText('78')).toBeInTheDocument();
    expect(screen.queryByText('79')).toBeInTheDocument();
    expect(screen.queryByText('80')).toBeInTheDocument();
  });

  test('stats colors', () => {
    const container = render(<Result {...initState} />);
    expect(container.queryByText('48').classList.contains('red')).toBe(true)
    expect(container.queryByText('49').classList.contains('red')).toBe(true)
    expect(container.queryByText('50').classList.contains('yellow')).toBe(true)
    expect(container.queryByText('78').classList.contains('yellow')).toBe(true)
    expect(container.queryByText('79').classList.contains('yellow')).toBe(true)
    expect(container.queryByText('80').classList.contains('green')).toBe(true)
  });
});

describe('Result\'s default props are:', () => {
  test('type', () => {
    const propsOverride = {
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        },
      ],
    }
    render(<Result {...initState} {...propsOverride} />)

    expect(screen.queryByText('Grass')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).toBeInTheDocument()
  });

  test('hability', () => {
    const propsOverride = {
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
    };

    render(<Result {...initState} {...propsOverride} />)
    expect(screen.queryByText('Overgrow')).toBeInTheDocument();
    expect(screen.queryByText('Nada')).toBeInTheDocument();
  });
});
