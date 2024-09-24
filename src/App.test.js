import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('shows friends list and chut window', () => {
  render(<App />);
  expect(screen.getByText(/Friends List/i)).toBeInTheDocument();

  const friendItems = screen.getAllByRole('listitem');
  expect(friendItems[0]).toHaveTextContent(/George/i);
  expect(friendItems[1]).toHaveTextContent(/Helen/i);
  expect(friendItems[2]).toHaveTextContent(/Sara/i);

  expect(screen.getByText(/Chat with Sara/i)).toBeInTheDocument();
  expect(screen.getByText(/Hey <3 Its Sara/i)).toBeInTheDocument();
});

test('selecting a friend updates the chat window', () => {
  render(<App />);
  const george = screen.getByText(/George/i);
  fireEvent.click(george);

  expect(screen.getByText(/Chat with George/i)).toBeInTheDocument();
  expect(screen.getByText(/Hello friend, its George/i)).toBeInTheDocument();
});