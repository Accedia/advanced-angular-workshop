##Exercise 1

  1. Complete the tasks in app.component.html
    1.1 Show the posts by completing the *ngFor. You can find the name
        оf the array you need in the app.component.ts file.
    1.2 Add the awBorder directive to the aw-post component.

  2. Complete the tasks in awBorder.directive.ts
    2.1 Add Renderer2 and ElementRef in the constructor and use it in the 
        ngOnInit to set the "display" and "border" styles
    2.2 Update the hardcoded color value of the border and make it like
        Input parameter, so it can be customizable. Leave the current 
        color value like a default if no other is passed.


##Exercise 2
  1. Complete the tasks in post.component.html
    1.1 Use the date pipe to format 'dateCreated' to 'dd MMM yyyy'
    1.2 Add the custom slice pipe to the post body.

  2. Complete the tasks in slice.pipe.ts
    2.1 Modify the transform function so that it returns
        the substring from 0 to maxLength and add "..." at the end if necessary.


##Exercise 3
  1. Complete the tasks in app.component.html
    1.1 Put a router-outlet component in the .page-container div.


  2. Complete the tasks in header.component.html
    2.1 Add a router link to /posts in the nav component

  3. Complete the tasks in app-routing.module.ts
    3.1 Modify the routes array to include the NotFoundPageComponent
    3.2 Modify the routes array to include the posts/:id route. Make it as a child
        route to posts route

  4. Complete the tasks in posts-page.component.html
    4.1 Put a router-outlet component after h3 header. This is the router-outlet 
        for the child route.


##Exercise 4
  1. Complete the tasks in posts-page.component.ts
    1.1 Import and implement OnInit 
    1.2 Complete the getPosts function call and save the posts in this.posts.
    1.3 Set the isLoading flag to false once the getPosts request completes.


  2. Complete the tasks in post.service.ts
    2.1 Remove hardcoded posts data and initialize this.posts as empty array
    2.2 Finish getPosts() to fetch the posts data
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.posts = json.map(addDateToPost));

  3. Complete the tasks in post.component.ts
    3.1 Implement ngOnChanges function to print on the console 
        the current value and the previous value of the post


##Exercise 5
  1. Complete the tasks in post.service.ts
    1.1 Complete the getPostById function by using the http module.
        Add a date to the post using .pipe(map...

  2. Complete the tasks in posts-page.component.ts
    2.1 Finish the ngOnInit implementation by setting the isLoading
        flag to false using the tap rxjs operator. Then save the posts in this.posts.