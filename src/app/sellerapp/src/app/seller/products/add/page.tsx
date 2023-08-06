/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import SellerLayout from "@/components/SellerLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { addProduct } from "@/redux/features/productSlice";
import { useRouter } from "next/navigation";

export default function add() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    color: "",
    price: 0,
    make: "",
    model: "",
    imgUrl: "/samsung.jpg",
    no_items_available: 0,
    user_id: 101,
  });

  const dispatch = useDispatch<AppDispatch>();

  const { products, isError, isLoading, isSuccess, message } = useAppSelector(
    (state) => state.productReducer.data
  );

  //   useEffect(() => {
  //   }, [dispatch]);
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();
    // console.log(formData);
    dispatch(addProduct(formData));
    router.push("/seller/products");
  }

  return (
    <SellerLayout>
      <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
        <div className="row d-flex justify-content-center p-5 ">
          <div className="col-10">
            <form className="form-group text-dark">
              <h3>Add New Product</h3>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Color</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, color: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, price: Number(e.target.value) })
                  }
                />
              </div>
              <div>
                <label>Make</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, make: e.target.value })
                  }
                />
              </div>
              <div>
                <label>Model</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                />
              </div>
              <div>
                <label>No of items available</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      no_items_available: Number(e.target.value),
                    })
                  }
                />
              </div>
              <div className="d-flex justify-content-end mt-2">
                <button
                  className="btn btn-lg btn-outline-success "
                  onClick={(e) => handleSubmit(e)}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SellerLayout>
  );
}
