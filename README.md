clone from git

npm i

npm run dev

This app presents a list of customers in a table. At the top there is a search bar where you can search for a customer by name, and the result will be returned at the top of the table. Each customer entry - eg row on the table has a 'view orders' button which will present all the orders ascribed to that selected customer in a modal overlay.

This is an outline of how long it took -

Setting up a blank vite project, putting in place the README, bootstrap imports, and base components 15mins
Successfully interrogate api for customers 5 mins
1.render in a table...
Got them rendered in a simple card layout(10min) - now putting them into a table instead.(5 mins)
2.Implement a search bar - best part of an hour - wanted to implement my own front end search
3.Interrogate api for orders - 5 mins
4.Display in a table - 5 mins
5.Display orders in a modal - 15 mins
6.Link up Customer to call Modal with orders - 45 mins
