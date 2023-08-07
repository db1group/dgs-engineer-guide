import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "./../../components/container/container";
import Button from "./../../components/button/button";
import {translate} from '@docusaurus/Translate';

export default function Intro() {

  const component = "shift-intro";

  return (
    <div className={component}>
      <Container componentClass={component} size={"medium"} bgColor={"light"}>
        <div
          className={`${component}__title`}
          dangerouslySetInnerHTML={{
            __html: translate({message: "intro.title"}),
          }}
        ></div>
        <div className={`${component}__content`}>{translate({message: "intro.description"})}</div>
        <Button
          componentClass={component}
          label={translate({message: "intro.button-start"})}
          href={useBaseUrl("/docs/db1-way")}
        />
      </Container>
    </div>
  );
}
