"use client"
import styles from "./form.css"
import { useForm } from 'react-hook-form'

function form() {
  const {
    register,
    handleSubmit,
    setError, // set errors
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  // artifical dealy due to networkk
  /*const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }*/
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:5173/", {method: "POST",body: JSON.stringify(data),})
    let res = await r.text()
  }

  return (
    <>
    <div className="headp">Welcome To The Off-road World For Online Booking Fill The Form Below</div><br/>
      <div className='formdiv'>
        {isSubmitting && <div>loading</div>}
        
        <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
        <div> Name:  
          <input {...register("Name", { required: true, minLength: { value: 3, message: "Name is too small" }, maxLength: { value: 8, message: "Name is to long" } })} type="text" placeholder="Enter Your Name" /><br></br>
          {errors.Name && <div className='msg'>{errors.Name.message}</div>}</div>
          <div> Location:
          <input {...register("Location", { required: true, minLength: { value: 3, message: "Location is too small" }, maxLength: { value: 8, message: "Locattion is too Big" } })} type="location" placeholder='Enter Your Location' /><br></br>
          {errors.Location && <div className='msg'>{errors.Location.message}</div>}</div>
        <div> Car Model:  
          <input {...register("Car", { required: true, minLength: { value: 3, message: "Car Model is too small" }, maxLength: { value: 8, message: "Car Model is to long" } })} type="car model" placeholder="Enter Your Car Model" /><br></br>
          {errors.Car && <div className='msg'>{errors.Car.message}</div>}</div>
          <div> Phone:
          <input {...register("Phone", { required: true, minLength: { value: 10, message: "Phone Number is Invalid" }, maxLength: { value: 10, message: "Phone Number is Invalid" } })} type="phone" placeholder='Enter Your Phone Number' /><br></br>
          {errors.Phone && <div className='msg'>{errors.Phone.message}</div>}</div><br/>
          <input className="submitf" disabled={isSubmitting} type="submit" value="Submit" /><br></br>
          This Form Also Generates Error Messages<br></br>
          Submitted Data is available at the backend Server
          {errors.myform && <div className='msg'>{errors.myform.message}</div>}
        </form>
      </div><br/>
      <div className="fi">
        <img className="fi1" src="https://www.nps.gov/deva/learn/images/Vehicle-in-salt-flats-from-shared-drive-2-crop-narrow-2.jpg" alt="" />
      </div>
      <br/>
    </>
  )
}

export default form
