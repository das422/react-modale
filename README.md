# React Open Modal JS

A lightweight, accessible React modal component with Tailwind CSS styling.

## Features

- 🎯 Simple and lightweight
- ⌨️ Keyboard accessibility (ESC to close)
- 🖱️ Click outside to close
- 🎨 Customizable with Tailwind classes
- 🌟 Clean, modern design
- 📱 Responsive
- 💪 TypeScript support

## Installation

```bash
npm install react-open-modal-js
```

### Peer Dependencies

This package requires React, React DOM, and Tailwind CSS:

```bash
npm install react react-dom tailwindcss
```

### Tailwind CSS Setup

1. Add the package's path to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your other paths
    "./node_modules/react-open-modal-js/**/*.js",
  ],
  // ... rest of your config
}
```

2. Import the styles in your main CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

1. Import both the component and its styles:

```jsx
import { Modal } from 'react-open-modal-js';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        text="This is a modal"
        className="bg-blue-500 text-white" // Optional custom styling
      />
    </div>
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes | The text content to display in the modal |
| isOpen | boolean | Yes | Controls whether the modal is visible |
| onClose | () => void | Yes | Function to call when the modal should close |
| className | string | No | Additional CSS classes for custom styling |

## Styling

The modal comes with a clean, modern design using Tailwind CSS. You can customize its appearance using the `className` prop:

```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  text="Custom styled modal"
  className="bg-purple-600 text-white p-12 rounded-xl"
/>
```

Default styling includes:
- White background
- Rounded corners
- Drop shadow
- Responsive padding
- Semi-transparent backdrop
- Smooth hover transitions

## Features

- Closes on ESC key press
- Closes when clicking outside
- Accessible close button
- Portal-based rendering for proper stacking
- Prevents event bubbling
- Modern, clean design

## License

ISC © Das422

## Contributing

Pull requests are welcome. For major changes, please open an issue first.