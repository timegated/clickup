### ClickUp Demo

I used sass and webpack here to allow me to break down the design into smaller reusable chunks as much as possible.

Also webpack for achieving this organization as far as bundling any assets related to the html file.


### Sass Structure

#### Base
- Any components in this directory apply global styles to the page such as general styling for buttons, text, or header tags.

#### Layout
- In an effort to separate layout styling from styles that deal with typography, color, or sizing I grouped all files related purely to positioning and layout together.

#### Color, Typography, Sizing

- These are mainly gouped together within the components directory as these styles specifically relate to individual components and are generally not shared. 

#### Libs, Vars, Mixins and Functions

- Utilities for reusing styles accross buttons, links or general sizing properties in an effort to keep code DRY.

#### Stack
- Webpack
- Sass
- JS
