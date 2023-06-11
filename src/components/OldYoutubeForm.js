import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log(values)
  alert("ok")
}

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format'
  }

  if (!values.channel) {
    errors.channel = 'Required'
  }

  return errors
} 

const validationSchema=Yup.object({
  name:Yup.string().required('Required'),
  email:Yup.string().email('Invalid email format')
  .required('Required'),
  channel:Yup.string().required('Required')
})

function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    //validate,
    validationSchema,

  });

  console.log('form values', formik.values)
  return (
    <div>



      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}></input>
          {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}></input>
          {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>channel</label>
          <input type='text' id='channel' name='channel' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel}></input>
          {formik.errors.channel && formik.touched.channel ? <div className='error'>{formik.errors.channel}</div> : null}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm