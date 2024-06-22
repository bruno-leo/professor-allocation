import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
import Allocation from './pages/allocation';
import Course from './pages/course';
import Department from './pages/department';
import Professor from './pages/professor';

import Page from './components/page';
import ProfessorForm from './pages/professor/professorForm';
import DepartmentForm from './pages/department/departmentForm';
import CourseForm from './pages/course/courseForm';
import AllocationForm from './pages/allocation/allocationForm';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={              
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path='/' element={<Home />} />

          <Route path='/allocations'>
            <Route index element={<Allocation />} />
            <Route path='create' element={<AllocationForm />} />
            <Route path=':id/update' element={<AllocationForm />} />
          </Route>
          
          <Route path='/courses'>
            <Route index element={<Course />} />
            <Route path='create' element={<CourseForm />} />
            <Route path=':id/update' element={<CourseForm />} />
          </Route>
          
          <Route path='/departments'>
            <Route index element={<Department />} />
            <Route path='create' element={<DepartmentForm />} />
            <Route path=':id/update' element={<DepartmentForm />} />
          </Route>
          
          <Route path='/professors'>
            <Route index element={<Professor />} />
            <Route path='create' element={<ProfessorForm />} />
            <Route path=':id/update' element={<ProfessorForm />} />
          </Route>

          <Route
            path='*'
            element={<Page title='404...'>Page not found</Page>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
