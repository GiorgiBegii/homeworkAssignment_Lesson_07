# homeworkAssignment_Lesson_03 / [Live](https://homework-assignment-lesson-03.vercel.app/)

## Features:

● Introduce a routing the Angular app with 4 routes: /home (default one), /todos, /todos/:id, /weekend-party
Add a header with links to 3 pages: home, todo and weekend-party (with routerLink and routerLinkActive)
home page contains two buttons “Todo” and “Weekend” that redirect the user to an appropriate page from TS logic
todos page should render todos list (10 items) (https://jsonplaceholder.typicode.com/todos). If todo is cllicked the 
/todos/:id page is opened. It should load a certain todo data from https://jsonplaceholder.typicode.com/todos/:id, get 
the id from the route details.
weekend (lazy loaded) page shows just some static text and should be protected with guard to be accessible only 
during the weekend. Show in any way the message if currently this page is not available and redirect the user to home
[optional] “Weekend” button should add bypass=true query parameter that will force the guard to allow access even if 
it’s not a weekend now

**Folder Structure:**

src/[app/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_07/tree/main/src/app)  
├─ [pages/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_07/tree/main/src/app/pages)  
│  ├─ [home-page/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_07/tree/main/src/app/pages/home-page)  
│  │  ├─ home-page.component.ts  
│  │  ├─ home-page.component.html  
│  │  ├─ home-page.component.scss  
│  ├─ [todo-page/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_07/tree/main/src/app/pages/todo-page)  
│  │  ├─ todo-page.component.ts  
│  │  ├─ todo-page.component.html  
│  │  ├─ todo-page.component.scss  
│  ├─ [todos-page/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_07/tree/main/src/app/pages/todos-page)  
│  │  ├─ todos-page.component.ts  
│  │  ├─ todos-page.component.html  
│  │  ├─ todos-page.component.scss  
│  ├─ [weekend-party-page/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_07/tree/main/src/app/pages/weekend-party-page)  
│     ├─ weekend-party-page.component.ts  
│     ├─ weekend-party-page.component.html  
│     ├─ weekend-party-page.component.scss  
├─ [services/](https://github.com/GiorgiBegii/homeworkAssignment_Lesson_07/tree/main/src/app/services)  
│  ├─ todo-service.ts  
│  ├─ weekend.guard.ts  

