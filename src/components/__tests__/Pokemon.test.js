import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import nock from 'nock';

// import { renderHook, act } from '@testing-library/react-hooks'
// import { useParams } from "react-router-dom"

import Pokemon from '../pages/Pokemon';
// import Result from '../sections/Result';
// import Message from "../sections/Message";

jest.mock('../../components/pages/Loader', () => ({
  default: (props) => <span>Loader</span>
}));

nock(`https://pokeapi.co/api/v2`).get('/pokemon/1').reply(() => new Promise(() => {}))

describe('Test Pokemon page', () => {
  test('Loader has been shown', () => {
    render(<Pokemon />)

    // const useFetch = jest.fn();
    // const useFetchSpy = jest.spyOn(window, useFetch);
    // useFetchSpy.mockImplementation(() => []);
    // render(<Pokemon />)
    expect(screen.findByText('Loader')).toBeInTheDocument()
  });
});

