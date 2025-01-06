import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch, 
      } = useForm();

      const navigate = useNavigate();

      const onSubmit = (data) => {
        const existingData = JSON.parse(localStorage.getItem("userData")) || [];
        existingData.push(data);
        localStorage.setItem("userData", JSON.stringify(existingData));
        navigate("/table");
      };
    
    
      const password = watch("password");

  return (
    <div className="mx-auto flex items-center flex-col justify-center min-h-[90vh] text-white p-4 sm:p-8 md:p-12 lg:p-16">
    <div>
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
        Sign up
      </h1>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
      <div>
        <div className="py-5 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              {...register("firstName", {
                required: "First name is required",
              })}
              placeholder="First Name"
              className="py-2 rounded-full pl-5 pr-5 text-black outline-none bg-white bg-opacity-20 placeholder-white placeholder-opacity-80"
            />
            {errors.firstName && (
              <span className="text-amber-400">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <input
            type="text"
            {...register("secondName")}
            placeholder="Last Name"
            className="py-2 rounded-full pl-5 pr-2 text-black outline-none bg-white bg-opacity-20 placeholder-white placeholder-opacity-80"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email",
            },
          })}
          placeholder="Email"
          className="py-2 rounded-full pl-5 pr-5 text-black outline-none bg-white bg-opacity-20 placeholder-white placeholder-opacity-80"
        />
        {errors.email && (
          <span className="text-amber-400">{errors.email.message}</span>
        )}
        <input
          type="number"
          {...register("mobileNumber", {
            required: "Phone number is required",
          })}
          placeholder="Phone Number"
          className="py-2 appearance-none rounded-full pl-5 pr-5 text-black outline-none bg-white bg-opacity-20 placeholder-white placeholder-opacity-80"
        />
        {errors.mobileNumber && (
          <span className="text-amber-400">
            {errors.mobileNumber.message}
          </span>
        )}
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,
              message:
                "Password should contain an uppercase letter, a lowercase letter, a number, and a special character",
            },
          })}
          placeholder="Password"
          className="py-2 rounded-full pl-5 pr-5 text-black outline-none bg-white bg-opacity-20 placeholder-white placeholder-opacity-80"
        />
        {errors.password && (
          <span className="text-amber-400 text-[10px]">
            {errors.password.message}
          </span>
        )}
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          className="py-2 rounded-full pl-5 pr-5 text-black outline-none bg-white bg-opacity-20 placeholder-white placeholder-opacity-80"
        />
        {errors.confirmPassword && (
          <span className="text-amber-400 text-[10px]">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div className="flex items-center justify-center py-5">
        <label htmlFor="" className="pr-5">
          Gender:
        </label>
        <input
          type="radio"
          {...register("gender", { required: "Please select a gender" })}
          value="male"
          id="male"
        />
        <label htmlFor="male" className="pr-5">
          Male
        </label>

        <input
          type="radio"
          {...register("gender", { required: "Please select a gender" })}
          value="female"
          id="female"
        />
        <label htmlFor="female" className="pr-5">
          Female
        </label>

        <input
          type="radio"
          {...register("gender", { required: "Please select a gender" })}
          value="other"
          id="other"
        />
        <label htmlFor="other" className="pr-5">
          Other
        </label>
      </div>
      {errors.gender && (
        <span className="text-amber-400 text-[10px]">
          {errors.gender.message}
        </span>
      )}

      <div className="w-full">
      
        <input type="submit" className='w-full text-black font-medium py-2 rounded-full pl-5 pr-5 outline-none bg-white bg-opacity-80 hover:bg-opacity-100' />
      </div>
      <div className="flex justify-between items-center py-2">
        <div className="flex items-center">
          <input type="checkbox" {...register("rememberMe")} />
          <label htmlFor="" className="opacity-80 px-1">
            Remember me
          </label>
        </div>
        <div>
          <span className="opacity-80">Have an Account?</span>
          <a href=""className="opacity-80 hover:opacity-100">
            Sign In
            </a> 
        </div>
      </div>
    </form>
  </div>
  )
}

export default SignUp