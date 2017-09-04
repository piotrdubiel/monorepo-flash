// Import React
import React from "react";

// Import Spectacle Core tags
import { Appear, Deck, Heading, ListItem, List, Slide } from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme(
  {
    primary: "rgb(240, 219, 79)",
    quartenary: "grey"
  },
  {
    primary: { name: "Roboto Slab", googleFont: true, styles: ["300"] },
    secondary: { name: "Roboto", googleFont: true, styles: ["300"] }
  }
);

console.log(theme);

const AppearListItem = props => (
  <Appear>
    <ListItem {...props} />
  </Appear>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition="slide"
        transitionDuration={500}
        theme={theme}
        progress="number"
      >
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Monorepos
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            !(Google-like monorepo)
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            npm-based monorepos
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Who use it?
          </Heading>
          <List>
            <ListItem>babel</ListItem>
            <ListItem>react</ListItem>
            <ListItem>meteor</ListItem>
            <ListItem>ember</ListItem>
          </List>
        </Slide>
        <Slide bgImage="http://i0.kym-cdn.com/entries/icons/original/000/022/978/yNlQWRM.jpg" />
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Pros
          </Heading>
          <List>
            <AppearListItem>single build & test configuration</AppearListItem>
            <AppearListItem>
              easy to coordinate changes across modules
            </AppearListItem>
            <AppearListItem>
              tests are ran across all modules (easy to discover breaking
              changes)
            </AppearListItem>
            <AppearListItem>
              easier to setup a development environment
            </AppearListItem>
          </List>
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Cons
          </Heading>
          <List>
            <AppearListItem>confusing</AppearListItem>
            <AppearListItem>hard to introduce later</AppearListItem>
            <AppearListItem>more complicated CI setup</AppearListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            How?
          </Heading>
        </Slide>
        <Slide bgColor="tertiary">
          <List>
            <ListItem>lerna</ListItem>
            <ListItem>yarn workspaces</ListItem>
            <ListItem>bash scripts</ListItem>
          </List>
        </Slide>
        <CodeSlide
          code={require("./examples/simple").default}
          ranges={[
            { loc: [23, 24], note: "lerna configuration" },
            {
              loc: [17, 23],
              note: "Global configuration: lint, CI, common dependencies, etc."
            },
            {
              loc: [10, 12],
              note: "shared logic: redux, api requests, sagas, etc."
            },
            { loc: [12, 13] },
            { loc: [13, 15], note: "react-native project" },
            { loc: [15, 17], note: "electron project" },
            { loc: [0, 10] }
          ]}
        />
        <CodeSlide
          code={require("./examples/medium").default}
          ranges={[
            { loc: [0, 3], note: "UI components, grouped by dependency" },
            { loc: [3, 7], note: "Platform specific projects" },
            { loc: [8, 9], note: "Classic REST API request wrapper" },
            {
              loc: [9, 10],
              note: "GraphQL queries & mutations exported as HOCs"
            },
            { loc: [10, 11], note: "Redux actions & reducers" }
          ]}
        />
        <CodeSlide
          code={require("./examples/controversial").default}
          ranges={[
            { loc: [0, 11], note: "Everything like before except..." },
            { loc: [11, 14], note: "Backend for frontend part..." },
            { loc: [12, 13], note: "with separated GraphQL..." },
            { loc: [13, 14], note: "and REST API..." },
            {
              loc: [14, 15],
              note: "and standalone schema, validated on its own."
            }
          ]}
        />
        <Slide bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Thanks
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
