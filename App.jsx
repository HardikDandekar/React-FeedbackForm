import { nanoid } from "nanoid";
import React from "react";
import { useState } from "react";

const App = () => {

  //input name  -->
  const[ninput, setninput] = useState("");
  const[tasks , settasks] = useState(
    JSON.parse(localStorage.getItem("item"))|| []);

  //input email  -->
  const[einput, seteinput] = useState("");

  //type - feedback-->
  const[finput, setfinput] = useState("");

  //type - rating

  const[tinput, settinput] = useState("");

  // user feedback
  const[feedinput, setfeedinput] = useState("");

  
  

  // button-----
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Clicked"); 
    const task = {
      Name : ninput,
      Email : einput,
      Feedback_Type :finput,
      Rating : tinput,
      Feedback : feedinput
    }
    const updateTask = [...tasks , task];
    settasks(updateTask)
    setninput("")
    seteinput("")
    setfinput("")
    settinput("")
    setfeedinput("")

    localStorage.setItem("item",JSON.stringify(updateTask))
  
  }
 
 

  return (
    <div>
      {/* ------------ */}

      <div className="formDiv h-screen  flex justify-center items-center">
        <div className="innerDiv h-[93vh] w-[60vh]  rounded-xl bg-gray-200">
          <div className="customer flex justify-center">
            <h1 className="text-3xl py-3 font-semibold ">Customer Details</h1>
          </div>

          <div className="inpDiv p-4">
            <h3 className="text-[20px] mb-2">Enter Name</h3>

            <input
            value={ninput}
            onChange={(e) => setninput(e.target.value)}
              className="border-b-2 border-gray-500  rounded p-1  w-full mb-3"
              type="text"
              placeholder="Your Name... "
            />

            <h3 className="text-[20px] mb-2">Email</h3>
            <input
             value={einput}
             onChange={(e) => seteinput(e.target.value)}
          
              className=" border-b-2 border-gray-500 rounded p-1  w-full"
              type="email"
              placeholder="Email... "
            />

            <div className="feedback flex justify-center mt-4 ">
              <h1 className="text-3xl py-3 font-semibold ">Feedback</h1>
            </div>

            <h3 className="text-[20px] mb-2">Feedback Type</h3>
            <select
            value={finput}
            onChange={(e) => setfinput(e.target.value)}
              name=""
              id=""
              className="border-b-2 border-gray-500 placeholder-gray-800 rounded p-1  w-full mb-3"
            >
              <option disabled>Select</option>
              <option value="product">Product</option>
              <option value="customer support">Customer Support</option>
              <option value="delivery">Delivery</option>
              <option value="quality">Quality</option>
            </select>

            <h3 className="text-[20px] mb-2">Rating</h3>
            <select
                value={tinput}
                onChange={(e) => settinput(e.target.value)}
              name=""
              id=""
              className="border-b-2 border-gray-500 placeholder-gray-800 rounded p-1  w-full mb-3"
            >
              <option disabled>Rate</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <h3 className="text-[20px] mb-2 ">Feedback</h3>
            <textarea value={feedinput}
            onChange={(e) => setfeedinput(e.target.value)}
              className="w-full h-[90px] rounded-xl p-2"
              name=""
              id=""
              placeholder="Feedback here.."
            ></textarea>

            <button onClick={submitHandler} className="p-2 px-5 rounded-xl bg-blue-400 ml-1 mt-2 hover:bg-blue-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}

      <div className="page2 h-screen flex justify-center">
        <div className="innerDiv h-[93vh] w-[60vh] mt-5  rounded-xl bg-gray-200">
          <div className="customer flex justify-center">
            <h1 className="text-3xl py-3 font-semibold ">Receive Feedback</h1>
          </div>

          {tasks.map((t) =>
              <div className="inpDiv p-4 bg-blue-400 rounded-xl mb-3 mt-5">
            
              <h3 className="text-[20px] mb-2">Name : {t.Name}</h3>
              <h3 className="text-[20px] mb-2">Email : {t.Email}</h3>
              <h3 className="text-[20px] mb-2">Feedback type : {t.Feedback_Type}</h3>
              <h3 className="text-[20px] mb-2">Rating : {t.Rating}</h3>
              <h3 className="text-[20px] mb-2">Feedback : {t.Feedback}</h3>
            </div>

          )}

        


          {/* <div className="inpDiv p-4 bg-blue-400 rounded-xl">
            <h3 className="text-[20px] mb-2">Name : hardik</h3>
            <h3 className="text-[20px] mb-2">Email : hardik@gamil.com</h3>
            <h3 className="text-[20px] mb-2">Feedback type : Product</h3>
            <h3 className="text-[20px] mb-2">Rating : 5</h3>
            <h3 className="text-[20px] mb-2">Feedback : Lorem ipsum dolor sit amet.</h3>
          </div> */}

        </div>
      </div>


{/* ------------ */}
    </div>
  );
};

export default App;
