import { useMutation } from '@apollo/react-hooks';
import { ErrorMessage, Field, Form as FForm, Formik } from 'formik';
import React, { FC } from 'react';
import { Button, Dropdown, Form as SForm } from 'semantic-ui-react';
import * as Yup from 'yup';
import DataGrid from './components/grid';

const gql = require('graphql-tag')

// import en from './localization/en';
//  const CREATE_USER_MUTATION = gql`
//   mutation userAdd($data: any) {
//     userAdd(data: $data) {
//       id
//       firstName
//       lastName
//       isActive
//     }
//   }
// `
 const CREATE_USER_MUTATION = gql`
  mutation {
  userAdd(firstName:"acheeea", lastName: "dagnawww", isActive: true)
}
`


// const USER = gql`
// {
//   userAdd(id:1) {
//       firstName
//       lastName
//     }
//   }
// `

type Props = {
  n?: string
}
const options = [
 { key: 1, text: 'Germany', value: 1 },
 { key: 2, text: 'Italy', value: 2 },
 { key: 3, text: 'France', value: 3 },
 { key: 4, text: 'Holand', value: 4 },
 { key: 5, text: 'England', value: 5 },
 { key: 6, text: 'Norway', value: 6 },
 { key: 7, text: 'USA', value: 7 },
 { key: 8, text: 'Denmark', value: 8 },
 { key: 9, text: 'Sweden', value: 9 },
 { key: 10, text: 'Filiand', value: 10 }]


 const Register = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  email: Yup.string()
    .email('Invalid email')
    .required(),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  date: Yup.date(),
  gender: Yup.string()
});

const SignUp: FC<Props> = (): any => {
  
  const [registerMutation, { loading, error }] = useMutation(CREATE_USER_MUTATION)

  const onSubmit = (values: any):void => {
      // alert(JSON.stringify(values, null, 2));
      console.log('value == ', JSON.stringify(values, null, 2))
      const data = {
        firstName: 'vito',
        lastName: 'marco',
        isActive: true
      }
      const r = registerMutation({ variables: { data } })
  }
  
  return (
  <div className="regForm">
    <h1 className="heading">Please Fill the Following Form!</h1>
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', date: '', gender: '' }}
      validationSchema={Register}
      onSubmit={onSubmit}
    >
      {(isSubmitting: boolean, values: object, isValid: boolean, errors: object) => (
        <FForm className="ui form">
          <SForm.Group widths="equal">
            <div className="field customField">
              <label>First Name</label>
              <div className="ui fluid input">
                <Field type="firstName" name="firstName" placeholder='first name' />
              </div>
              <ErrorMessage name="firstName" component="div" />
            </div>

            <div className="field customField">
              <label>Last Name</label>
              <div className="ui fluid input">
                <Field type="lastName" name="lastName" placeholder='last name' />
              </div>
              <ErrorMessage name="lastName" component="div" />
            </div>
          </SForm.Group>

          <SForm.Group widths="equal">
            <div className="field customField">
            <div>  <i className="mail icon"></i><label>Email</label> </div>
              <div className="ui fluid input">
                <Field type="email" name="email" placeholder='email' />
              </div>
              <ErrorMessage name="email" component="div" />
            </div>

            <div className="field customField">
              <label>Password</label>
              <div className="ui fluid input">
                <Field type="password" name="password" placeholder='password' />
              </div>
              <ErrorMessage name="password" component="div" />
            </div>
          </SForm.Group>

          <SForm.Group widths="equal">
            <div className="field customField">
              <label>Birth Date</label>
              <div className="ui fluid input">
                <Field type="date" name="date" />
              </div>
            </div>

            <div className="field  fluid customField">
              <label className="ache">Citizenship</label>
              <Dropdown fluid
              search
              selection
              closeOnChange
              clearable
                options={options} />
            </div>
          </SForm.Group>

          <div> <label>Gender</label> </div>
          <SForm.Group widths="equal">
            <Field
             
                label='Male'
                type="radio"
                name='gender'
                value='male'
                checked={true}
              />

            <Field
                label='Female'
                type="radio"
                name='gender'
                value='female'
              />
            {/* </SForm.Field> */}
          </SForm.Group>
        
          <Button type="submit"  primary={true} >Submit</Button>
        </FForm>

      )}
    </Formik>

   <DataGrid />
  </div>
)};   
export default SignUp
