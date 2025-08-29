
1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:getElementById selects one element by Id, getElementByClassName returns a collection of elements by class, 
    and querySelector gets the first match, querySelectorAll gets all matches using any css selector.

2.How do you create and insert a new element into the DOM?

Ans:We can create new element using document.createElement(), and then we have to appendChild() to insert it into 
    the DOM.

3.What is Event Bubbling and how does it work?    

Ans:Event Bubbling is when we click a child element(target element), the event first runs on that element then bubbles up to it's parent and then root.

4.What is Event Delegation in JavaScript? Why is it useful?

Ans:Event Delegation is when we don't use many eventListener to many child instead we use one eventListener 
    to the parent and let's it bubbles up. This helps us to perform well because we are using less memory.
    And this makes our code more cleaner.

5.What is the difference between preventDefault() and stopPropagation() methods?

Ans:preventDefault() : stops the default browser behavior.
    stopPropagation() : stops the event from bubbling up.