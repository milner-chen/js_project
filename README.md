# Cat-Lector

![cat-lector-start](cat-lector-start.png)
![cat-lector](cat-lector.png)

# Description
[Cat-Lector](https://milner-chen.github.io/js_project/) is a game where you help a cat with its errands by collecting everything on it's to-do list. However, this cat is very peculiar so you must gather these items in the order listed. You will navigate through platforms with arrow keys and collect items when you come into contact with them. If you collect items out of order, you will lose a life. If collected properly, you will gain points. The game ends when time is up or when you lose all your lives.
<!-- There are also perils out in the wild so be careful when foraging! -->

# Wireframe
![wireframe](./js_project_wireframe.png)
  - The help button in the upper right opens a modal with user instructions.
  - The sound button in the upper right allows the user to mute and unmute sound effects.
  - The nav links in the lower right lead to this project's GitHub repo and my LinkedIn.

# Technologies, Libraries, APIs
- Javascript
- Canvas API
- HTML5 and CSS3
- Webpack
- npm

# Functionality & MVPs
## In Cat-Lector, users are able to:
  - Naviate the character using the left, up, and right arrow keys.
  - See the order in which they need to collect the items
  - Collect items that are next on the list on contact
  - Lose a heart when an incorrect item is touched
  - See their current score and time
  ## In addition, this project includes:
  - User instructions in a modal on the initial screen
  <!-- - There are obstacles to overcome -->
 
# Implementation Timeline

- Friday Afternoon & Weekend: Research on Canvas API, rendering and animation, and collision detection. Setup basic project structure. Render and move character with key-bindings. Implement collision detection with platforms.
- Monday: Work on screen boundaries, implementing gravity and velocity, and collision detection with items.
- Tuesday: Render hearts, removing hearts upon a collision. Render and update score, timer, and to-do list.
- Wednesday: Animate character sprites. Implement game over logic, game start and restart. Add user instructions, and links.
- Thursday: Add sound effects, styling, and final touches. Deploy to GitHub pages.

<!-- - Research
- Setup project
- Set up classes
- Get the character moving

## Monday:

- Implement the game logic
- Make sure that the character can interact with items (collision)
- Make sure that stats. (points, lives, etc) update properly

## Tuesday:

- Make sure that the task list updates properly
- Make sure that the stats render correctly

## Wednesday:

- Add the timer
- Styling
- Start bonuses if there is time

## Thursday Morning:

- Deploy to GitHub pages -->

# Future Implementations
  - Add side scrolling functionality
  - Gernerate multiple task lists