# Uniform Resource Locator Extender 3000 Extreme Edition

This is whatever the opposite of a URL shortener is. Users can enter a URL and some long text of their choice and receive a long URL they can use to annoy their group chat.

**Link to project:** https://uniform-resource-locator-extender.cyclic.app/

![URL Extender demo](https://github.com/atklenner/atklenner/blob/main/images/extender-recording.gif)

## How It's Made:

**Tech used:** HTML, Pico.CSS, JavaScript, Node, Express, DynamoDB

This project runs on a Node server using Express to handle the routing. The client side JavaScript sends the link to the server using the Fetch API and the link is stored using the DynamoDB provided by Cyclic. All of the styling comes from the classless version of Pico.CSS.

## Optimizations

When I return to this project I would like to add more examples for the text in the long URL.

## Lessons Learned:

I learned how to override a form and use a fetch request and asynchronous JavaScript instead. This allowed me to give the user a smoother experience because the page doesn't need to be refreshed after they submit the form.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Homepage:** https://github.com/atklenner/homepage

**Bouncing DVD Logo:** https://github.com/atklenner/BouncingDVDLogo

**Sketches:** https://github.com/atklenner/sketches
