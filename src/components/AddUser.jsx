import axios from 'axios'
import React, { useState } from 'react'

const AddUser = () => {
  const [user, setData] = useState(
    {
      "name": "",
      "dob": "",
      "bldgrp": "",
      "mob": "",
      "addrs": "",
      "pin": "",
      "distr": "",
      "place": "",
      "email": "",
      "uname": "",
      "pswd": "",
      "cpswd": "",
      "img": ""
    }
  )

  const inputHandler = (event) => {
    setData({ ...user, [event.target.name]: event.target.value })
  }

  const readValue = () => {
    console.log(user)
    axios.post("http://localhost:8235/add", user).then(
      (response) => {
        console.log(response.data)
        if (response.data.status === "success") {
          alert("Successfully Added!")
        } if (response.data.status === "passworderror") {
          alert("Recheck Passwords!!!")
        }
      }
    ).catch(
      (error) => {
        alert(error.message)
      }
    )
  }

  return (
    <div>
      <div class="card text-center mb-3">
        <div class="card-body">
          <h3 class="card-title"><b>User Sign Up</b></h3>
          <p></p>
          <div className="container">
            <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Name :</label>
                    <input type="text" className="form-control" name='name' value={user.name} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Date of Birth :</label>
                    <input type="date" id="" className="form-control" name='dob' value={user.dob} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Blood Group :</label>
                    <select id="" className="form-control" name='bldgrp' value={user.bldgrp} onChange={inputHandler}>
                    <option value=""></option>
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="AB+">AB+</option>
                      <option value="O+">O+</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                      <option value="AB-">AB-</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Mobile :</label>
                    <input type="text" className="form-control" name='mob' value={user.mob} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Address :</label>
                    <textarea id="" className="form-control" name='addrs' value={user.addrs} onChange={inputHandler}></textarea>
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PIN Code :</label>
                    <input type="number" className="form-control" name='pin' value={user.pin} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">District :</label>
                    <input type="text" className="form-control" name='distr' value={user.distr} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Place :</label>
                    <input type="text" className="form-control" name='place' value={user.place} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Image URL :</label>
                    <input type="text" className="form-control" name='img' value={user.img} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">E-mail ID:</label>
                    <input type="text" className="form-control" name='email' value={user.email} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Username :</label>
                    <input type="text" className="form-control" name='uname' value={user.uname} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Password :</label>
                    <input type="password" className="form-control" name='pswd' value={user.pswd} onChange={inputHandler} />
                  </div>
                  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Confirm Password :</label>
                    <input type="password" className="form-control" name='cpswd' value={user.cpswd} onChange={inputHandler} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button className="btn btn-success" onClick={readValue}>Sign Up</button>
          <br />
          <br />
          <b>Go Back <a href="/">Home</a></b>
          <br />
          <br />
          View User List by Clicking <a href="/v">Here</a>
        </div>
      </div>
    </div>
  )
}

export default AddUser