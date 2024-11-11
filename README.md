# React Open Modal JS

A lightweight, customizable React modal component with Tailwind CSS.

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
        backgroundColor="#157846"
        textColor="#fff"
        iconColor="#fff"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | required | Modal content |
| isOpen | boolean | required | Controls visibility |
| onClose | function | required | Close handler |
| textColor | string | "#fff" | Text color |
| backgroundColor | string | "#157846" | Background color |
| iconColor | string | "#000" | Close icon color |

## License

ISC © Das422

## Contributing

Pull requests are welcome. For major changes, please open an issue first.