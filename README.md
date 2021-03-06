# Kirsty Furey
## _Personal Portfolio_

This website is home to my portfolio and CV.
</br>
It will be used to showcase my Front End Development projects to prospective clients and help to establish my personal brand. Each page will contain links to relevant social media channels: Linkedin, GitHub, Instagram and Facebook.
</br>
The site itself will be written using HTML, CSS and JavaScript and so it's functionality will also serve as part of my portfolio. 
</br>
***So let's hope it works properly!***
</br>
</br>

## UX ##
Having a clean, easy to navigate, accessible and responsive website is essential to showcase my ability and entice prospective clients, therefore all pages have been tested on multiple devices, operating systems, and screen sizes to ensure display integrity, and semantic HMTL has been utilised to ensure accessibility.

## Features ##
**All pages**
- Navigation: Links to all pages, with active class for current page allowing easy navigation across the site.
- KFHW logo links to index on all pages for easy to navigate to home, which is a well recognised feature on a vast number of sites.
- Hamburger menu icon in md-sm screens switches nav items from displaying left to right on larger screens to a hidden pop down list on tap or click.
- Social media links to relevant sites, all set to open in a new tab to ensure the main site remains available to return to easily.
- Footer containing copyright notice for all pages, and on all pages except for index, social links.

**portfolio.html**
- Link to contact page
- Link to download CV, opens in a new tab to ensure the main site remains available to return to easily.
- Portfolio items include image (or video with controls) along side a brief description of the brief for the project. I have set this to change from side by side view on larger screens to image top text bottom on smaller screens as this was more visually impactful. 

**about.html**
- Brief introductory paragraph with image to personalise the site, and set the tone as casual. This is set to resize, re-shape, and move the image from the left to the top of the text on smaller screens for the same reason as above with the portfolio items.
- Link to contact page to encourage connection.
- Link to CV for further about info, more related to employment.

**contact.html**
- Telephone number and email address set up as links to allow user to contact directly by clicking or tapping, text is also live so can be copied and pasted. The order of items is set to re-arrange on smaller viewport sizes for aesthetic reasons - when the tel, email, and location sections are side-by-side on larger viewports the block looks better with location in the centre as it is the only one not linked and thus not underlined. On smaller viewports where this block is amended to a column, it looks better with location at the bottom. This just adds balance to the page on any screen.
- Contact form with fields for name, email, phone number and message - name, email and message fields all required. Form live using Formspree API from *https://formspree.io/*

## Technologies ##

### Version Control ###

#### Git ####
Used as a local repository to regularly add and commit changes before pushing to GitHub.

#### GitHub ####
Used as a remote repository to store website commited changes, and deploy website for testing via GitHub Pages.

### Frameworks ###

#### Bootstrap v4 ####
Used to style Nav and make elements responsive as detailed in 'Syntax' section below
</br>

### Icons ###

#### Font Awesome ####
*https://fontawesome.com/*
</br>
Hamburger menu icon
</br>
*https://fontawesome.com/v5.15/icons/bars?style=solid*

### Fonts ###
index.html background image created using
</br>
*https://www.fontspace.com/king-lounpera-font-f50516*
</br>

### Programs ###

#### Adobe Dreamweaver ####
Used for writing HTML for content, and CSS3 for styling of my website.

#### Adobe Photoshop #### 
Used to create:
- Logo on Nav
- Social media icons in website colours
- index.html 'hello world image'
- Images on portfolio.html
- Image on about.html

#### Formspree ####
Used for Contact page form to allow contact requests to be submitted
*https://formspree.io/* 

#### Record It - Screen Recorder ####
Used to create portfolio.html page digital look book video. (Ideally I would have placed an iframe here which would link to the live site, however, this site is currently not active as the domain had lapsed and the company is not currently looking to re-activate).

## Testing ##

