import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const Orders = () => {
  const [data, setData] = useState(1);
  const [data2, setData2] = useState({});

  // let query = new Query.addParams('sort', 'orderID');
  function Bound(e) {
    var pager = document.getElementsByClassName('e-gridpager')[0].ej2_instances[0];

    var old = pager.click;
    pager.click = function (args) {
      old.call(this, args);
      console.log(args, 'aaaaaaaaaaaaaaaa');
      // args.cancel = true;
    };
  }
  function begin(e) {
    console.log(e, 'aaaaaaaaaaaaaaa');
    var pager = document.getElementsByClassName('e-sortnumber');
    console.log(pager, 'bbbbbbbbbbbbbbbbbb');
    if (e.requestType === 'paging') {
      console.log(e);
      setData(Number(e.currentPage));
      // e.cancel = true;
      console.log(data2.dataSource);
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="m-2 md:m-10 p-2 md:p-2 bg-white rounded-3xl">
      <Header title="Orders" category="page" />
      <GridComponent
        ref={(i) => {
          console.log(i);
          setData2(i);
        }}
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowMultiSorting
        allowSorting
        dataBound={Bound}
        actionBegin={begin}
        actionComplete={begin}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
