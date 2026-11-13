# KeDA Tech ERP Landing Page (Test Assignment)

## Tech Stack & Why I Chose Them

| Technology                | Reason                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **React 19**              | To build reusable, component-based UI with efficient rendering and maintainable code.                                     |
| **Vite**                  | To provide a fast development server, Hot Module Replacement (HMR), and optimized production builds.                      |
| **JavaScript (ES6+)**     | To implement application logic using modern JavaScript features.                                                          |
| **SCSS (Sass)**           | To organize styling with variables, nesting, and reusable styles for better maintainability.                              |
| **BEM Methodology**       | To maintain consistent CSS naming conventions and prevent styling conflicts between components.                           |
| **Zustand**               | To manage lightweight global state, particularly the login and registration modal, without unnecessary boilerplate.       |
| **React Context API**     | To encapsulate component-specific state and business logic while keeping UI components focused on presentation.           |
| **Vitest**                | To perform fast unit testing with seamless Vite integration.                                                              |
| **React Testing Library** | To test React components based on user interactions and observable behavior.                                              |
| **Playwright**            | To perform end-to-end testing across Chromium, Firefox, and WebKit (Safari engine), ensuring cross-browser compatibility. |

### Architecture Approach

I implemented a **component-based architecture with separation of concerns**, organizing UI presentation, component logic, global state, and styling into dedicated files. This approach improves code readability, reusability, testability, and long-term maintainability.
