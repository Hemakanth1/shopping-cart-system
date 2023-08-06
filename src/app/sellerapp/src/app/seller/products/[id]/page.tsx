/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";
import SellerLayout from "@/components/SellerLayout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  deleteProduct,
  updateProduct,
  getProductById,
} from "@/redux/features/productSlice";
import { useRouter } from "next/navigation";

export default function singleOrder({ params }: { params: { id: number } }) {
  const dispatch = useDispatch<AppDispatch>();

  const { products, fetchedProduct, isError, isLoading, isSuccess, message } =
    useAppSelector((state) => state.productReducer.data);

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    category: "",
    description: "",
    color: "",
    price: 0,
    make: "",
    model: "",
    imgUrl: "",
    no_items_available: 0,
    user_id: 0,
  });

  const router = useRouter();

  useEffect(() => {
    dispatch(getProductById(params.id));
  }, [dispatch]);

  useEffect(() => {
    setFormData(fetchedProduct);
  }, [fetchedProduct]);

  function deleteItem(id: any) {
    dispatch(deleteProduct(id));
    router.push("/seller/products");
  }

  function updateItem(productData: any) {
    dispatch(updateProduct(productData));
    // router.replace(`/seller/products/${params.id}`);
    router.refresh();
  }
  return (
    <SellerLayout>
      <div className="col-md-9 col-lg-10" style={{ backgroundColor: "#fff" }}>
        {formData ? (
          <div className="row d-flex text-dark justify-content-center p-5 ">
            <div className="col-4">
              <Image
                src="/samsung.jpg"
                width={300}
                height={300}
                alt="ProductImage"
              />
            </div>
            <div className="col-8">
              <form className="form-group text-dark">
                <h3>Product Details</h3>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
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
                    value={formData.category}
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
                    value={formData.description}
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
                    value={formData.color}
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
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        price: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div>
                  <label>Make</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.make}
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
                    value={formData.model}
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
                    value={formData.no_items_available}
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
                    className="btn btn-outline-warning m-3 "
                    onClick={(e) => {
                      e.preventDefault();
                      updateItem(formData);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="my-3 btn btn-outline-danger "
                    onClick={(e) => {
                      e.preventDefault();
                      deleteItem(params.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </SellerLayout>
  );
}
