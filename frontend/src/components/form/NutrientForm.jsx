import { Fragment } from "react";
import FormInput from "./FormInput";

import "./NutrientForm.css"
const NutrientForm = () => {

    return (
    <>
        <form action="http://localhost:3001/nutrition" className="nutrient-form" method="POST" >
            <h2>Details:</h2>
            <div className="fx">
                <FormInput name="name" ph="Item Name"/>
                <FormInput value="0" name="cal" ph="Calories"/>
                <FormInput value="0" name="serving" ph="Serving Size(g)"/>
            </div>
            <h2>Macros:</h2>
            <div className="fx">
                <FormInput value="0" name="protein" ph="Protein (g)"/>
                <FormInput value="0" name="carb" ph="Total Carbohydrates (g)"/>
                <FormInput value="0" name="fat" ph="Total Fat (g)"/>
            </div>
            <h2>Other</h2>
            <div className="fx">
                <FormInput value="0" name="sodium" ph="Sodium (mg)"/>
                <FormInput value="0" name="cholesterol" ph="Cholesterol (mg)"/>
                <FormInput value="0" name="potassium" ph="Potassium (mg)"/>
                <FormInput value="0" name="sugar" ph="Sugars (g)"/>
                <FormInput value="0" name="calcium" ph="Calcium (%)"/>
                <FormInput value="0" name="iron" ph="Iron (%)"/>
                <FormInput value="0" name="va" ph="Vitamin A (%)"/>
                <FormInput value="0" name="vc" ph="Vitamin C (%)"/>
                <FormInput value="0" name="vd" ph="Vitamin D (%)"/>
            </div>
            <button type="submit" className="primary">SUBMIT</button>
        </form>
    </>);
}

export default NutrientForm;