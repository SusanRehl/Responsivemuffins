# Responsive Muffins!

A fictional muffin store's site, created to explore responsive design.
Site is designed for phone, tablet and desktop.

## Responsive design techniques used include:
- Picturefill
- Media queries
- Bootstrap responsive design classes
- Use of % and em measures instead of absolutes where possible
- SVG image format for logo

## A few of my learnings:
1. While the toggle device toolbar in Chrome Dev Tools was invaluable when styling, the phone version at 320px wide did not do a good job of simulating what I see (of the live site on Heroku) on my Galaxy S6 droid. I'm now working on refactoring the mobile styles.

2. Hover state doesn't apply to tablet and phone! Made sense after I thought about it!

3. Learned a lot about standards for tablet and phone, ie collapsing the nav bar to a hamburger menu, making buttons large for fingers, and planning images and content well (and ensuring content is absolutely necessary).

4. Also learned about customizing Bootstrap! I looked into changing the breakpoint at which the hamburger menu collapses by changing the @grid-float-breakpoint: from @screen-sm-min; to @screen-md-min; in order to get it to break at a higher pixel width, but I just really needed to decrease the padding of the navbar's <li>s in order to solve the problem.


## http://monumentalmuffins.herokuapp.com
