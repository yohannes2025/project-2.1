# Scientific Calculator Application

## Contents
- [Scientific Calculator Application](#scientific-calculator-application)
- [Contents](#contents)
- [User Experience (UX)](#user-experience-ux)
  - [Initial Discussion](#initial-discussion)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
  - [Wireframes](#wireframes)
  - [Features](#features)
  - [Accessibility](#accessibility)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Deployment & Local Development](#deployment--local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)
- [Testing](#testing)
  - [W3C Validator](#w3c-validator)
  - [Solved Bugs](#solved-bugs)
  - [Known Bugs](#known-bugs)
  - [Testing User Stories](#testing-user-stories)
  - [Lighthouse](#lighthouse)
  - [Index Page](#index-page)
  - [Books Page](#books-page)
  - [Contact Us Page](#contact-us-page)
  - [Thank You Page](#thank-you-page)
  - [Full Testing](#full-testing)
- [Credits](#credits)
  - [Code Used](#code-used)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgments](#acknowledgments)

## User Experience (UX)

### Initial Discussion
The primary goal of the Scientific Calculator application is to provide users with a powerful and user-friendly tool for performing advanced mathematical operations. The application is designed to be intuitive and accessible, ensuring that both casual users and professionals can benefit from its features.

### User Stories
1. **As a student**, I want to perform various mathematical operations, so that I can complete my homework efficiently.
2. **As a teacher**, I want to demonstrate complex calculations to my students, so that they can understand mathematical concepts better.
3. **As a researcher**, I want to perform accurate scientific calculations, so that I can validate my research findings.
4. **As a developer**, I want to use a calculator with keyboard support, so that I can quickly perform operations without using a mouse.

## Design

### Colour Scheme
The colour scheme for the Scientific Calculator application is chosen to be visually appealing and to provide high contrast for readability. The primary colours used are:
- **Background**: Light grey
- **Buttons**: Dark grey and blue for operations
- **Display**: White with black text

### Typography
The application uses a clean and modern font for all text elements to ensure readability. The primary font used is `Arial`, with `Helvetica` and `sans-serif` as fallbacks.

### Imagery
Imagery is kept to a minimum to maintain a clean and uncluttered interface. Icons are used for memory functions and angle mode toggles.

### Wireframes
Wireframes were created to outline the basic layout and functionality of the application. These include the arrangement of buttons, display, and additional features like memory functions and angle mode.

### Features
- **Arithmetic Operations**: Addition, subtraction, multiplication, division, and percentage calculations.
- **Trigonometric Functions**: sin, cos, tan (calculates in degrees or radians).
- **Logarithmic Functions**: ln (natural logarithm) and log (base-10 logarithm).
- **Exponential and Power Operations**: Includes exponentiation (x^y) and square roots.
- **Constants**: Includes π and Euler's constant e.
- **Factorial Calculation**: Computes factorial for non-negative integers.
- **Random Number Generator**: Generates a random number between 0 and 1.
- **Memory Functions**: M+, M-, MR, MC.
- **Angle Mode Selection**: Toggle between degrees and radians.
- **Input Flexibility**: Button clicks and keyboard input.
- **Error Handling**: Displays appropriate error messages for invalid inputs or operations.

### Accessibility
The application is designed to be accessible to all users, including those with disabilities. Features include:
- High contrast colour scheme for readability.
- Keyboard support for all operations.
- Clear error messages for invalid inputs.
- Screen reader compatibility.

## Technologies Used

### Languages Used
- HTML
- CSS
- JavaScript

### Frameworks, Libraries & Programs Used
- [Bootstrap](https://getbootstrap.com/): For responsive design and styling.
- [math.js](https://mathjs.org/): For evaluating mathematical expressions safely.

## Deployment & Local Development

### Deployment
The application can be deployed on any web server. Simply upload the project files to the server, and it will be accessible via a web browser.

### Local Development

#### How to Fork
1. Log in to GitHub and navigate to the repository.
2. Click the "Fork" button in the top right corner.
3. The repository will be forked to your account.

#### How to Clone
1. Navigate to your forked repository on GitHub.
2. Click the "Code" button and copy the repository URL.
3. Open your terminal and run:
    ```bash
    git clone <repository-url>
    ```
4. Navigate to the project directory:
    ```bash
    cd scientific-calculator
    ```
5. Open the `index.html` file in your browser to use the calculator.

## Testing

### W3C Validator
The HTML and CSS files were validated using the W3C Markup Validator and CSS Validator to ensure there are no syntax errors.

### Solved Bugs
- Fixed issue with negative numbers in factorial calculations.
- Resolved keyboard input conflicts.
- Corrected error message display for invalid operations.

### Known Bugs
- Occasional lag when performing multiple complex operations rapidly.
- The keyboard input does not always reset after an error message is displayed.

### Testing User Stories
1. **Student**: Successfully performed various mathematical operations.
2. **Teacher**: Demonstrated complex calculations without issues.
3. **Researcher**: Validated research findings with accurate calculations.
4. **Developer**: Used keyboard support for quick operations.

### Lighthouse
Lighthouse tests were conducted to ensure the application meets performance, accessibility, and best practices standards.

### Index Page
The index page provides an overview of the calculator's functionality and features, allowing users to quickly understand what the application offers.

### Books Page
A hypothetical books page lists recommended books for learning advanced mathematics, integrating relevant links and descriptions.

### Contact Us Page
The contact page includes information on how to get in touch with the site administrators, providing users with a means to ask questions or provide feedback.

### Thank You Page
The thank you page acknowledges the support and contributions of all those involved in the project, including developers, testers, and users.

### Full Testing
A comprehensive testing plan was executed, covering all features and functionalities of the application. This included unit tests for individual functions and integration tests for overall user experience.

## Credits

### Code Used
- Utilized [math.js](https://mathjs.org/) for mathematical expression evaluation.

### Content
- The content and design elements were created by the development team.

### Media
- Icons used are sourced from [FontAwesome](https://fontawesome.com/).

### Acknowledgments
- Thanks to the open-source community for providing valuable resources and libraries.
