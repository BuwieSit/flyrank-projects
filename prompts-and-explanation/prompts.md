*Prompts used*

1. Critique my README file and add a section detailing the features of the coffee
  shop. The dev cafe has available wifi, outlets mainly for developers but open to
  general customers. There are available meeting rooms, books about different fields
  in IT and physical games.

2. can you create the application now
3. fix the file structure and fix UI/UX with less cluster and elements (single-prompt branch)
4. only work in dev-cafe folder, delete index.html in the parent folder. then
  continue with the prompt: fix the file structure and fix UI/UX with less cluster and
  elements

5. Please use your explore-plan-code loop to build a 'Add New Coffee Product' form
  component at `src/components/ProductForm.jsx`.

  Follow these strict constraints:
  -  Inputs: Product Name (text), Price (number), Category (select drop-down: Ho
  Coffee, Iced Coffee, Pastry), and Description (textarea).
  - Validation Rules:
     - Name must be between 3 and 30 characters.
     - Price must be a positive number greater than 0.00. Prevent negative inputs.
     - Description must not exceed 150 characters. Show a live character counter.
  - Styling: Use Tailwind CSS for a clean form card layout with clear red error
  text indicators below invalid fields.
  - Behavior: Prevent form submission if fields are invalid. On successful
  submission, call an `onAddProduct` prop callback function with the form data and
  clear the inputs.

  Verification Step:
  First, create a step-by-step plan of what you will build. Once approved, write the
  component code. Finally, verify your implementation by running `npm run build` or
  checking for syntax errors to ensure it integrates safely without breaking the app.

6. yes proceed

