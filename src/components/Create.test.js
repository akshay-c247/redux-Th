import { render, screen } from '@testing-library/react';
import Create from './Create';

test("renders Add your's Details ", () => {
  render(<Create/>);
  const linkElement = screen.getByTestId("heading");
  expect(linkElement).toBeInTheDocument();
});
