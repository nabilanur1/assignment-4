## Answers to Questions

# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: The main differences lie in their flexibility, return type, and whether the returned collection is "live" or "static". 

# 2. How do you create and insert a new element into the DOM?
Ans: To create a new element into the DOM using JavaScript,I first Use document.createElement() to create the element.then add text or attributes if needed, and finally Insert it into a parent using appendChild() or insertAdjacentHTML().

# 3. What is Event Bubbling? And how does it work?
Ans: Event bubbling means when an event happens on a child element, it runs first on that element, then moves up to its parent and ancestors.

# 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation means adding one event listener to a parent element to handle events for all its child elements.It works because events bubble up from the child to the parent.

# 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: The differences between preventDefault() and stopPropagation() methods -
event.preventDefault(): Stops the browser’s default action (like link navigation or form submit).
But the event still bubbles up the DOM.

event.stopPropagation(): Stops the event from moving to parent or child elements.
But the default browser action still happens.
