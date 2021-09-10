import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import DataTable from 'components/DataTable';
import React from 'react';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';

const Dashboard = () => {
    return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard!</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center color-secondary">Taxa de sucesso (%)</h5>
                <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 className="text-center color-secondary">Todas as vendas</h5>
                <DonutChart />
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-primary">Todas as vendas</h2>
          </div>

            <DataTable />
          
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
