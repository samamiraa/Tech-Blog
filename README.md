# Tech-Blog

LIVE URL 👇🏼<br>

## Description

A tech blog that uses HTML, CSS, Javascript, Node.js, Express.js, MySQL. This project was a bit of a challenge for me. There was mostly a lot of debugging and getting the frontend to successfully communicate with the backend. This is certainly not a perfect application, there are a few things I would add to the future development of the project. I would adjust the styling a bit further to make it a bit more responsive. Of course bootstrap has some built in. My main focus was functionality. I was motivated to have the user successfully modify the database by adding, updating and deleting data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

npm install<br>
npm run create

## Usage

First you start off on the homepage where you can see an option to either login or sign up and underneath all blogposts from every user if any.<br>
<br>
<img width="1200" alt="homepage" src="./utils/img/1 home page.png"><br>
<br>
If you click the Sign up button in the nav bar, it woulld redirect you to the registration page where you can fill in your details to register.<br>
<br>
<img width="1200" alt="register page" src="./utils/img/2 registerr page.png"><br>
<br>
<img width="1200" alt="register user details form" src="./utils/img/3 register user details.png"><br>
<br>
If the user already exists then a message will pop up<br>
<br>
<img width="1200" alt="user already exists" src="./utils/img/4 register user already exists.png"><br>
<br>
Once youve registered and log out. You can come back at a later date to log back in. The login button in the nav bar will take you to the login page.<br>
<br>
<img width="1200" alt="login page" src="./utils/img/5 login page.png"><br>
<br>
If you enter in the incorrect info, a message notifying you that something is incorrect<br>
<br>
<img width="1200" alt="invalid login info" src="./utils/img/6 incorrect login details.png"><br>
<br>
After successfully login in, it will automatically redirect you to the dashboard where you can see your existing blog posts if any<br>
<br>
<img width="1200" alt="dashboard" src="./utils/img/7 dashboard page.png"><br>
<br>
The are a few options: create, delete, update or back. Back will take you to the homepage. Create will open a form where you can input a title and text data for your post<br>
<br>
<img width="1200" alt="create post" src="./utils/img/8 create post details.png"><br>
<br>
After you create a new post, it will redirect you back to the dashboard where you can see your newly created post<br>
<br>
<img width="1200" alt="dashboard" src="./utils/img/9 redirect to db with new post.png"><br>
<br>
The delete button deletes selected posts. Unselected it will give you a message to select one. Once you select one and delete it, you will be redirected to a refreshed dashboard<br>
<br>
<img width="1200" alt="delete post" src="./utils/img/10 2 unselected delete alert.png"><br>
<br>
<img width="1200" alt="dashboard" src="./utils/img/10 select then delete.png"><br>
<br>
<img width="1200" alt="dashboard" src="./utils/img/11 redirect to db after delete.png"><br>
<br>
The update button brings up a form with a title and text area input. Similarly to delete, if unselected then a message will prompt you to select a post. After you select and update, you will be redirected to the dashboard with the updated post<br>
<br>
<img width="1200" alt="dashboard" src="./utils/img/12 2 unselected update.png"><br>
<br>
<img width="1200" alt="selected post" src="./utils/img/12 select then update.png"><br>
<br>
<img width="1200" alt="update post form" src="./utils/img/13 update form appears.png"><br>
<br>
<img width="1200" alt="dashboard" src="./utils/img/14 redirct to db with updated post.png"><br>
<br>
The dashboard only shows the users posts they have created<br>
<br>
<img width="1200" alt="dashboard" src="./utils/img/15 db only shows logged in user post.png"><br>
<br>
Where he homepage shows all blog posts create and by all users<br>
<br>
<img width="1200" alt="homepage" src="./utils/img/16 home page shows all posts.png"><br>
<br>
If you click on an individual post, it will take you to that post where you can see who created it and the content of the post. Where as the homepage only shows the title and the date it was created on<br>
<br>
<img width="1200" alt="post" src="./utils/img/17 click on post, add comment.png"><br>
<br>
Underneath the post you can see any comments users have commented. If you click add comment a text area appears for your comment. After you add your comment, it redirects you back to the post with your comment added to it<br>
<br>
<img width="1200" alt="comments" src="./utils/img/18 add comment form.png"><br>
<br>
<img width="1200" alt="post" src="./utils/img/19 redirect to post with new comment.png"><br>
<br>
The delete comment will delete any comments<br>
<br>
<img width="1200" alt="post" src="./utils/img/20 comment delete functional.png"><br>
<br>
Finally when you click the delete button in the navbar, it will log you out and redirect you to the homepage<br>
<br>
<img width="1200" alt="homepage" src="./utils/img/21 logout redirect to homepage.png"><br>
<br>

## Credits

I always refer to class activities, but thank you to my tutor Andrew, Morgan the askBS learning assistant, Shawn my colleauge and my teachers for answering all questions I have and for helping me a better developer.

https://www.w3schools.com/sql/sql_datatypes.asp<br>
https://sequelize.org/api/v6/variable/#static-variable-DataTypes<br>
https://axios-http.com/docs/api_intro<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace<br>
https://regexr.com/<br>
https://stackoverflow.com/questions/62796071/bootstrap-footer-doesnt-stick-to-the-bottom-of-the-page<br>
https://www.npmjs.com/package/bcrypt

## License

The MIT License is short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions.

## Tests

Create an account, add some blog posts, delete some and update some! Add comments. Logout and login in at a later date!