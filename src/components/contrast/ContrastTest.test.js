import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ContrastTest from "./ContrastTest";

const color1 = "#10a381";
const color2 = "#333333";

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

it("renders contrast ratio with Level AA and large text", () => {
    const ratioEl = "span.contrast-icon__ratio";

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
    expect(container.querySelector(ratioEl).textContent).toBe("3.96");
});

it("renders pass/fail icon", () => {
    const iconEl = "span.contrast-test__icon";
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
    expect(
        container.querySelector(iconEl).classList.contains(iconPassesClass)
    ).toBe(true);

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
        container.querySelector(iconEl).classList.contains(iconPassesClass)
    ).toBe(false);

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
        container.querySelector(iconEl).classList.contains(iconPassesClass)
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
        container.querySelector(iconEl).classList.contains(iconPassesClass)
    ).toBe(false);
});
