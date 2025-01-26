import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import TeachersMore from '../../pages/Dashboard/ProfilePages/TeachersMore';
import { dashboardRouteList } from '../../hooks/useRoute';

const DashboardRouter = () => {
  return (
    <Routes>
      {dashboardRouteList.map(item => (
        item.children.length > 0 ? (
          <Route key={item.id} path={item.path} element={item.element}>
            <Route index element={<Navigate to={`${item.children[0].path}`} />} />
            {item.children.map(item2 => (
              <Route key={item2.id} path={item2.path} element={item2.element} />
            ))}
          </Route>
        ) : (
          <Route key={item.id} path={item.path} element={item.element} />
        )
      ))}
      <Route path="/teachers/more/:id" element={<TeachersMore />} />
    </Routes>
  );
};

export default DashboardRouter;
