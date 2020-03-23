import React from "react";
import { toast } from "react-toastify";

export default function Alert(type, message) {
  return toast[type](<div> {message}</div>);
}
