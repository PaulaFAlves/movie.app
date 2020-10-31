import React, { useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import Header from '../Header'
import Form from '../Form'
import Footer from '../Footer'

const Home = () => {
  const { register, handleSubmit } = useForm()
  const[values, setValues] = useState('')

  const onSubmit = (data) => {
  	const values = data
  	setValues(values)
  }

  return (
  	<>
	  	<Header />
	  	<form onSubmit={handleSubmit(data => onSubmit(data))}>
	    	<Form register={register} />
	    	<Footer />
	    </form>
    </>
  )
}

export default Home