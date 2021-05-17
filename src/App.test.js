import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('tax of 10,000 is 2,000 and salary is 8,000', () =>{
  const utils = render(<App/>);
  const inputBox = utils.getByLabelText('input-box')
  fireEvent.change(inputBox, {target:{value:'10000'}})
  const messageText = utils.getByLabelText('rendered-message')
  expect(messageText.textContent).toContain("£10000 ")
  expect(messageText.textContent).toContain("£2000.00")
  expect(messageText.textContent).toContain("£8000.00")
});
