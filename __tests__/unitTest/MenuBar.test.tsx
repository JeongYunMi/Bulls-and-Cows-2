import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MenuBar from "../../src/components/MenuBar";

describe('component = Menubar', () => {
  it('Click the game button to move the page /', () => {
    render(<MenuBar/>);
    expect(screen.getByText('Game')).toHaveAttribute('href', '/');
  });

  it('Click the ranking button to move the page /ranking', () => {
    render(<MenuBar/>);
    expect(screen.getByText('Rank')).toHaveAttribute('href', '/ranking');
  });
});