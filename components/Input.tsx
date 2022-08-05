/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export function Input(props: h.JSX.HTMLAttributes<HTMLButtonElement>) {
  return <input {...props} disabled={!IS_BROWSER || props.disabled} class={tw`px-2 py-1 border(blue-100 2) hover:bg-blue-200 rounded`} />;
}
