import React from'react'

const Form = ({ register }) => {
	return (
		<>
			<div>
				<label htmlFor="type-movie">Movie: </label>
     		<input type="radio" value="type-movie" name="type" ref={register} />
    
				<label htmlFor="type-serie">Serie: </label>
     		<input type="radio" value="type-serie" name="type" ref={register} />
    	</div>
    	<div>
				<label htmlFor="movie-title">Title: </label>
     		<input name="movie-title" ref={register} />
    	</div>
    	<div>
				<label htmlFor="movie-director">Director: </label>
     		<input name="movie-director" ref={register} />
    	</div>
		</>
	)
}

export default Form