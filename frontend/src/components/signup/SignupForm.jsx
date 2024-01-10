const SignupForm = () => {
    return (
        <form action="http://localhost:3001/signup" method="POST">
            <div>
                <label htmlFor="firstname">First Name:</label>
                <input id="firstname" name="firstname"></input>
            </div>
            <div>
                <label htmlFor="lastname">Last Name:</label>
                <input id="lastname" name="lastname"></input>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="username"></input>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"></input>
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age"></input>
            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div>
                <label htmlFor="height">Height (inches):</label>
                <input type="number" id="height" name="height"></input>
            </div>
            <div>
                <label htmlFor="weight">Weight (lbs):</label>
                <input type="weight" id="weight" name="weight"></input>
            </div>
            <div>
                <label htmlFor="activity">Activity Level:</label>
                <select id="activity" name="activity">
                    <option value="1.2">little or no exercise</option>
                    <option value="1.375">light: 1-3 times/week</option>
                    <option value="1.55">moderate: 4-5 times/week</option>
                    <option value="1.725">active: 6-7 times/week</option>
                </select>
            </div>
            <div>
                <label htmlFor="goal">Goal:</label>
                <select id="goal" name="goal">
                    <option value="0">maintain weight</option>
                    <option value="-250">mild weight loss 0.25kg/week</option>
                    <option value="-500">weight loss 0.5kg/week</option>
                    <option value="-1000">extreme weight loss 1kg/week</option>
                    <option value="250">mild weight gain 0.25kg/week</option>
                    <option value="500">weight gain 0.5kg/week</option>
                    <option value="1000">extreme weight gain 1kg/week</option>
                </select>
            </div>
            <button type="submit">Sign up</button>
        </form>
    );
};

export default SignupForm;