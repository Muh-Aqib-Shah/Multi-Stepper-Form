import { ErrorMessage, Field, Formik } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ErrMessage } from "../CustomErrMessage";
import FormFields from "./interface/formInterface";


export const Login: React.FC<FormFields> = ({username,password,repassword,set_form_details,set_form_page}) => {

    return(
        <div className="login-cont">
            <Formik
              initialValues={{
                username: username,
                password: password,
                rePassword: repassword,
                termsnCond: false
              }}
              onSubmit={values => {

                set_form_details((prev: FormFields) => ({...prev,...values}))
                set_form_page(1)
              }}
              validationSchema={ toFormikValidationSchema(z.object({
                username: z.string().min(4,"username must be more than 4 characters").max(10,"username must be at most 10 characters!"),
                password: z.string().min(8,"Password must be 8 characters!"),
                rePassword: z.string().min(1,"Confirm Password is required!")
              }).refine(data => data.password === data.rePassword, {
                path: ['rePassword'],
                message: 'Passwords do not match',
              }))
            }>
                {
                    ({handleSubmit,dirty,isValid}) => (
                        <form onSubmit={handleSubmit} className="form">

                            <h2 className="login-form-head">User Details</h2>
                            
                            <label htmlFor="username" >Username</label>
                            <Field id="username" name="username" className="login-field"  placeholder="Jhon Doe"/>
                            <ErrorMessage id="username" name="username" render={(msg => <ErrMessage message={msg} />)}/>
                            
                            <label htmlFor="password">Password</label>
                            <Field id="password" name="password" className="login-field" required placeholder="Atleast 8 characters!"/>
                            <ErrorMessage id="password" name="password" render={(msg => <ErrMessage message={msg} />)}/>

                            <label htmlFor="rePassword">Confirm Password</label>
                            <Field id="rePassword" name="rePassword" className="login-field" required placeholder="Confirm Password"/>
                            <ErrorMessage id="rePassword" name="rePassword" render={(msg => <ErrMessage message={msg} />)}/>

                            <div className="login-form-terms">
                                <Field type="checkbox" id="termsnCond" name="termsnCond" required />
                                <p className="login-terms-text">By Checking the box you agree to our <span className="blueText">Terms and Conditions</span></p>
                            </div>
                            
                            <div className="form-btns-cont">
                            <input type="submit" disabled={!dirty || !isValid} className="sbmt-btn" value="Next >" />
                            </div>

                        </form>
                    )
                }
            </Formik>
        </div>
    )

}