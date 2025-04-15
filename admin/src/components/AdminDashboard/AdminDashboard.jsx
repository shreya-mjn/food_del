import { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { currency, url } from '../../assets/assets';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [paidOrders, setPaidOrders] = useState(0);
  const [pendingPayments, setPendingPayments] = useState(0);

  // Fetch orders and calculate payment stats
  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        const allOrders = response.data.data.reverse(); // Latest orders first
        setOrders(allOrders);

        // Calculate total revenue and payment stats
        const revenue = allOrders.reduce((acc, order) => acc + order.amount, 0);
        const paid = allOrders.filter(order => order.paymentStatus === 'Paid').length;
        const pending = allOrders.filter(order => order.paymentStatus === 'Pending').length;

        setTotalRevenue(revenue);
        setPaidOrders(paid);
        setPendingPayments(pending);
      } else {
        toast.error('Failed to fetch dashboard data');
      }
    } catch (error) {
      toast.error('Error fetching dashboard data');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h3>Admin Dashboard</h3>
      
      {/* Dashboard Summary Section */}
      <div className="dashboard-summary">
        <div className="summary-card-total">
          <h4>Total Revenue</h4>
          <p>{currency}{totalRevenue}</p>
        </div>
        <div className="summary-card-paid">
          <h4>Paid Orders</h4>
          <p>{paidOrders || 5}</p>
        </div>
        <div className="summary-card-pending">
          <h4>Pending Payments</h4>
          <p>{pendingPayments }</p>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="recent-orders">
        <h4>Recent Orders</h4>
        <div className="order-list">
          {orders.slice(0, 5).map((order, index) => (
            <div key={index} className="order-item">
              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Customer:</strong> {order.address.firstName} {order.address.lastName}</p>
              <p><strong>Amount:</strong> {currency}{order.amount}</p>
              <p><strong>Payment Status:</strong> {order.paymentStatus || 'Paid'}</p>
              <p><strong>Order Status:</strong> {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
