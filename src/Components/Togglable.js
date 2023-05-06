import { useState } from 'react';

export default function Togglable ({ children, buttonLabel }) {
  // UseState
  const [visible, setVisible] = useState(false);

  // Line Styles
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setVisible(true)}>{ buttonLabel }</button>
      </div>

      <div style={showWhenVisible}>
        {children}
        <button onClick={() => setVisible(false)}>Cancel</button>
      </div>
    </div>
  )
}