# DOM Atomic 05: Toggle Elements of DOM Path

This is a very similar exercise to the previous few atomics. The difference is that instead of toggling elements that share a class, you'll instead of toggling elements that exist somewhere in the DOM tree.

For example, in the following HTML, there are many elements with the "banana" class but only some of them are inside an element with the "potato" class:

```html
<div class="banana">Banana 1</div>

<div class="potato">
  <div class="banana">Banana 2</div>
  <div class="banana">Banana 3</div>
  <div class="banana">Banana 4</div>  
</div>

<div class="papaya">
  <div class="banana">Banana 5</div>  
</div>
```

The previous exercises allowed you to get all of the elements with a class of 'banana'; but for this exercise, you will need to be more selective.

## Tasks

You have some starter HTML code. When the page loads initially, some of the movies in the list will be hidden. Your job is to write code that toggles the display of the second set of movies whenever the button is clicked.

You should not need to alter the HTML at all to complete this exercise.

## Questions

There are questions to answer for this exercise.