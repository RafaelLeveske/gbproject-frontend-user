import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import NewProfessor from './pages/NewProfessor';
import NewStudent from './pages/NewStudent';
import ProfessorProfile from './pages/ProfessorProfile';
import StudentProfile from './pages/StudentProfile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/professor/new" component={NewProfessor} />
        <Route path="/student/new" component={NewStudent} />
        <Route path="/profile/professor" component={ProfessorProfile} />
        <Route path="/profile/student" component={StudentProfile} />
      </Switch>
    </BrowserRouter>
  );
}
