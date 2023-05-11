import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import SelectedNumberList from "../../src/components/game/SelectedNumberWrap/SelectedNumberList";

describe('component = SelectedNumberCard', () => {
  const testString = "123"; 
  it('show number', () => {
    const renderPage = render(<SelectedNumberList selectedNumber={testString}/>)
    renderPage.getByText(testString[0]);
    renderPage.getByText(testString[1]);
    renderPage.getByText(testString[2]);
  });
});