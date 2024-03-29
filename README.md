# Quiztions - a quiz app

Quiztions in a simple quiz application designed to test the users in general knowledge. It's a fully responsive little JavaScript game made for people who want to test their knowledge in a broad sense, no categories. When finished the user gets a score and a short message grading them.

![Responsice Mockup](assets/images/screenshots/amiresponsive_quiz_app.png)

## Features 

### Existing Features

- __Starting Page__

  - The starting page welcomes the user to the game. A button to start the game is shown.

![Starting Page](assets/images/screenshots/welcome_page.png)

- __The Quiz Page__

  - This page shows the quiz game. The user will be able to easily see the question, a corresponding image (not on mobile) and the four answers they can chose from. A timer and progress bar is shown on the bottom.

![Quiz](assets/images/screenshots/quiz.png)

- __The Question section__

  - The question will pop up here. The order of the questions are randomized. 

- __The image section__

  - For every question there is a corresponding image that shows under the question.
  - The image is not shown in smaller screen widths in order for the user not having to scroll mid question.

- __The answer section__

  - This section has four answer buttons prefixed with A, B, C and D (not prefixed on mobile). When the user clicks a button a function is called that checks if it's the correct answer.

- __The timer__

  - At the bottom left there is a timer that counts down from 10 seconds for every question. If no answer is clicked before the timer runs out the user automatically gets an incorrect answer for that question and the next one is shown.

- __The progress bar__

  - At the bottom right there is a progress bar with one circle for every question. The circle will turn green/red depending on a correct/incorrect answer for every question. Here the user can see where they answered right or wrong. 

- __The score screen__
  
  - When all the questions are answered, a score screen pops up that says how many answers the user got correct and a short grading message.
  - The user can click the link "Try again!" to retake the quiz.

![Score screen](assets/images/screenshots/score_screen.png)

### Features Left to Implement

- Randomize the order of the answers
- High scores with user names
- At the end, show the user which questions they got wrong and what the correct answer was
- More questions
- A fixed number of questions for every run

## Testing 

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, iPhone12, iPhone 13 & iPad mini.
- A large amount of testing was done to ensure that all elements displayed properly on different screen sizes.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Responsiveness

- The most testing has been making sure the app works well on different screen sizes. On the smaller screen sizes i removed the images since they took up too much vertical screen space. I wanted the user to be able to see the question and answers without much scrolling while under time pressure.
- I encountered a bug where the footer showed up on top of the rendered elements in the progress bar. Since the progress bar is created in the javascript the footer didn't take that content into consideration when placing itself on the bottom. I tried to work around this problem by googling, but no solution i encountered worked. The result was to remove the footer at a breaking point in the screen width. 
- I removed the question prefixes (A, B, C and D) on smaller screen sizes since they took up too much horizontal space.

### Validator Testing 

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjohneriksson88.github.io%2Fquiz-app%2Fgame.html)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjohneriksson88.github.io%2Fquiz-app%2Fgame.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 10 functions in this file.
      - Function with the largest signature take 1 arguments, while the median is 0.
      - Largest function has 14 statements in it, while the median is 3.5.
      - The most complex function has a cyclomatic complexity value of 7 while the median is 1.5.

### Lighthouse test

- The page got a nearly full score on the Lighthouse test in Google Chrome Dev Tools.
![Lighthouse test](assets/images/lighthouse_test.png)

### Unfixed Bugs

The only bug encountered was that the Javascript doesn't load in Internet Explorer.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://johneriksson88.github.io/quiz-app/index.html


## Credits 

### Content 

- All text and questions were written by me
- Instructions on how to create a quiz app were mainly taken from [this](https://www.youtube.com/watch?v=49pYIMygIcU&ab_channel=CodeExplained) video tutorial by YouTube user Code Explained
- The GitHub repo of the tutorial can be found [here](https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript)
- Code that was directly derived from this tutorial is credited in comments in the JavaScript-file
- Another helpful video tutorial was [this](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1216s&ab_channel=WebDevSimplified) one from YouTube user Web Dev Simplified

### Media

- The images were found on google images and the credits are as follows:
  - Academy awards: MATT SAYLES/A.M.P.A.S. VIA GETTY IMAGES
  - Blue whale: Mike Johnson
  - Tokyo skyline: https://livejapan.com/en/article-a0001580/ - photographer not mentioned
  - Australian flag: Vector graphics image by Ian Fieggen
  - Time zone clocks: artpartner-images / Getty Images
  - WWI trench: (C) The print Collector/Heritage Images/picture alliance
- Font was imported from Google Fonts.