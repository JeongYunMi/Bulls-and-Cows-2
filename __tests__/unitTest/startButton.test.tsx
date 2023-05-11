import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import StartButton from "../../src/components/index/StartButton";

describe('component = StartButton', () => {
  it('Click the Start button to move the page', () => {
    render(<StartButton/>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/game');
  });
});