import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";

import { Table, THead, TBody, TR, TH, TD, TDBold } from "./index";

// eslint-disable-next-line no-unused-vars
const fruits = [
  { id: 0, name: "Apple", price: "$ 0.50" },
  { id: 1, name: "Banana", price: "$ 0.60" },
  { id: 2, name: "Cherry", price: "$ 9,999.99" },
  { id: 3, name: "Coconut", price: "$ 2.30" },
];

storiesOf("Table/Basic", module)
  .add("Simple usage", () => (
    <Table>
      <THead>
        <TR>
          <TH>Fruit</TH>
          <TH>Price</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>Apple</TD>
          <TDBold>$ 0.50</TDBold>
        </TR>
        <TR>
          <TD>Banana</TD>
          <TDBold>$ 0.60</TDBold>
        </TR>
        <TR>
          <TD>Cherry</TD>
          <TDBold>$ 9,999.99</TDBold>
        </TR>
        <TR>
          <TD>Coconut</TD>
          <TDBold>$ 2.30</TDBold>
        </TR>
      </TBody>
    </Table>
  ))
  .add("Custom Cell", () => {
    const TDRed = React.useMemo(
      () =>
        styled(TD)`
          color: tomato;
        `,
      [],
    );
    return (
      <Table>
        <THead>
          <TR>
            <TH>Fruit</TH>
            <TH>Price</TH>
          </TR>
        </THead>
        <TBody>
          <TR>
            <TD>Apple</TD>
            <TDRed>$ 0.50</TDRed>
          </TR>
          <TR>
            <TD>Banana</TD>
            <TDRed>$ 0.60</TDRed>
          </TR>
          <TR>
            <TD>Cherry</TD>
            <TDRed>$ 9,999.99</TDRed>
          </TR>
          <TR>
            <TD>Coconut</TD>
            <TDRed>$ 2.30</TDRed>
          </TR>
        </TBody>
      </Table>
    );
  });
