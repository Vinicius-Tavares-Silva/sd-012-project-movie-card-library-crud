import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path="/movies/new" />
        <Route path="/movies/:id/edit" />
        <Route path="/movies/:id" />
        <Route path="*" />
      </Switch>
    </Router>
  );
}

export default App;
