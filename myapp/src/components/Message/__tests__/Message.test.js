import { render, screen } from "@testing-library/react";
import { Message } from "../index";

describe("Message", () => {
  it('matches snapshot with message autotest:autotest', () => {
    const component = render(
      <Message text="autotest" author="autotest"/>
    );
     expect(component).toMatchSnapshot();
  });
});
