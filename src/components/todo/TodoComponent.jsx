import { useParams} from 'react-router-dom'
import { retrieveTodoApi } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'
import { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'


export default function TodoComponent(){

    const {id} = useParams()

    const [description, setDescription] = useState('')

    const [targetDate, settargetDate] = useState('')

    const authContext = useAuth()

    const username = authContext.username

    useEffect(
        () => retrieveTodos(), [id]
    )

    function retrieveTodos(){
        retrieveTodoApi(username, id)
        .then(response => {
           setDescription(response.data.description)
           settargetDate(response.data.targetDate)
        })
        .catch(error => console.log(error))
    }

        //Onsubmit function
    function onSubmit(values){
        console.log(values)
    }

            //Validation function
    function validate(values){
        let errors = {
            description: 'Enter valid description'
        }

        console.log(values)
        return errors
    }

    return(
    <div className="container">
    <h1>Enter Todo Deatails</h1>
    <div>
            <Formik
        initialValues={{ description, targetDate }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate = {validate}
        >
        {props => (
            <Form>
                <ErrorMessage name='description' component="div" className='alert alert-warning'></ErrorMessage>
                <ErrorMessage name='targetDate' component="div" className='alert alert-warning'></ErrorMessage>
            <fieldset className='form-group'>
                <label htmlFor="">Description</label>
                <Field type="text" className="form-control" name="description" />
            </fieldset>
            <fieldset className='form-group'>
                <label htmlFor="">Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
            </fieldset>
            <div>
                <button className='btn btn-success m-5' type="submit">Save</button>
            </div>
            </Form>
        )}
        </Formik>

    </div>
    </div>
    )
}