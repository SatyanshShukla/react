import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks for Click here to add user', () => {
  render(<App />);
  const linkElement = screen.getByText("Click Here to Add User");
  expect(linkElement).toBeInTheDocument();
});
