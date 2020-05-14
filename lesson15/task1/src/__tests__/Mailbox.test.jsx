import React from "react";
import { shallow } from "enzyme";
import Mailbox from "../Mailbox.jsx";

describe(`<Mailbox>`, () => {
  it("should display number of unread messages", () => {
    const props = {
      unreadMessages: [1, 2, 3],
    };
    const wrappedComponent = shallow(<Mailbox {...props} />);
    expect(wrappedComponent.find(".mailbox__count").exists()
    ).toBeTruthy();
  });
});

describe(`<Mailbox>`, () => {
  it("should not display number of unread messages", () => {
    const props = {
      unreadMessages: [],
    };
    const wrappedComponent = shallow(<Mailbox {...props} />);
    expect(wrappedComponent.find(".mailbox__count").exists()
    ).toBeFalsy();
  });
});
