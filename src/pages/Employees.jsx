import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Page, Search, Inject } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
// import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-2 bg-white rounded-3xl">
      <Header title="Employees" category="page" />
      <GridComponent width="auto" dataSource={employeesData} allowPaging allowMultiSorting allowSorting toolbar={['Search']}>
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
