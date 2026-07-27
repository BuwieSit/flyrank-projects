1. AI Assistance 
The AI acted as a high-velocity co-pilot, scaffolding the project structure and translating layout goals into clean Tailwind CSS grids. It was especially effective at converting strict validation logic—like price caps and character limits—into working form logic, drastically reducing initial development time.

2. Manual Corrections & Refactoring
- Manually removed an orphaned index.html file after the AI placed it in the wrong parent root folder instead of the dev-cafe/ directory.

- Refactored the AI's isolated form state by lifting it to the parent component, allowing newly added coffee products to actually sync and render inside the main showcase grid.

- Fixed broken relative import paths (../components/ vs ./components/) manually after the AI shifted files around during its layout restructuring.