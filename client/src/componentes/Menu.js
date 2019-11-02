import React from 'react';

const menu = () => {
  return (
    <nav className="nav-extended fixed bottom">
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab"><a href="#test1">Test 1</a></li>
          <li className="tab"><a className="active" href="#test2">Test 2</a></li>
          <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
          <li className="tab"><a href="#test4">Test 4</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default menu;