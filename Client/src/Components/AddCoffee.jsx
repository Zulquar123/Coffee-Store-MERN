


export default function AddCoffee() {
const handleFormSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const coffeename = form.coffeename.value;
  const chefname = form.chefname.value;
  const supplier = form.supplier.value;
  const flavour = form.flavour.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;
  const addNewCoffee = {
    coffeename,
    chefname,
    supplier,
    flavour,
    category,
    details,
    photo,
  };
  console.log(addNewCoffee);
  form.reset();

  // Send Data to Server

  fetch("http://localhost:3000/coffee", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(addNewCoffee),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

  return (
    <div className="w-[82.5]em h-screen bg-[#F4F3F0] flex flex-col gap-3">
      <div className=" flex justify-center">
        <h2 className="text-[#374151] stroke-[#000000]  text-[1.8125em] font-semibold">
          Add New Coffee
        </h2>
      </div>
      <div className="flex justify-center ">
        <p className="text-[#1B1A1A] text-[1.125em] leading-5 text-center text-sm font-semibold text-[#1B1A1A]">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed <br /> to using Content here.
        </p>
      </div>

      <div className="w-[68.5em] ">
        <form
          action=""
          method=""
          className="grid grid-cols-2 gap-2"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col ">
            <label htmlFor="coffeename" className="font-semibold p-1">
              Name
            </label>
            <input
              type="text"
              name="coffeename"
              id="coffeename"
              placeholder="Enter coffee name"
              className="outline-none p-2"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="chefname" className="font-semibold p-1">
              Chef
            </label>
            <input
              type="text"
              name="chefname"
              id="chefname"
              placeholder="Enter coffee Chef"
              className="outline-none p-2"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="supplier" className="font-semibold p-1">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              id="supplier"
              placeholder="Enter the supplier name"
              className="outline-none p-2"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="flavour" className="font-semibold p-1">
              Flavour
            </label>
            <input
              type="text"
              name="flavour"
              id="flavour"
              placeholder="Enter coffee flavour"
              className="outline-none p-2"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="catagory" className="font-semibold p-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Enter coffee Catagory"
              className="outline-none p-2"
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="details" className="font-semibold p-1">
              Details
            </label>
            <input
              type="text"
              name="details"
              id="details"
              placeholder="Enter coffee Details"
              className="outline-none p-2"
            />
          </div>
          <div className="flex flex-col  col-span-2">
            <label htmlFor="photo" className="font-semibold p-1">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter photo URL"
              className="outline-none p-2"
            />
          </div>
          <div className="flex flex-col col-span-2">
            <button className="bg-[#D2B48C] p-2 stroke-[#331A15] font-semibold">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
