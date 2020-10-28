import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ContrastTest from "./ContrastTest";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders contrast test", () => {
    const color1 = "#10a381";
    const color2 = "#333333";
    const ratioClass = "span.contrast-icon__ratio";
    const iconClass = "span.contrast-test__icon";
    const iconPassesClass = "contrast-test__icon--passes";

    act(() => {
        render(
            <ContrastTest
                level="AA"
                color1={color1}
                color2={color2}
                size="large"
            />,
            container
        );
    });
    expect(container.querySelector(ratioClass).textContent).toBe("3.96");

    act(() => {
        render(
            <ContrastTest
                level="AA"
                color1={color1}
                color2={color2}
                size="large"
            />,
            container
        );
    });
    expect(
        container.querySelector(iconClass).classList.contains(iconPassesClass)
    ).toBe(true);

    act(() => {
        render(
            <ContrastTest
                level="AAA"
                color1={color1}
                color2={color2}
                size="large"
            />,
            container
        );
    });
    expect(
        container.querySelector(iconClass).classList.contains(iconPassesClass)
    ).toBe(false);

    act(() => {
        render(
            <ContrastTest
                level="AA"
                color1={color1}
                color2={color2}
                size="small"
            />,
            container
        );
    });
    expect(
        container.querySelector(iconClass).classList.contains(iconPassesClass)
    ).toBe(false);

    act(() => {
        render(
            <ContrastTest
                level="AAA"
                color1={color1}
                color2={color2}
                size="small"
            />,
            container
        );
    });
    expect(
        container.querySelector(iconClass).classList.contains(iconPassesClass)
    ).toBe(false);
});
