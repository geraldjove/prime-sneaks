import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { NavLink } from "react-router-dom";

const AddNewProductComponent = () => {
  const { addProduct } = useContext(UserContext);

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [size, setSize] = useState([]);
  const [addSize, setAddSize] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [color, setColor] = useState([]);
  const [addColor, setAddColor] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectStatus, setSelectStatus] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isSale, setIsSale] = useState(false);
  const [saleDiscount, setSaleDiscount] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageToggle, setImageToggle] = useState(false);

  useEffect(() => {
    console.log(selectedRating);
    setRating(selectedRating);

    if (selectStatus === "true") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    if (image === null) {
      setImageToggle(false);
    } else {
      setImageToggle(true);
    }
  }, [selectedRating, imageUrl]);

  console.log(selectStatus);

  const applyDiscountPrice = (e) => {
    e.preventDefault();
    if (saleDiscount > 0) {
      setDiscountedPrice(price - price * (saleDiscount / 100));
      setIsSale(true);
    } else if (saleDiscount == 0) {
      setDiscountedPrice(price);
    } else {
      setIsSale(false);
    }
  };

  const removeSize = (e) => {
    e.preventDefault();
    const updatedSizeList = size.filter((s) => s !== Number(selectedSize));

    setSize(updatedSizeList);
  };

  const removeColor = (e) => {
    e.preventDefault();
    const updateColorList = color.filter((c) => c !== selectedColor);
    setColor(updateColorList);
  };

  const onChangePicture = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      console.log("Error");
    }
  };

  const addSizeToList = (e) => {
    e.preventDefault();
    if (addSize) {
      setSize([...size, Number(addSize)]);
      console.log(size);
      setAddSize("");
    }
  };

  const addColorToList = (e) => {
    e.preventDefault();
    if (addColor) {
      setColor([...color, addColor]);
      setAddColor("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(discountedPrice);
    const product = {
      image,
      imageUrl,
      name,
      description,
      rating,
      price,
      discountedPrice,
      size,
      color,
      isActive: selectStatus,
      isSale,
    };
    console.log(product);
    addProduct(product);
  };

  console.log(selectStatus);

  return (
    <div className="flex justify-center items-center">
      <div className="sm:container bg-white p-6 space-y-4 md:space-y-6 sm:p-8 rounded-md">
        <h1 className="text-black font-black text-3xl">Add New Product</h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="grid sm:grid-cols-[50%_50%] gap-3"
        >
          <div className="border p-5 rounded-md">
            <div>
              <label className="block">Upload Image</label>
              <input
                type="file"
                className="bg-gray-200 rounded-md w-full"
                onChange={onChangePicture}
              />
            </div>
            <div>
              <label>URL Image</label>
              <input
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
                type="text"
                className="bg-gray-200 rounded-md w-full p-1"
                placeholder="place image url here"
              />
            </div>
            {imageToggle ? (
              <div>
                <img src={URL.createObjectURL(image)} className="max-w-full" />
              </div>
            ) : (
              <div>
                <img src={imageUrl} className="max-w-full" />
              </div>
            )}
          </div>
          <div className="space-y-5 flex flex-col justify-center bg-gray-200 p-5 rounded-lg">
            <div>
              <label className="block">Name</label>
              <input
                type="text"
                className="bg-white rounded-md w-full p-2"
                value={name}
                placeholder="Shoe Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block">Description</label>
              <textarea
                className="bg-white rounded-md w-full p-2"
                value={description}
                placeholder="Shoe Description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block">Rating</label>
                <select
                  className="bg-white rounded-md w-full p-2"
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                >
                  {[...Array(6)].map((_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <div>
                  <label className="block">Price</label>
                  <input
                    type="text"
                    className="bg-white rounded-md w-full p-2"
                    value={price}
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">Discounted Price</label>
                  <input
                    type="text"
                    className="bg-white rounded-md w-full p-2"
                    value={discountedPrice}
                    onChange={(e) => setDiscountedPrice(e.target.event)}
                  />
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label>Size: </label>
                <input
                  value={addSize}
                  onChange={(e) => setAddSize(e.target.value)}
                  type="text"
                  className="bg-white rounded-md w-full p-2"
                  placeholder="0"
                />
                <select
                  className="bg-white rounded-md w-full p-2"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="">Select Size</option>
                  {size.map((s, index) => (
                    <option key={index} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={addSizeToList}
                    className="bg-blue-500 p-2 rounded-md text-white"
                  >
                    Add Size
                  </button>
                  <button
                    onClick={removeSize}
                    className="bg-red-500 p-2 rounded-md text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label>Color: </label>
                <input
                  type="text"
                  value={addColor}
                  onChange={(e) => setAddColor(e.target.value)}
                  className="bg-white rounded-md w-full p-2"
                  placeholder="Shoe Color"
                />
                <select
                  className="bg-white rounded-md w-full p-2"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="">Select Color</option>
                  {color.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={addColorToList}
                    className="bg-blue-500 p-2 rounded-md text-white"
                  >
                    Add Color
                  </button>
                  <button
                    onClick={removeColor}
                    className="bg-red-500 p-2 rounded-md text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label>Product Status</label>
                <select
                  className="bg-white rounded-md w-full p-2"
                  value={selectStatus}
                  onChange={(e) => setSelectStatus(e.target.value)}
                >
                  <option value="true">Active</option>
                  <option value="false">Disable</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label>Discount %</label>
                <input
                  type="text"
                  className="bg-white rounded-md w-full p-2"
                  value={saleDiscount}
                  placeholder="%"
                  onChange={(e) => setSaleDiscount(e.target.value)}
                />
                <button
                  onClick={applyDiscountPrice}
                  className="bg-blue-500 p-2 rounded-md text-white mt-2 ms-auto"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="flex justify-around">
              <div className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-blue-500 p-2 rounded-md text-white"
                >
                  Add Product
                </button>
                <NavLink to="/admin-dashboard">
                  <button className="bg-red-500 p-2 rounded-md text-white">
                    Cancel
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProductComponent;
