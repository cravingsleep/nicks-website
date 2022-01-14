# Nicks Website
This is my idea of telling you a bit about me and displaying a few of my technical skills
while also having a bit of fun.
On the main page you will find a bunch of categories you can 'purchase'
by adding them to your cart. Don't worry, everything is free! Then once purchased you can
read them in the My Items section.
Note all your selections and purchases will reset on each page visit. I do not want to clutter your
computer with unnecessary cookies just so the selection can stay!

---

## Structure
If you are here to check out the source code then checkout:
|Directory|Description|
|---------|-----------|
|components|All the react components used in the pages|
|context|The React Context solution for storing global state such as filters and what purchases have been made|
|data|A config of sorts for the various possible listings|
|design|A small design system including mixins and helper classes|
|pages|The actual routes for the application as well as some reset SCSS|
|public|The svgs|
|utils|A classname helper for React components|

---
## Running
If you would like to run the project locally simply do:
1. `yarn`
2. `yarn dev`

And the project will be live at `localhost:3000`.

## Testing
The project uses Enzyme and Jest to test the components and logic.

Run `yarn test` to launch the unit tests.

