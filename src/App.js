import './style/app.css'

import IntorElement from './intro'
import ExperienceElement from './experience'
import EducationElement from './education'

function App() {
  return (
    <div id="parent-body">
      <IntorElement />
      <ExperienceElement />
      <EducationElement />
    </div>
  );
}

export default App;
