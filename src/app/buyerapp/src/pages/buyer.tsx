import { Link } from "react-router-dom";
import BuyerLayout from "../components/BuyerLayout";
import RootLayout from "../components/RootLayout";

export default function buyer() {
  return (
    <RootLayout>
      <BuyerLayout>
        <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
          <div className="row d-flex justify-content-center p-5 ">
            <div className="container">
              <h1>Buyer Dashboard</h1>
              <div className="row">
                <div className="col-md-4 ">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h5 className="card-title">Orders</h5>
                      <p className="card-text">My Orders</p>
                      <Link to="/buyer/orders" className="btn btn-primary">
                        <button className="btn btn-primary">View Orders</button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h5 className="card-title">Cart</h5>
                      <p className="card-text">My Cart</p>
                      <Link to="/buyer/cart" className="btn btn-primary">
                        <button className="btn btn-primary">
                          View Products
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h5 className="card-title">Profile</h5>
                      <p className="card-text">Mange your details</p>
                      <Link to="/buyer/profile" className="btn btn-primary">
                        <button className="btn btn-primary">
                          View Profile
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BuyerLayout>
    </RootLayout>
  );
}
