import '@testing-library/jest-dom/vitest';

// jsdom no implementa scrollIntoView (lo usa el auto-scroll del chat).
// Lo dejamos como no-op para que los componentes se puedan renderizar en tests.
Element.prototype.scrollIntoView = () => {};
