# Helldivers 2 Quiz
![mock up](assets/Readme_images/Helldiver_mock_up.png)

Welcome to my Helldivers 2 quiz!

## Introduction
This is a quiz about my new favorite game, Helldivers 2 by Arrowhead.

## Features

#### First page
![Home](assets/Readme_images/Index_page.png)

* When you first enter the website this is where you land.
* This is also where you see the introduction to what this quiz is about.
* The instruction to this quiz and how many questions there are.


#### Favicon
* A favicon has been implemented with the helldiver 2 and can be seen in the nav for each page.
* This will allow the users to identify the website when they have multiple websites open.

![favicon](assets/Readme_images/Helldivers_favicon.png)

## Quiz

### Game Functions

* Clicking on "Start" initialize the game and hides "intro" and "instructions", displays first question and four different clickable answers.
* When the user clicks on one of the answers the button will turn either green or red. -If the answer is correct the clicked button will turn green and the other 3 buttons will not turn red to indicate that the correct answer has been clicked.
* If the answer is incorrect the clicked button and the other 2 buttons with incorrect answers will turn red and the correct answer will turn green to clearly show the user which one of the answers was correct.
* When all the 15 questions has been answered the user will be directed to the finished section.

![quiz-page](assets/Readme_images/Quiz_page.png)

![clicked-answer](assets/Readme_images/quiz_page_clicked_answer.png)

### Finishing Quiz

* When the user has gone through the quiz's 15 different questions, the total score will show and a message of what to do for improvements.
* Above there will be a restart button for the user to click and start game again.

![quiz-end](assets/Readme_images/quiz_done.png)



## Technologies

* HTML
    * The structure of the Website was developed using HTML as the main language.
* CSS
    * The Website was styled using custom CSS in an external file.
* VScode
    * The site was developed with VScode
* GitHub
    * Source code is hosted on GitHub and deployed using Git Pages.
* Git 
    * Used to commit and push code during the development opf the Website
* Font Awesome
    * Icons obtained from https://fontawesome.com/ were used as the Social media links in the footer section. 
* Favicon.io
    * favicon files were created at https://favicon.io/logo-generator/

## Testing

### Responsiveness

All pages have been tested to ensure responsiveness on screen from 320px to 1920px

Steps i went through for testing

1. Open browser and head over to https://oscarbackman92.github.io/CI-PP2-OScar-B-ckman/
2. Open Google devtools (right click inspect)
3. Set dimensions to responsive and width to 320px
4. Zoom 50%
5. Click and drag window edges to max width

Expected outcome:

The site is responsive on all screen sizes. Hero image not being pixelated/blurry
Some horizontal is present and that's the idea.

Result:

As expected. The website is responsive to screen sizes and images is working and elements is not compromised.

Tried the website on and Iphone 13 and Iphone 11 with no issues.

### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used in the later stages of development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused on accessibility everyone

* All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
* That all headings have appropriate and meaningful content
* HTML page lang has been set
* Aria labels been implemented correctly and appropriately
* That there is an alt text to images on the website
* WCAG 2.1 Coding best practices being followed

![wavetest1](assets/Readme_images/Wave_Testing_home_page.png)

![wavetest2](assets/Readme_images/Wave_test_answerd_question_correct.png)

![wavetest3](assets/Readme_images/Wave_test_answerd_question_wrong.png)

![wavetest4](assets/Readme_images/Wave_testing_quiz_done.png)

### Lighthouse Testing

![lighthouse](assets/Readme_images/lighthouse_test_helldivers_240429.png)


### Validator

* HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org)

![index.html-validation](assets/Readme_images/index_Helldivers_Validator_240429.png)

![404 page](assets/Readme_images/404_HTML_Validator_240429.png)


* CSS
  * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![css-validation](assets/Readme_images/CSS_Validator_240429.png)

![js-validation](assets/Readme_images/jshint_Validator_240429.png)

### Functional Testing

| Test                | Steps                                                                                                                        | Expected                                                                                            | Actual |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------ |
| Page load           | Load page (https://oscarbackman92.github.io/CI-PP2-OScar-B-ckman/)                                                           | Loads pages and background/logo/intro and instructions loads with startbutton                       | Pass   |
| Start Game          | Click Start Game                                                                                                             | The game starts and first question is loaded                                                        | Pass   |
| Quiz starts         | Number 1 questions shows                                                                                                     | 1\. Main objective in Helldivers 2? is loaded                                                       | Pass   |
| Select Answer       | Click an answer                                                                                                              | The answer is highlighted green for correct                                                         | Pass   |
| Select Wrong answer | Click a wrong answer                                                                                                         | The incorrect answer is highlighted red together with all incorrect answers and correct being green | Pass   |
| Next question       | Click Next                                                                                                                   | Number 2 question with answers is loaded                                                            | Pass   |
| Score               | Click next when last question is answerd                                                                                     | Shows score and array message                                                                       | Pass   |
| Restart game        | Click restart quiz                                                                                                           | First questions and answers is loaded                                                               | Pass   |
| Hover Testing       | Hover over start/next and restart                                                                                            | Hovering over the buttons should add color #222                                                     | Pass   |
| Footer icon         | Click github icon in footer                                                                                                  | Opens in new tab to [https://github.com/OscarBackman92](https://github.com/OscarBackman92) profile  | Pass   |
| 404 Error page      | Go to url [https://oscarbackman92.github.io/CI-PP2-OScar-B-ckman/1](https://oscarbackman92.github.io/CI-PP2-OScar-B-ckman/1) | Opens up 404 page with message and a return button                                                  | Pass   |

### Version Control

The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘tacos-travels’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

## Deployment

### Deployment to Github Pages

* The site was deployed to GitHub pages. The steps to deploy are as follows: 
  * In the GitHub repository, navigate to the Settings tab 
  * From the menu on left select 'Pages'
  * From the source section drop-down menu, select the Branch: main
  * Click 'Save'
  * A live link will be displayed in a green banner when published successfully. 

The live link can be found here - https://oscarbackman92.github.io/CI-PP2-OScar-B-ckman/index.html

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

* Click on the code drop down button
* Click on HTTPS
* Copy the repository link to the clipboard
* Open your IDE of choice (git must be installed for the next steps)
* Type git clone copied-git-url into the IDE terminal

The project will now of been cloned on your local machine for use.


## Credits

- Jonathan_Zakrisson_Alumnus for debugging and structure tips.
- Daisy_mentor for just being plain awesome and helping me understand!
- Gareth McGirr for mentoring when Daisy is on vacation, really stepping up!
- CI for boilerplate and basic structure.
- Jennifer Hujanen for inspiration to quiz project.
- [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1s)
- Google for information in general


### Content
- Text content was written by [Oscar Bäckman] and ChatGPT.

### Media
- Background image were sourced from [Image Source](https://wall.alphacoders.com/big.php?i=1337068).

### Code
- HTML, CSS and JavaScript code were developed by [Oscar Bäckman] based on design requirements.
- CI for Boilerplate and structure.

### Focus Group
- Feedback and suggestions from focus group participants contributed to the refinement of the website design and features. None other than Oscar Bäckman and Josefine Bäckman.