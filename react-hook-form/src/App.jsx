import './App.css'
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm()

  async function onSubmit(data){
    await new Promise((resolve)=>{
      setTimeout(resolve,5000)
    })
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>First Name</label>
          <input
            type="text"
            className={errors.firstName ? "input-error" : ""}
            {...register("firstName",{
              required:"First name is required",
              minLength:{value:3,message:"First name must be at least 3 characters long"},
              maxLength:{value:20,message:"First name must be less than 20 characters long"}
            })}
          />
          {errors.firstName && <p className="error-msg">{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Middle Name</label>
          <input
            className={errors.middleName ? "input-error" : ""}
            type="text"
            {...register("middleName",{
              minLength:{value:3,message:"Middle name must be at least 3 characters long"},
              maxLength:{value:20,message:"Middle name must be less than 20 characters long"}
            })}
          />
          {errors.middleName && <p className='error-msg'>{errors.middleName.message}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            className={errors.lastName ? "input-error" : ""}
            type="text"
            {...register("lastName",{
              required:"Last name is required",
              pattern:{value:/^[A-Za-z]+$/,message:"Last name must contain only letters"},
              minLength:{value:3,message:"Last name must be at least 3 characters long"},
              maxLength:{value:20,message:"Last name must be less than 20 characters long"}
            })}
          />
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
        </div>

        <input
          type="submit"
          value={isSubmitting ? "Submitting..." : "Submit"}
          disabled={isSubmitting}
        />

      </form>
    </>
  )
}

export default App