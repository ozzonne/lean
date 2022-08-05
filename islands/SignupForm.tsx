/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { useState } from "preact/hooks";

import { Button } from "../components/Button.tsx";
import { Input } from "../components/Input.tsx";

export default function SignupForm() {
  const init_state = { email: "", password: "" };
  const [state, setState] = useState(init_state);
  function handleSubmit() {
    console.log("Submitted");
    console.log("State", state);
  }
  function handleChange(e: { target: any }) {
    setState((ps) => ({ ...ps, [e.target.name]: e.target.value }));
  }
  function handleSignUp() {
    // const signUp = supa
  }
  return (
    <div class={tw`bg-blue`}>
      <hr />
      <form>
        <label for="email">
          <Input value={state.email} onChange={handleChange} id="email" name="email" type="email" placeholder="example@email.com" required />
        </label>
        <label for="password">
          <Input value={state.password} onChange={handleChange} id="password" name="password" type="password" placeholder="* * * * * * * *" required />
        </label>
        <Button type="submit" onClick={handleSubmit}>
          Signup
        </Button>
        <Button
          type="button"
          onClick={() => {
            setState((ps) => ({ ...ps, ...init_state }));
          }}
        >
          Reset
        </Button>
      </form>
    </div>
  );
}