### User Tests ###
I sent out GitHub pages link to friends and family for feedback.
</br>
Overall consensus is that the site is easy to navigate, easy to understand, and is visually pleasing across a range of devices.
</br>
One friend with Dyslexia said she found the orange and white colour combination easier for her to see and read than black on white, as she struggles with high luminance, so the lower contrast works better for her.
</br>
I also had feedback from a friend with colour blindness, who had no difficulty in reading any content at all. 
</br> 
</br>
Users confirmed all links work, and contact form submissions reach me as intended. 

### Bugs and Fixes ###
User tests showed hamburger menu could not be activated on Android devices, but working correctly on Apple devices, including laptop, tablet, and phone. Tracked down issue to using attribute `visibility: hidden` on `.navbar-toggler: focus` which seemed to allow interaction on Apple but not on Android. Bootstrap has this as standard with a thick border, which, stylistically I did not want. Amended CSS to `box-shadow: none;` which solved the issue.
</br>
</br>
index.html, contact.html and about.html were showing white space to bottom of page on many viewport sizes, which setting body to 100vh did not fix. With help from my mentor, Sunny, I added flex display attributes to body elements, main and section elements and divs on pages where appropriate, and set alignment properies and margin. Problem rectified.
</br>
</br>
Initally I attempted to write Nav code from scratch but could not make the hamburger work as required with my limited experience with JavaScript. Re-created the Nav using Bootstrap, and will look to change this once my knowledge improves in all areas.

### Repository Link ###
The site remote repository can be located here:
*https://github.com/KirstyFurey/kirsty-furey-portfolio*

### Website Live View ###
The site can be accessed live via:
*https://kirstyfurey.github.io/kirsty-furey-portfolio/*
</br>
</br>
This will, once completed and signed off, be viewable via my own domain at:
*https://kirstyfurey.com/*
</br>
to ensure it links up with my CV and social media infomation, and to maintain my personal brand. 

### Deployment ###
To host the site on GitHub Pages, I followed the steps below:
1. Loaded Terminal
2. Created a local Git repository for the project using the command `git init` 
3. Added all files to the local repository using the command `git add .`
4. Commited files to the local repository using the command `git commit -m "commit comment"`
5. Create a remote repository on GitHub matching the name of my project
6. Copied the remote repository link and added to the command `git remote add origin (link)` in Terminal
7. Run command `git-remote -v` to ensure remote and local repositories are linked (returns push and fetch messages if they are)
8. Run command `git push origin master`
9. Repeat steps 3, 4, and 8 regularly throughout the project to keep repositories up to date and enable rollback, testing, and updates.
10. Navigated to my project repository on GitHub, then to 'Settings' and 'Pages'
11. Selected the master branch and saved to create the live link via GitHub pages.

### HTML Validation ###
I used *https://validator.w3.org/#validate_by_input* to validate the HTML code on each of my 4 pages.
</br>
This suggested adding h2-h6 elements to identify headings to sections on about.html, contact.html, and portfolio.html. I have chosen to not follow this advice as it will not fit with the overall look I have gone for on my site. Heading tags have been used where appropriate for the content, and sections have been semantically marked up, so I do not feel this is a necessary addition, and would require unnecessary CSS styling to undo the inherant styling associated with heading tags.
</br>
This also showed issue with the 'downlaod CV' button on about.html. I had initially set this up as a button with an `<a>` attribute, but this was marked as not allowed in HTML, so I switched this to a `form` element with an action to open the file in a new tab.

### CSS Validation ###
I used *https://jigsaw.w3.org/css-validator/#validate_by_input* to validate my CSS.
</br>
This did return errors on my `text-underline-offset` and `text-decoration-thickness` properties, saying they do not exist. However, I have tested this on multiple devices and browsers and both appear as intended, so I have chosen to not amend these.

### Accessibility Validation ###
I used *https://webaim.org/resources/contrastchecker/* to check the contrast of text on my site. My main site colours are:
</br>

