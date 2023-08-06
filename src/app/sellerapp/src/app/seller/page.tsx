import SellerLayout from "@/components/SellerLayout";
import Link from "next/link";

export default function seller() {
  return (
    <SellerLayout>
      <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
        <div className="row d-flex justify-content-center p-5 ">
          <div className="container">
            <h1>Seller Dashboard</h1>
            <div className="row">
              <div className="col-md-4 ">
                <div className="card bg-dark text-light">
                  <div className="card-body">
                    <h5 className="card-title">Orders</h5>
                    <p className="card-text">Manage your orders.</p>
                    <Link href="/seller/orders" className="btn btn-primary">
                      <button className="btn btn-primary">View Orders</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light">
                  <div className="card-body">
                    <h5 className="card-title">Products</h5>
                    <p className="card-text">Manage your products.</p>
                    <Link href="seller/products" className="btn btn-primary">
                      <button className="btn btn-primary">View Products</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-dark text-light">
                  <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">Mange your details</p>
                    <Link href="seller/profile" className="btn btn-primary">
                      <button className="btn btn-primary">View Profile</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SellerLayout>
  );
}
