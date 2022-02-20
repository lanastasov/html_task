import React, { useState } from "react";
import { Button } from "react-bootstrap";
import weight from "../assets/weight.svg";
import ruler from "../assets/ruler.svg";
import Result from "./Result";
import { Link } from "react-router-dom";

// import weight from "../assets/wave-big.svg";

const TegloCalculator = () => {
  const [showComponent, setShowComponent] = useState(false);

  function handleSubmit(e) {
    // e.preventDefault();
    setShowComponent(!showComponent);
    console.log("2.", showComponent);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Какво трябва да бъде теглото ми по време на бременност?</h4>
        <div className="allUnit">
          <div className="formWrapper">
            <img className="icon" src={weight} />
            <input type="text" placeholder="Тегло преди забременяване" />
            <span className="unit">кг</span>
          </div>
        </div>
        <div className="allUnit">
          <div className="formWrapper">
            <img className="icon" src={weight} />
            <input type="text" placeholder="Тегло в момента" />
            <span className="unit">кг</span>
          </div>
        </div>
        <div className="allUnit">
          <div className="formWrapper">
            <img className="icon" src={ruler} />
            <input type="text" placeholder="Височина" />
            <span className="unit">см</span>
          </div>
        </div>
        <div className="allUnit">
          <div className="formWrapper">
            <h4 className="label">В коя седмица си бременна?</h4>
            <select
              name="week"
              id="week"
              data-rule-required="true"
              data-msg-required="Моля, изберете седмица"
              aria-required="true"
            >
              <option value="">Избери седмица</option>
              <option value="1">седмица 1</option>
              <option value="2">седмица 2</option>
              <option value="3">седмица 3</option>
              <option value="4">седмица 4</option>
              <option value="5">седмица 5</option>
              <option value="6">седмица 6</option>
              <option value="7">седмица 7</option>
              <option value="8">седмица 8</option>
              <option value="9">седмица 9</option>
              <option value="10">седмица 10</option>
              <option value="11">седмица 11</option>
              <option value="12">седмица 12</option>
              <option value="13">седмица 13</option>
              <option value="14">седмица 14</option>
              <option value="15">седмица 15</option>
              <option value="16">седмица 16</option>
              <option value="17">седмица 17</option>
              <option value="18">седмица 18</option>
              <option value="19">седмица 19</option>
              <option value="20">седмица 20</option>
              <option value="21">седмица 21</option>
              <option value="22">седмица 22</option>
              <option value="23">седмица 23</option>
              <option value="24">седмица 24</option>
              <option value="25">седмица 25</option>
              <option value="26">седмица 26</option>
              <option value="27">седмица 27</option>
              <option value="28">седмица 28</option>
              <option value="29">седмица 29</option>
              <option value="30">седмица 30</option>
              <option value="31">седмица 31</option>
              <option value="32">седмица 32</option>
              <option value="33">седмица 33</option>
              <option value="34">седмица 34</option>
              <option value="35">седмица 35</option>
              <option value="36">седмица 36</option>
              <option value="37">седмица 37</option>
              <option value="38">седмица 38</option>
              <option value="39">седмица 39</option>
              <option value="40">седмица 40</option>
            </select>
          </div>
        </div>
        <div className="allUnit">
          <div className="formWrapper">
            <label for="twins">
              <span>Очаквам близнаци</span>
              <input id="twins" type="checkbox" />
            </label>
          </div>
        </div>
        <div className="allUnit">
          <div className="formWrapper button">
            <Link to={`/result`}>
              {" "}
              <Button type="submit">Изчисли</Button>
            </Link>
          </div>
        </div>
      </form>

      {/* {showComponent ? <Result /> : null} */}
    </>
  );
};

export default TegloCalculator;
