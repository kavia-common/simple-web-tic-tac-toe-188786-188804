import React from 'react';
import { Button } from '../components';

// PUBLIC_INTERFACE
function ButtonDemo() {
  const handleClick = (label) => () => {
    // eslint-disable-next-line no-alert
    alert(`Clicked: ${label}`);
  };

  return (
    <div style={{ padding: 24, background: '#f9fafb', minHeight: '100vh', color: '#111827' }}>
      <h2 style={{ marginTop: 0 }}>Button Component Demo</h2>
      <div style={{ display: 'grid', gap: 12, maxWidth: 600 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button onClick={handleClick('Primary md')}>Primary md</Button>
          <Button variant="secondary" onClick={handleClick('Secondary md')}>Secondary md</Button>
          <Button variant="success" onClick={handleClick('Success md')}>Success md</Button>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
          <Button variant="secondary" loading>Loading Secondary</Button>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button startIcon={<span aria-hidden="true">🚀</span>}>Start Icon</Button>
          <Button endIcon={<span aria-hidden="true">➡️</span>}>End Icon</Button>
          <Button
            variant="success"
            startIcon={<span aria-hidden="true">✅</span>}
            endIcon={<span aria-hidden="true">✨</span>}
          >
            Both Icons
          </Button>
        </div>

        <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
          <Button fullWidth>Full Width</Button>
          <Button variant="secondary" fullWidth>Full Width Secondary</Button>
        </div>
      </div>
    </div>
  );
}

export default ButtonDemo;
