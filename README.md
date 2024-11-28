# Timeline Challenge

## Features
- Compact timeline layout.
- Interactive zooming.
- Inline editing.

## Time Spent
~4 hours

## What I Like About My Implementation

1. Readability and Maintainability:
   - The code is broken down into clear, reusable functions like `getDateRange`, `getGridRange`.
   - I used state effectively to manage the events and user interactions.

2. Compact and Adaptable Layout:
   - I used CSS Grid for a clean and responsive design, making it easier to add features like date headers and aligning events visually.

## Improvements
- Improve responsiveness for long event names.
- Improve design and responsive design.
- Improve zoom functionality.
- Add automated tests.
- Move the date-row and lanes into different components.

## Design Decisions
- I chose CSS Grid because it provides a simple and powerful way to align events and dates without relying on absolute positioning, making the layout adaptive and maintainable.

- Inspired by Gantt charts and compact calendar views.

## How I Would Test This If I Had More Time

1. Manual Testing:
   - Test edge cases. For example:
     - Events spanning multiple months or years.
     - Events with the same start and end dates.

2. Automated Testing:
   - Unit Tests:
     - Verify `getDateRange` returns the correct range for various date inputs.
   - Integration Tests:
     - Ensure overlapping events are displayed in separate lanes.

4. User Experience Testing:
   - Gather feedback from users to improve design, responsiveness and event interactions.

## Instructions
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to view the application.

## Contact

For any questions or inquiries, please feel free to contact:

- **Name**: Gonzalo Rochlin
- **Email**: gonzarochlin@gmail.com
- **LinkedIn**: [Gonzalo Rochlin](https://www.linkedin.com/in/gonzalo-rochlin/)

Thank you!