# Project Todo List Convention Guide

## Styling

### Colors

- **Primary Color :**

    - Midnight Blue : `##171738`
    - Dark Slate Blue : `##2C2C4A`
    - Light Gray : `#D9D9D9`

<br>

- **Secondary Color :**
    - Aqua Haze : `#8EF9F3`
    - Kelly Green: `#00A642`
    - Cinnabar Red : `#D33636`


### Screen display

- Mobile screen : `375px`
- Desktop screen : `1440px`

<br>

### Typography

- Font family : [`IBM Plex Mono`](https://fonts.google.com/specimen/IBM+Plex+Mono)
- Font weight : `400, 500, 700`
- Font size :

    - font size 1 : `12px - 14px`
    - font size 2 : `16px`
    - title : `24px - 48px`

<br>

- No inline CSS

## Icons

- [`react-icons.github.io`](https://react-icons.github.io/react-icons)

<br>
<br>

# Linting

Use a linting tool like ESLint to enforce coding standards and catch common errors in your code. ESLint can be configured with rules to ensure consistent formatting, code style, and best practices.

<br>
<br>

# Installation
Clone the repository:
```bash 
    git clone https://github.com/(username)/(repository-name).git
```
Navigate to the project directory:


```bash 
    cd todo-list-vite-react
```
Install the dependencies:


```bash 
    npm install
```

# Usage
Start the development server:

``` bash
    npm run dev
```
This command will start the development server and open the application in your default browser. You can access it at http://localhost:3000.

<br>
<br>

# Features/Minimum requirement 
- Add new tasks with a title and optional description.
- Edit existing tasks to modify their details.
- Mark tasks as completed or uncompleted.
- Delete unwanted or old tasks.
- Filter tasks based on their completion status.
- Responsive design for seamless usage on various devices.
- Save Tasks to local storage.


<br>
<br>

# Commenting Rules

Ensure that the comments are meaningful and provide context where necessary, especially for complex logic or components.. In JavaScript and JSX, use single-line and multi-line comments:

```javascript
// Single-line comment

{
    /*
        jsx comment
    */
}

/*
    Multi-line comment
    explaining the purpose
    of the code.
*/
```

<br>
<br>

# Folder Structure

```bash
	my-react-app/
	|-- doc
	| |-- convention.md
	| |
	|-- public/
	|
	|-- src/
	|   |-- assets/
	|   |-- components/
	|   |   |-- ListItem.jsx
	|   |   |-- Form.jsx
	|   |
	|   |-- styles/
	|   |   |-- main.css
	|   |   |-- App.css
	|   |   |-- ListItem.css
	|   |   |-- Form.css
	|   |
	|   |-- App.jsx
	|   |-- main.jsx
	|
	|-- .eslintrc.cjs
	|-- .gitignore
	|-- package.json
	|-- README.md
```

- `document` : Contains project's documentation `convention.md`
- `public` : Contains static assets: index.html, favicon.
- `src` : Contains the main source code for your application. It contains the root component `main.jsx`, `main.css`, and other folders.
- `assets` : Contains images.
- `components` : folder contains all react components.
- `styles` : folder container all react components's css.

<br>
<br>

# React code conventions

## Naming for Components and Files

Ensure that the component name matches the css file name.

```bash
	components/
	|-- components/
	|	|-- App.jsx
	|	|-- ListItem.jsx
	|
	|-- style/
	|	|-- App.css
	|	|-- ListItem.css
```

<br>

## DRY (Don't Repeat Yourself) Principle

Look for opportunities to reuse code by extracting common functionality into utility functions or higher-order components.

<br>

## Naming conventions

**Use PascalCase in components**

```JavaScript
	function Form() {
		// ...
	}
```

**Use camelCase for JavaScript data types like variables, arrays, objects, etc.**

```JavaScript
	function handleAddList {
		// ...
	}

	const initialList = [...]
```

## Component structure

```JavaScript
// 1. Imports - Prefer destructuring imports to minimize writen code
import { useState, useEffect } from "react";

// 2. Additional variables
const constantValue = "example";
let calcTasks = 2;

// 3. Component
function Component({ someProperty }) {
	// 3.1 Definitions
	const [state, setState] = useState(true);

	// 3.2 Functions
	function handleToggleState() {
		setState(!state);
	}

	// 3.3 Effects
	useEffect(() => {
		// ...
	}, []);

	return (
		<div>
			<Tasks />

			<div>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
					arcu. Et harum quidem rerum facilis est et expedita distinctio.
				</p>
				<button>Add</button>
			</div>
		</div>


	);
}

// 6. Exports
export default Component;
```

<br>

## Separate function from the JSX if it takes more than 1 line

```JavaScript
	<button onClick={() => setState(!state)} />

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
	<DisplayTask onToggleTask={handleToggleTask} />
```

<br>

## Prefer destructuring properties

Prefer destructuring properties so it is clear what properties are used in the component.

```js
// Avoid
function Button(props) {
	return <button>{props.text}</button>;
}

// ✅
function Button({ text }) {
	return <button>{text}</button>;
}
```

## Avoid huge components

Avoiding huge components and shortening them into smaller, focused components in lists improves code readability, maintainability, reusability, and collaboration.

<br>

## Use shorthand for boolean props

```JavaScript
// ❌
    <Form hasPadding={true} withError={true} />

// ✅
    <Form hasPadding withError />
```

<br>

## Avoid using inline styles

Avoiding inline styles in favor of external CSS enhances maintainability, reusability, performance, and separation of concerns in web applications.

<br>

## Prefer conditional rendering with ternary operator

```JavaScript
<button onClick={toggleIncomplete}>
	{showIncompleteTask
		? "Hide Incomplete Tasks"
		: "Show Incomplete Tasks"}
</button>
```

<br>

## Use descriptive variable names

```JavaScript
// ❌ single letter and meaningless variables
const c = false;
// ✅
const completed = false;

// ❌ abbreviations
const et = "go to school";
// ✅
const editedTitle = "go to school";

```

<br>


## Use object destructuring

```JavaScript
// ❌
return (
	<>
		<div> {task.id} </div>
		<div> {task.title} </div>
	</>
);

// ✅
const { id, title } = task;

return (
	<>
		<div> {id} </div>
		<div> {title} </div>
	</>
);
```

<br>

## Using template literals

```js
// ❌
const showTask = task.id + " : " + task.title

// ✅
const showTask = `${task.id} : ${task.title}`;
```

<br>
<br>

# Git / Github Convention

## Git Branch Strategy

- Git Branch Strategy Convention
- Use the Git Flow branching strategy for managing code changes.
- Create branches with clear names that reflect the purpose of the work.
- Common branch types:
    - `main`: Represents the production-ready codebase.
    - `develop`: Integration branch for ongoing development.
    - `feature/<feature-name>`: For developing new features.
    - `bugfix/<bug-description>`: For fixing bugs.
    - `hotfix/<issue-description>`: For critical fixes in production.
    - `release/<version>`: Preparing a release version.

<br>

## Commit Message Convention

- `feat`: New feature or enhancement.
- `fix`: Bug fix.
- `docs`: Documentation updates.
- `style`: Code style changes (e.g., formatting).
- `refactor`: Code changes that aren't bug fixes or features.
- `test`: Adding or modifying tests.
- `chore`: Maintenance tasks, build changes, etc.

## Use Semantic Versioning (SemVer) Tag

- Follow Semantic Versioning guidelines for version numbering.
- Versions are of the form `MAJOR.MINOR.PATCH`.
- Increment the version as follows:
  - `MAJOR`: Significant changes, breaking backward compatibility.
  - `MINOR`: New features, backward-compatible.
  - `PATCH`: Bug fixes, backward-compatible.
  - Example: `1.0.0` -> `1.1.0` -> `1.1.1`