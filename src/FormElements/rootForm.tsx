import { useState } from "react"
import { Login } from "./Login"
import { PaymentForm } from "./Payment"
import { StepperSlide } from "./Stepper"
import { Review } from "./Review"
import FormFields from "./interface/formInterface"
import { Success } from "./successForm"
import { FormStyles } from "../styles/FormStyles"

export const UserForm = () => {

    let [formStep,setFormStep] = useState<number>(0)
    let [formFields,setFormFields] = useState<FormFields>({username:'',password:'',repassword:'',address:'',card_name:'',card_number:''})

    function getValidForm(){
        
        switch(formStep){
            case 0:
                return <Login {...formFields} set_form_details={setFormFields} set_form_page={setFormStep}/>
            case 1:
                return <PaymentForm {...formFields} set_form_details={setFormFields} set_form_page={setFormStep}/>
            case 2:
                return <Review {...formFields} set_form_details={setFormFields} set_form_page={setFormStep}/>
            case 3:
                return <Success />
            default:
                return <h1>Error Landing Page...</h1>
        }
    }
    
    return(
        <>
        <StepperSlide activeStep={formStep} />
        <FormStyles>
        {getValidForm()}
        </FormStyles>
        </>
    )
}