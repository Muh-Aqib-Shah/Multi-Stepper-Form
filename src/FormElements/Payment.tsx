import { ErrorMessage, Field, Formik } from "formik"
import { z } from "zod"
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ErrMessage } from "../CustomErrMessage";
import FormFields from "./interface/formInterface";


export const PaymentForm: React.FC<FormFields> = ({card_name,address,card_number,set_form_page,set_form_details}) => {

    return(
        <div className="login-cont">
            <Formik
              initialValues={{
                card_name: card_name,
                address: address,
                card_number: card_number
              }}
              onSubmit={values => {
                set_form_details((prev: FormFields) => ({...prev,...values}))
                set_form_page(2)
              }}
              validationSchema={ toFormikValidationSchema(z.object({
                card_name: z.string().min(4,"name must be more than 4 characters"),
                address: z.string().min(10,"Atleast 10 characters!"),
                card_number: z.string().min(13,"Atleast 13 digits are required!"),
              }))
            }>
                {
                    ({handleSubmit,dirty,isValid}) => (
                        <form onSubmit={handleSubmit} className="form">

                            <h2 className="login-form-head">Payment Details</h2>
                            <label htmlFor="card_name" >Card Holder's Name</label>
                            <Field id="card_name" name="card_name" className="login-field"  placeholder="Jhon Doe"/>
                            <ErrorMessage id="card_name" name="card_name" render={(msg => <ErrMessage message={msg} />)}/>
                            
                            <label htmlFor="addrs">Address</label>
                            <Field id="address" name="address" className="login-field" required placeholder="Atleast 10 characters!"/>
                            <ErrorMessage id="address" name="address" render={(msg => <ErrMessage message={msg} />)}/>

                            <label htmlFor="card_number">Card Number</label>
                            <Field id="card_number" name="card_number" className="login-field" required placeholder="Atleast 13 characters!"/>
                            <ErrorMessage id="card_number" name="card_number" render={(msg => <ErrMessage message={msg} />)}/>

                            <div className="form-btns-cont">
                            <input type="button" className="form-prev-btn" value="< Prev" onClick={()=> set_form_page(0)} />
                            <input type="submit" disabled={!dirty || !isValid} className="sbmt-btn" value="Next >" onClick={()=> console.log("CALLED:")} />
                            </div>

                        </form>
                    )
                }
            </Formik>
        </div>
    )

}