import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calc } from '.';

describe('<Calc />', () => {
  it('should render this component', () => {
    const { getByText } = render(<Calc />)
    expect(getByText('CE')).toBeInTheDocument();
  })

  it('adds digits to the screen when clicked', () => {
    const { getByText } = render(<Calc />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('3'));
    expect(getByText('123')).toBeInTheDocument();
  });

});

describe('test', () => {
  it('should work', () => {
    expect(1).toBe(1)
  })
})