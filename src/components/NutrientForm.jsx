import { Fragment } from "react";
import FormInput from "./FormInput";

import "./NutrientForm.css"
const NutrientForm = () => {
    return (
    <>
        <form action="/" className="nutrient-form" method="POST">
            <h2>Details:</h2>
            <div className="fx">
                <FormInput name="name" ph="Item Name"/>
                <FormInput name="cal" ph="Calories"/>
                <FormInput name="serving" ph="Serving Size(g)"/>
            </div>
            <h2>Macros:</h2>
            <div className="fx">
                <FormInput name="protein" ph="Protein (g)"/>
                <FormInput name="carb" ph="Total Carbohydrates (g)"/>
                <FormInput name="fat" ph="Total Fat (g)"/>
            </div>
            <h2>Other</h2>
            <div className="fx">
                <FormInput name="sodium" ph="Sodium (mg)"/>
                <FormInput name="cholesterol" ph="Cholesterol (mg)"/>
                <FormInput name="potassium" ph="Potassium (mg)"/>
                <FormInput name="sugar" ph="Sugars (g)"/>
                <FormInput name="calcium" ph="Calcium (%)"/>
                <FormInput name="iron" ph="Iron (%)"/>
                <FormInput name="va" ph="Vitamin A (%)"/>
                <FormInput name="vc" ph="Vitamin C (%)"/>
                <FormInput name="vd" ph="Vitamin D (%)"/>
            </div>
            <button type="submit" className="primary">SUBMIT</button>
        </form>
    </>);
}

export default NutrientForm;