- \#ffffff (White) - used as main page background colour on all pages except for index.html and as a text colour on header, footer, contact form, and index.html page.
- \#000000 (Black) - text colour on all main content on all pages excpet for the contact form and index.html.
- \#ffa66f (Light Salmon) - my primary branding colour, used as background on nav, footer, contact form container, button, and index.html page.
- \#e97730 (Vivid Tangelo) - secondary brandng colour, used on hovers, active links, nav logo, and contact form fields.

To pass this test, colours need to have a contrast ratio of 4.5\:1 for normal text, and 3\:1 for large text.
</br>
The most common colour combinations on site are: 
</br>

- #000000 and #ffffff - this passes with a ratio of 21:1
- #ffa66f and #ffffff - this fails the check with a ratio of 1.92:1.

## Future Implementation ##
#### Accessibility ####
As my choice of colour does not pass contrast checks for accessibility, I will look to amend this in future. This is not of immediate concern as most content is black on white, and the site as a whole is written using semantic HMTL and so is accessible for screen readers, and feedback from testing has suggested that this colour combination does read well with dyslexic and colour blind audiences.
I will carry out more research on colour cominations as I do not wish to amend the clours based solely on the contrast check that then make the site inaccessible to others, such as those with Dyslexia or colour blindless. I will find a solution that meets the needs of as many groups as possible, while still maintaining the aesthetic I have strived to build. 
</br>
#### Contact Form ####
Once I have completed the next stage of my course, which focusses on JavaScript I will look to move the functionality of the contact form away from Formspree.
</br>
#### Nav ####
Once I have some knowledge on Javascript I will amend my Nav away from reliance on Bootstrap so that I have experience and knowledge of how to write this from scratch.

## Attribution ##

### Support ###
My thanks and appreciation to my mentor - Sunny Hebbar, for help with issues with index.html viewport height issues, with getting this project ready to go, with tweaks and changes, suggestions for improvements, and for saving me a lot of stress by helping me with git - especially that time I managed to duplicate my repository and delete all my commits from GitHub!

### Syntax ###

#### CSS Tricks ###
How to use Flexbox
</br>
*https://css-tricks.com/snippets/css/a-guide-to-flexbox/*
</br>
Flexbox order properties:
</br>
*https://css-tricks.com/snippets/css/a-guide-to-flexbox*
</br>
#### W3 Schools ####
General usages of attributes and their meanings
</br>
*https://www.w3schools.com/*
</br>
</br>
Nav bar styling methods from
</br>
*https://www.w3schools.com/css/css_navbar_horizontal.asp*
</br>
</br>
Media query snytax
</br>
*https://www.w3schools.com/css/css_rwd_mediaqueries.asp*
</br>
</br>
About page image & text centre and align
</br>
*https://www.w3docs.com/snippets/css/how-to-vertically-align-text-next-to-an-image.html*
</br>
</br>
Selector for changing placeholder text color
</br>
*https://www.w3schools.com/howto/howto_css_placeholder.asp*
</br>
#### Bootstrap ####
Nav bar responsive code from
</br>
*https://getbootstrap.com/docs/5.0/components/navbar*
</br>
#### Stack Overflow ####
Bootstrap classes needed to change divs from side by side to stacked on mobile
</br>
*https://stackoverflow.com/questions/33260188/how-can-i-move-a-div-from-top-to-bottom-on-mobile-layouts*
</br>
</br>
Change spacing between text and text underline
</br>
*https://stackoverflow.com/questions/1734618/how-to-increase-the-gap-between-text-and-underlining-in-css*
</br>
</br>
Syntax for responsive image scaling via stack overflow:
</br>
*https://stackoverflow.com/questions/24190830/bootstrap-responsive-img-but-change-image-height-and-width/24191011*
</br>
#### Free Code Camp ####
To centre the text over the image on index page: 
</br>
*https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more*
</br>
